/// <reference path="/Source/XM/Slides/CreateJSSlide.js" />
/// <reference path="/Source/XM/Helpers.js" />

function DnDActivity(params) {
	var that = this;

	this.type = params.type || DnDType.OneToOne;
	this.answerKey = params.answerKey || [];
	this.finishCondition = params.finishCondition || DnDCondition.DroppedAlldraggables;

	this.acceptMultipleDraggables = params.acceptMultipleDraggables || false;
	
	/// Can items can be dropped on overlapping targets and count for both.
	this.drill = false;

	//-- Events that can occur during this activity:
	this.dropRightAction = params.dropRightAction || DnDAction.Snap;
	this.dropWrongAction = params.dropWrongAction || DnDAction.Snap;
	this.dropOutsideAction = params.dropOutsideAction || DnDAction.Reset;

	this.finishRightAction = params.finishRightAction || DnDAction.Continue;
	this.finishWrongAction = params.finishWrongAction || DnDAction.ResetWrong;

	//-- Remediations that can play during this activity:
	this.dropRightRemediation = params.dropRightRemediation || undefined;
	this.dropWrongRemediation = params.dropWrongRemediation || undefined;

	this.finishRightRemediation = params.finishRightRemediation || undefined;
	this.finishWrongRemediation = params.finishWrongRemediation || undefined;

	//-- Items:
	this.draggables = [];
	this.targets = [];

	this.right = [];
	this.wrong = [];

	this.selectedItem;

	//-- Mouse variables.
	var offsetX = 0;
	var offsetY = 0;

	/**
	 *  Find all of the draggable objects and their targets and start the 
	 *  activity.
	 */
	this.Start = function () {
		createjs.Touch.enable(stage, true);

		var i = 1;

		// Get all draggables.
		while (true) {
			if (root['drag' + i] != null) {
				// CreateJS does not infer instance names into the name propery.
				root['drag' + i].name = 'drag' + i;

				// Add the event listener in a closure to maintain proper scope.
				(function (draggable) {
					that.draggables.push(draggable);
					draggable.startX = draggable.x;
					draggable.startY = draggable.y;
					draggable.isConsumed = false;
					draggable.removeAllEventListeners('mousedown');
					draggable.addEventListener('mousedown', function (event) {
						if (!this.isConsumed) {
							that.selectedItem = this;
							XMLog('Picked up ' + this.name + '.');

							// Stick the clicked position to the mouse.
							offsetX = event.stageX - this.x;
							offsetY = event.stageY - this.y;
						} else {
							XMLog(this.name + ' has been consumed and may no longer be picked up!')
						}
					}.bind(draggable));
				})(root['drag' + i]);
			} else
				break;
			i++;
		}

		i = 1;

		// Get all targets
		while (true) {
			if (root['target' + i] != null) {
			    root['target' + i].name = 'target' + i;
			    root['target' + i].draggables = [];
				this.targets.push(root['target' + i]);
			} else if (root['drop' + i] != null) {
			    root['drop' + i].name = 'target' + i;
			    root['drop' + i].draggables = [];
				this.targets.push(root['drop' + i]);
			} else
				break;
			i++;
		}

		if (IsInMobileSafari()) {
			$("#canvas").bind('touchmove', this.Move.bind(this));
		} else {
			stage.addEventListener('stagemousemove', this.Move.bind(this));
		}

		stage.addEventListener('stagemouseup', this.Drop.bind(this));
	};

	this.FixOrigins = function () {
		var i = 1;
		while (true) {
			if (root['drag' + i] != null) {
				root['drag' + i].startX = root['drag' + i].x;
				root['drag' + i].startY = root['drag' + i].y;
				XMLog('drag' + i + '.y new origin: ' + root['drag' + i].y);
			} else
				break;
			i++;
		}

		// Stage won't redraw for some dumb reason.
		DnDAction.ResetAll.bind(this)();
	};

	this.Move = function (event) {
		if (this.selectedItem != undefined) {
			this.selectedItem.x = stage.mouseX - offsetX;
			this.selectedItem.y = stage.mouseY - offsetY;
		}
	};

	this.Drop = function () {
		var isCorrect;
		if (this.selectedItem != undefined) {
			var hit = false;
			for (var i in this.targets) {
			    if (!this.acceptMultipleDraggables && this.targets[i].draggables.length != 0)
			        continue;

				var localPoint = this.targets[i].globalToLocal(stage.mouseX, stage.mouseY);
				var bounds = this.targets[i].getBounds();
				
				// Vectors do not have bounds, use bitmaps for your drop areas!
				if (localPoint.x > bounds.x && localPoint.x < bounds.x + bounds.width &&
					localPoint.y > bounds.y && localPoint.y < bounds.y + bounds.height) {
					hit = true;
					// Dropped on a target...
					switch (this.type) {
						case DnDType.OneToOne: // drag1 -> drop1, no remainder.
						case DnDType.OneToMany: // drag 1 -> drop 1 only.
							isCorrect = i == this.draggables.indexOf(this.selectedItem);
							break;
							
						case DnDType.ManyToOne:
							// answerKey Format: [1, 2, 4...]
							isCorrect = this.answerKey.indexOf(parseInt(this.selectedItem.name.substr(4))) != -1;
							break;

					    case DnDType.ManyToFew:
					        //isCorrect = this.targets[i].name.slice(-1) == this.selectedItem.name.slice(-1);
					        isCorrect = this.answerKey[i].indexOf(parseInt(this.selectedItem.name.substr(4))) != -1;
							break;
					}

					if (isCorrect) {
						XMLog("Correct!");
						// Add to the list of correct answers.
						this.right.push(this.selectedItem);

						if (this.dropRightAction(this.selectedItem, this.targets[i])) {
						    this.selectedItem.isConsumed = true;
						    		this.selectedItem.container = this.targets[i];
						    		this.targets[i].draggables.push(this.selectedItem);
						}
						
						// Do we have a remediation?
						if (this.dropRightRemediation) {
							this.dropRightRemediation.play();
						}
					} else {
						XMLog("Wrong!");

						// Only add the item to the list of wrong answers if it was consumed.
						if (this.dropWrongAction(this.selectedItem, this.targets[i])) {
							this.wrong.push(this.selectedItem);
							this.selectedItem.isConsumed = true;
							this.selectedItem.container = this.targets[i];
							this.targets[i].draggables.push(this.selectedItem);
						}
						
						// Do we have a remediation?
						if (this.dropWrongRemediation) {
							this.dropWrongRemediation.play();
						}
					}

					// Are there multiple correct answers?
					if (!this.drill)
						break;
				}
			}

			if (!hit) {
				this.dropOutsideAction(this.selectedItem);
			}

			this.selectedItem = undefined;

			if (this.Finished())
				this.Submit();
		}
	};

	this.Finished = function () {
		switch (this.finishCondition) {
			case DnDCondition.DroppedAlldraggables:
				if (this.right.length + this.wrong.length == this.draggables.length)
					return true;
				break;
			case DnDCondition.AnswersMatched:
				switch (this.type) {
					case DnDType.OneToOne:
					case DnDType.OneToMany:
						if (this.right.length + this.wrong.length == this.draggables.length)
							return true;
						break;

				    case DnDType.ManyToOne:
				        if (this.right.length + this.wrong.length == this.answerKey.length)
				           return true;
				        break;
					case DnDType.ManyToFew:
					    var length = 0;
					    $(this.answerKey).each(function () {
					        length += this.length;
					        });
					    if (this.right.length + this.wrong.length == length)
							return true;
						break;
					default:
						break;
				}

				break;
			default:
				break;
		}

		return false;
	};

	this.Submit = function () {
	    XMLog('Submiting DnD...');
		if (this.Validate()) {
			this.finishRightAction.bind(this)();
			if (this.finishRightRemediation != undefined)
				this.finishRightRemediation.play();
		} else {
			this.finishWrongAction.bind(this)();
			if (this.finishWrongRemediation != undefined)
				this.finishWrongRemediation.play();
		}
	};

	this.Validate = function () {
		var complete = true;

		switch (this.type) {
			case DnDType.OneToOne:
			case DnDType.OneToMany:
				if (this.right.length < this.draggables.length)
					complete = false;

				break;

			case DnDType.ManyToOne:
				// answerKey Format: [right1, right2...]
				for (var i in this.answerKey) {
					if (this.right.indexOf(root['drag' + this.answerKey[i]]) == -1) {
						//if (this.right.indexOf(this.answerKey[i]) == -1) {
						complete = false;
						break;
					}
				}

				if (complete && this.wrong.length > 0)
					complete = false;

				break;

			case DnDType.ManyToFew:
			    var length = 0;
			    $(this.answerKey).each(function () {
			        length += this.length;
			        });
			    if (this.right.length != length)
					complete = false;
				break;
			default:
				break;
		}

		XMLog('Validation result: ' + complete);
		return complete;
	};
};

//-- Drag n' Drop Enumerated Settings

/**
 * Enumerates the possible types of drag and drop activities you can have.
 */
var DnDType = new function () {
	/// One draggable object per drop zone.
	this.OneToOne = 1;
	/// One draggable object with multiple drop zones.
	this.OneToMany = 2;
	/// Many draggable objects with one drop zone.
	this.ManyToOne = 3;
	/// Many draggable objects with less drop zones.
	this.ManyToFew = 4;
};

var DnDCondition = new function () {
	/// Never fullfilled so the conditional code can only be called on demand.
	this.Manual = 1;
	/// There are no more items to drag.
	this.DroppedAlldraggables = 2;
	/// The correct number of answers have been chosen.
	this.AnswersMatched = 3;
};

/**
 * Enumerates some default actions that can occur during this drag and drop
 * activity.
 */
var DnDAction = new function () {
	//-- Single Item Actions:
	//		Accepts the item as an arguement.
	//		Returns true if the item is consumed, false if it is not.
	this.Stick = function (item) {
		return true;
	};

	this.Snap = function (drag, drop) {
	    drag.x = drop.x;
	    drag.y = drop.y;
	    return true;
	};

	this.StackY = function (item, target) {
	    if (!target.stackPosition) {
	        XMLog('Initializing stackPosition for ' + target.name + '.');
	        target.stackPosition = 0;
	    }

	    var maxStack = Math.ceil(this.draggables.length / this.answerKey.length);
	    if (target.draggables.length >= maxStack) {
	        return DnDAction.Reset.bind(this)(item);
	    }

	    XMLog('Target stack position is ' + target.stackPosition + '.');

	    item.x = target.x;
	    item.y = (target.y - target.getBounds().height / 2) + target.stackPosition - item.getBounds().height / 2;
	    target.stackPosition += item.getBounds().height + 6;

	    return true;
	};

	this.ShowMatch = function (item) {
		item.alpha = 0;
		root[item.name + 'Match'].visible = true;
		return true;
	};

	this.Hide = function (item) {
		item.visible = false;
		item.x = item.startX;
		item.y = item.startY;
		return true;
	};

	this.Reset = function (item) {
		item.visible = true;
		item.alpha = 1;
		if (item.isConsumed) {
		    var target = item.container;
		    target.draggables.splice(target.draggables.indexOf(item), 1);
		    item.container = null;
		    item.isConsumed = false;
		}

		createjs.Tween.get(item).to({ x: item.startX, y: item.startY }, 250);
		return false;
	};

	//-- All Item Actions are bound to the context of the activity.
	this.ResetWrong = function () {
		XMLog('Reset Wrong: ' + this.wrong.length);
		$(this.wrong).each(function () {
			XMLog(this.name);
			DnDAction.Reset(this);
		});
		this.wrong = [];
	};

	this.ResetAll = function () {
		$(this.draggables).each(function () {
			DnDAction.Reset(this);
		});
		this.right = [];
		this.wrong = [];
	};

	//-- Slide Actions
	this.Continue = function () {
		root.play();
	};
};
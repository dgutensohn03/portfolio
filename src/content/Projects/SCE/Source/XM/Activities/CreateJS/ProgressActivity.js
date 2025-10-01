/// <reference path="/Source/XM/roots/CreateJSroot.js" />
/// <reference path="/Source/XM/Helpers.js" />

function ProgressActivity(params) {
    var that = this;
   

    this.targetClip = null;
    this.progress = [];
    this.targetClip = params.targetClip == null ? root : params.targetClip;
    // -- Options

    this.completeAction = ProgressAction.Complete;
    this.returnToMenu = true;
   
   
    
    this.Start = function () {
        createjs.Touch.enable(stage, true);
       

        var i = 1;

        // Get all btns.
        while (true) {
            if (root['btn' + i] != null) {
                root['btn' + i].name = 'btn' + i;
                root['btn' + i].addEventListener('click', this.OnClickButton.bind(this));
            } else
                break;

            i++;
        }
       // //XMlog("label" + this.targetClip.getLabels().length);
        for (j = 0; j < this.targetClip.getLabels().length; j++) {
            var label = this.targetClip.getLabels()[j];
            //XMlog(label);
            if (label.label.indexOf('Section') != -1) {
                this.progress.push(0);
            }
            
        };
         
         //XMlog('Number of sections: ' + this.progress.length);
    };
   
    
           

    this.ApplyCheckmarks = function () {
        for (var i = 0; i < this.progress.length; i++) {
            if ('checkmark' in root['btn' + (i + 1)]) {
                if (this.progress[i] == 1)
                    root['btn' + (i + 1)].checkmark.check.visible = true;
                else
                    root['btn' + (i + 1)].checkmark.check.visible = false;
            } else if ('checkmarks' in root && ('checkmark' + (i + 1)) in root.checkmarks) {
                if (this.progress[i] == 1)
                    root.checkmarks['checkmark' + (i + 1)].check.visible = true;
                else
                    root.checkmarks['checkmark' + (i + 1)].check.visible = false;
            }
        }
    };

    this.ActivateButtons = function () {
        var i = 1;
        while (true) {
            if (root['btn' + i] != undefined) {
                //XMlog("btn" + root['btn' + i])
                root['btn' + i].removeAllEventListeners('click');
                root['btn' + i].addEventListener('click', this.OnClickButton.bind(this));
            } else {
                break;
            }

            i++;
        }
    };

    this.DeactivateButtons = function () {
        var i = 1;
        while (true) {
            if (root['btn' + i] != undefined) {
               // //XMlog("btn" + root['btn' + i])
                root['btn' + i].removeAllEventListeners('click');
               
            } else {
                break;
            }

            i++;
        }
    };

    this.CompleteSection = function(section) {
			// If no section was supplied, try to infer the section from the current frame label.
        //XMlog("section0 =" + section);
        if (section == undefined) {
				section = parseInt(this.targetClip.getCurrentLabel().replace('Section', '')) - 1;
			}
			//XMlog("section =" + section);
			this.progress[section] = 1;
			
			//XMlog('Progress: ' + this.progress);
			
			// Check for completion.
			if (this.progress.indexOf(0) == -1) {
				if(!this.returnToMenu)
					this.ApplyCheckmarks();
				this.completeAction.bind(this)();
			} else if (this.returnToMenu) {
				root.gotoAndPlay('MenuIn');
			} else {
				this.ApplyCheckmarks();
				this.ActivateButtons();
			}
	    };
		
		
		
	this.OnClickButton = function (e) {
	    //XMlog("e.currentTarget" + e.currentTarget.name);
	    this.targetClip.gotoAndPlay('Section' + e.currentTarget.name.substr(3));
	    //e.currentTarget.removeEventListener('click', this.OnClickButton.bind(this));
	    this.DeactivateButtons();
	};
};

var ProgressAction = new function () {

    this.Complete = function () {
        root.gotoAndPlay('Outro');
        return true;
    };

    this.None = function () {
        return false;
    };
};
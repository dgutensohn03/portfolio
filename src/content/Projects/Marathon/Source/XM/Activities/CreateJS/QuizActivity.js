/// <reference path="/Source/XM/roots/CreateJSroot.js" />
/// <reference path="/Source/XM/Helpers.js" />

function QuizActivity(params) {
    var that = this;
    this.questions = params.questions || [];

    this.qIndex = 0;
    this.selections;
    this.hasRemediation = true;

    // -- Options

    this.beforeLoadQuestion = QuizAction.None;
    this.onLoadQuestion = QuizAction.None;
    this.beforeActivateQuestion = QuizAction.None;
    this.onActivateQuestion = QuizAction.None;

    this.onRightAction = params.onRightAction || QuizAction.Continue;
    this.onWrongAction = params.onWrongAction || QuizAction.Continue;

    this.finishRightAction = params.finishRightAction || QuizAction.Complete;
    this.finishWrongAction = params.finishWrongAction || undefined;
    //-- Remediations that can play during this activity:
    this.onRightRemediation = params.onRightRemediation || undefined;
    this.onWrongRemediation = params.onWrongRemediation || undefined;

    this.finishRightRemediation = params.finishRightRemediation || undefined;
    this.finishWrongRemediation = params.finishWrongRemediation || undefined;



    this.right = [];
    this.wrong = [];

    this.Question = function () {
        return this.questions[this.qIndex];
    };


    this.Start = function () {
        createjs.Touch.enable(stage, true);
        this.ShowQuestion()
        var i = 1;

        // Get all btns.
        while (true) {
            if (root['btn' + i] != null) {

                root['btn' + i].name = 'btn' + i;
            } else
                break;

            i++;
        }
    };


    this.LoadQuestion = function () {
        this.beforeLoadQuestion();

        var q = this.Question();

        try { root.question.field.text = q.question; } catch (err) { XMWarn(err); }

        this.correctCount = 0;
        this.wrongCount = 0;

        var i = 0;
        while (true) {
            if (!('btn' + (i + 1) in root))
                break;

            root['btn' + (i + 1)].gotoAndStop('Up');
            root['btn' + (i + 1)].removeAllEventListeners('click');

            if (q.answers.length > i) {
                root['btn' + (i + 1)].visible = true;
                root['btn' + (i + 1)].field.text = q.answers[i];
            } else {
                root['btn' + (i + 1)].visible = false;
            }

            i++;
        }

        if (q.type == QuestionType.MultipleSelect) {
            this.selections = [];
        }

        this.onLoadQuestion();
    }

    this.ShowQuestion = function () {
        var q = this.Question();

        if (!('type' in q))
            root.gotoAndPlay('MultipleChoiceIn');
        else
            root.gotoAndPlay(q.type + 'In');
    }

    this.ActivateQuestion = function () {
        this.beforeActivateQuestion();

        var q = this.Question();

        for (i = 0; i < q.answers.length; i++) {
            if (!('type' in q) || q.type == QuestionType.MultipleChoice) {
                if (q.correct == i + 1) {
                    root['btn' + (i + 1)].addEventListener('click', this.Right.bind(this));
                } else {
                    root['btn' + (i + 1)].addEventListener('click', this.Wrong.bind(this));
                }
            } else if (q.type == QuestionType.MultipleSelect) {
                root['btn' + (i + 1)].addEventListener('click', this.Select.bind(this));
            }
        }

        if (root.btnSubmit != null && !root.btnSubmit.hasEventListener('click')) {
            root.btnSubmit.addEventListener('click', this.Submit.bind(this));
        }

        this.onActivateQuestion();
    };

    this.NextQuestion = function () {
        this.qIndex++;

        if (this.qIndex < this.questions.length) {
            this.ShowQuestion()
        } else {
            root.gotoAndPlay('Outro');
        }
    };

    this.Right = function (e) {
        XMLog('Right?');

        var q = this.Question();
        
        if (this.hasRemediation) {
            root.remediation.gotoAndPlay('Right');
            if ('remediation' in q) {
                //root.remediation.littleText.field.text = q.remediation.right;
            }
                
            this.OnRemediationComplete = function () {
                if (this.onRightAction.bind(this)())
                    this.DeactivateQuestion();
            };
        } else {
            this.onRightAction.bind(this)();
        }
    };

    this.Wrong = function (e) {
        XMLog('Wrong!');
        var q = this.Question();
        
        if (this.hasRemediation) {
            root.remediation.gotoAndPlay('Wrong');
            if ('remediation' in q) {
                //root.remediation.littleText.field.text = q.remediation.wrong;
            }
                
            this.OnRemediationComplete = function() {
                if (this.onWrongAction.bind(this)())
                    this.DeactivateQuestion();
            };
        } else {
            this.onWrongAction.bind(this)();
        }
    };

    this.Select = function (e) {
        var id = parseInt(e.currentTarget.name.substr(3));

        if (this.selections.indexOf(id) == -1) {
            // Optionally ensure the number of selections does not exceed the number of answers by removing older ones.
            if (this.capSelections && this.selections.length == this.Question().correct.length) {
                var oldId = this.selections.shift();
                root['btn' + oldId].gotoAndStop('Up');
            }

            this.selections.push(id);
            e.currentTarget.gotoAndStop('Selected');
        } else {
            this.selections.splice(this.selections.indexOf(id), 1);
            e.currentTarget.gotoAndStop('Up');
        }

        if (this.selections.length > 0) {
            root.btnSubmit.visible = true;
        } else {
            //root.btnSubmit.visible = false;
        }
    };

    this.correctCount = 0;
    this.wrongCount = 0;

    this.Submit = function (e) {
        var q = this.Question();

        // If the number of correct and selected answers differ, it is wrong.
        var correct = this.selections.length == q.correct.length;

        // Make sure all of the correct answers are included.
        for (var i = 0; i < q.correct.length; i++) {
            if (this.selections.indexOf(q.correct[i]) == -1) {
                correct = false;
                break;
            }
        }

        correct ? this.Right(e) : this.Wrong(e);
    };
};

var QuestionType = {
    MultipleChoice: 'MultipleChoice',
    MultipleSelect: 'MultipleSelect'
};

var QuizAction = new function () {
    this.Validate = function () {
        var complete = true;
        XMLog('Validation result: ' + complete);
        return complete;
    };

    //-- root Actions
    this.Continue = function () {
        root.play();
        return true;
    };

    this.Complete = function () {
        root.gotoAndPlay('Outro');
        return true;
    };

    this.None = function () {
        return false;
    };
};
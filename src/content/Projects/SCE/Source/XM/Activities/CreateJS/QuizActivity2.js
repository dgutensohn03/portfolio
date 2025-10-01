/// <reference path="/Source/XM/roots/CreateJSroot.js" />
/// <reference path="/Source/XM/Helpers.js" />

function QuizActivity(params) {
    var that = this;
    this.questions = params.questions || [];

    this.qIndex = 0;
    this.selections;

    // -- Options

    this.capSelections;
    this.htmlText = params.htmlText || false;
    this.questionWidth = params.questionWidth || 400;
    this.questionHeight = params.questionHeight || 40;
    this.answerWidth = params.answerWidth || 400;
    this.answerHeight = params.answerHeight || 20;
    this.minScore = params.minScore || 0;

    this.beforeLoadQuestion = QuizAction.None;
    this.onLoadQuestion = QuizAction.None;
    this.beforeActivateQuestion = QuizAction.None;
    this.onActivateQuestion = QuizAction.None;

    this.onRightAction = params.onRightAction || QuizAction.Continue;
    this.onWrongAction = params.onWrongAction || QuizAction.None;

    this.finishRightAction = params.finishRightAction || QuizAction.Complete;
    this.finishWrongAction = params.finishWrongAction || QuizAction.Complete;
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

    this.Remediation = function () {
        return this.questions[this.qIndex].remediation;
    };

    this.Start = function () {
        createjs.Touch.enable(stage, true);
        this.ShowQuestion();
    };


    this.LoadQuestion = function () {
        this.beforeLoadQuestion();

        var q = this.Question();

        if(this.htmlText && $('#field').length == 0)            
            MagicText(root.question.field, this.questionWidth, this.questionHeight, 'field');

        try { 
            if(this.htmlText)
                $('#field').html(q.question);
            else
                root.question.field.text = q.question; 
        } catch (err) { XMWarn(err); }

        this.correctCount = 0;
        this.wrongCount = 0;

        var i = 0;
        while (true) {
            if (!('btn' + (i + 1) in root))
                break;

            if(this.htmlText && $('#btn' + (i + 1)).length == 0)
                MagicText(root['btn' + (i + 1)].field, this.answerWidth, this.answerHeight, 'btn' + (i + 1));

            root['btn' + (i + 1)].name = 'btn' + (i + 1);
            root['btn' + (i + 1)].gotoAndStop('Up');
            root['btn' + (i + 1)].removeAllEventListeners('click');

            if (q.answers.length > i) {
                root['btn' + (i + 1)].visible = true;

                if(this.htmlText)
                    $('#btn' + (i + 1)).html(q.answers[i]);
                else
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

        if (!('type' in q)) {
            this.capSelections = false;
            root.gotoAndPlay('MultipleChoiceIn');
        } else {
            this.capSelections = true;
            root.gotoAndPlay(q.type + 'In');
        }
    }

    this.ActivateQuestion = function () {
        this.beforeActivateQuestion();

        var q = this.Question();

        for (i = 0; i < q.answers.length; i++) {
            if (!('type' in q) || q.type == QuestionType.MultipleChoice) {
                if (q.correct == i + 1) {
                    root['btn' + (i + 1)].addEventListener('click', this.Right.bind(this));
                    if(this.htmlText)
                        $('#btn' + (i + 1)).click(this.Right.bind(this));
                } else {
                    root['btn' + (i + 1)].addEventListener('click', this.Wrong.bind(this));
                    if(this.htmlText)
                        $('#btn' + (i + 1)).click(this.Wrong.bind(this));
                }
            } else if (q.type == QuestionType.MultipleSelect) {
                root['btn' + (i + 1)].addEventListener('click', this.Select.bind(this));
                if(this.htmlText)
                    $('#btn' + (i + 1)).click(this.Select.bind(this));
            }
        }

        if('btnSubmit' in root) {
            root.btnSubmit.visible = false;

            if (!root.btnSubmit.hasEventListener('click')) {
                root.btnSubmit.addEventListener('click', this.Submit.bind(this));
            }
        }

        this.onActivateQuestion();
    };

    this.DeactivateQuestion = function() {
        $('#domElementContainer').children().off('click');
    };

    this.NextQuestion = function () {
        this.qIndex++;

        if (this.qIndex < this.questions.length) {
            this.ShowQuestion()
        } else {
            if(this.right.length / this.questions.length >= (this.minScore / 100)) {
                this.finishRightAction();
            } else {
                this.finishWrongAction();
            }
        }
    };

    this.Right = function (e) {
        this.right.push(this.qIndex);

        //stopAllSounds();
        var q = this.Question();

        if ('remediation' in root) {
            root.remediation.gotoAndPlay('playRem');
            playSound('rightSFX', false);
            if ('right' in q.remediation || 'wrong' in q.remediation) {
                XMLog('here');
                root.remediation.remBox.tryagainBtn.visible = false;
                root.remediation.remBox.continueBtn.visible = true;
                root.remediation.remBox.remText.text = q.remediation.right;
            } else if ('remediation' in q) {
                XMLog('there');
                root.remediation.remBox.tryagainBtn.visible = false;
                root.remediation.remBox.continueBtn.visible = true;
                root.remediation.remBox.remText.text = q.remediation[this.selections - 1];
            }
                
            this.OnRemediationComplete = function () {
                if(this.onRightAction.bind(this)())
                    this.DeactivateQuestion();
            };
        } else {
            if(this.onRightAction.bind(this)())
                this.DeactivateQuestion();
        }
    };

    this.Wrong = function (e) {
        this.wrong.push(this.qIndex);

        //stopAllSounds();
        XMLog(this.qIndex);
        var q = this.Question();

        if ('remediation' in root) {
            root.remediation.gotoAndPlay('playRem');
            playSound('wrongSFX', false);
            if ('right' in q.remediation || 'wrong' in q.remediation) {
                XMLog('here');
                root.remediation.remBox.tryagainBtn.visible = true;
                root.remediation.remBox.continueBtn.visible = false;
                root.remediation.remBox.remText.text = q.remediation.wrong;
            } else if ('remediation' in q) {
                XMLog('there');
                root.remediation.remBox.tryagainBtn.visible = true;
                root.remediation.remBox.continueBtn.visible = false;
                root.remediation.remBox.remText.text = q.remediation[this.selections - 1];
            }
                
            this.OnRemediationComplete = function() {                
                if(this.onWrongAction.bind(this)())
                    this.DeactivateQuestion();
            };
        } else {
            if(this.onWrongAction.bind(this)())
                this.DeactivateQuestion();
        }
    };

    this.Select = function (e) {
        var name = e.currentTarget.name || e.currentTarget.id;
        var id = parseInt(name.substr(3));

        if (this.selections.indexOf(id) == -1) {
            // Optionally ensure the number of selections does not exceed the number of answers by removing older ones.
            if ((this.capSelections && this.Question().capSelections != true) && this.selections.length == this.Question().correct.length) {
                var oldId = this.selections.shift();
                root['btn' + oldId].gotoAndStop('Up');
            }

            this.selections.push(id);
            root[name].gotoAndStop('Selected');
        } else {
            this.selections.splice(this.selections.indexOf(id), 1);
            root[name].gotoAndStop('Up');
        }

        if (this.selections.length > 0) {
            root.btnSubmit.visible = true;
        } else {
            root.btnSubmit.visible = false;
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
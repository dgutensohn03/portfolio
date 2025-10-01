/// <reference path="../Source/XM/SlideStatus.js" />

// Shell Version 3/17/16 - Added Howler

var CourseData = kendo.observable({
	name: 'SWITCH Training',
	lessons: [
		{ // Lesson 0
			name: 'Introduction to SWITCH',
			slides: [
				{ // Slide 1
					name: 'Course Introduction',
					type: 'Video',
					cctext: '<p>Welcome to Switch, where we are going to take a very different approach to safety training.&nbsp; </p><p>In 2017, Southern California Edison invested in an extensive Safety Culture Assessment with the vendor, Propulo. Roughly 9,000 SCE employees participated in the surveys, and 546 people participated in interviews and focus groups.</p><p>So, what did we learn from the Safety Culture Assessment?</p><p>Well, we learned that we have improved&#8230;but we also learned that we can do better. Let\'s talk about some of the key takeaways.</p><p>First, we learned that as an organization we tend to focus more on the rules, procedures, and equipment than we do on the risks that our employees face every day. </p><p>We also learned that our safety culture is leader-led and influenced. So, if the leader is less committed or lacks the skills necessary to motivate employees, those employees may not buy into our safety programs or want the freedom to make choices that may protect their own safety.&nbsp;In addition, we have so many safety messages and programs, and our employees feel like they make a lot of noise but that they are ultimately overkill. </p><p>Our employees did note that they get the opportunity to give feedback, but the assessment tells us that when they do, they don\'t always feel heard. More often than not, they feel that SCE places a higher focus on protecting the business from risk. </p><p>Finally, the assessment taught us that our safety culture is all about public compliance. What does that mean? It means that we follow the rules because we have to. So, we have to ask ourselves, "If someone isn\'t watching, what decisions do we make? Do we put our safety first or focus on covering up?"</p>'
				},
				{ // Slide 2
					name: 'Pre-Training Survey',
					type: 'HTML',
					cctext: '<p>Throughout this training, you will be provided with many opportunities - both online and in person - to engage, to share your insight, and to provide feedback that will help us with the continuous care and improvement of the Switch Safety Training Program.</p><p>One way we ask for your feedback is through the use of surveys that inform us about your experience with the training. We will ask you to complete a survey before the training, one immediately after the workshop, and another several weeks down the road.</p><p>Your honesty will help us make the program stronger, more enjoyable, and more useful to you. Your responses are completely anonymous. There is no way and no need for us to know who answered the questions the way they did. We are only concerned with gathering your opinions and the experience and knowledge you had, or gained, before and after the training.</p><p>When you\'re ready, select the button onscreen to begin the pre-training survey. But first, we want to thank you for helping us build a better training program and for making SCE a safer workplace!</p>'
				},
				{ // Slide 3
					name: 'Why Switch? Why Now?',
					type: 'Video',
					cctext: '<p>At SCE, we understand that everyone is dedicated to transforming our safety culture. So, as an organization, how are we working to achieve this transformation?</p><p>We are uniting&nbsp;people from different operational organizations across the business, and we\'re supporting our leaders with training that provides a clear view of&nbsp;strong safety leadership. This enables our leaders to work towards alignment, using a common approach&nbsp;that can take all of us to the next level - together!</p><p>We\'re also improving our work practices so that people feel empowered and engaged each and every day. We do this by supporting our employees in a way that allows them to take ownership of their safety through improved practices. And we\'re streamlining our safety messages so that we can focus on effectively getting the word out about the concepts our employees will learn in our training programs.</p><p>In addition, we will focus on shifting our safety mindset - adapting our attitudes toward safety to focus on personal accountability rather than rules and procedures. This will help us get to a place where we CHOOSE to put safety first.</p><p>Finally, we are making an investment in our safety both as individuals and as an organization with Switch Training. In doing so, we look forward to taking the critical next step toward taking control and ownership of our personal safety, and we look forward to seeing the evolution of our safety culture.</p>'
				},
				{ // Slide 4 part2 added in JT ///////////////////////////
					name: 'Transform the Safety Mindset',
					//type: 'HTML',
					type: 'Video',
					cctext: '<p>Select the arrows onscreen to transform the safety mindset. When you\'re finished, select Next to learn about the Safety Culture Maturity Model.</p>'
				},
				{ // Slide 5
					name: 'Safety Culture Maturity Model',
					//type: 'HTML',
					type: 'Video',
					cctext: '<p>Different organizations have different safety and performance results, and it\'s important to remember that any shift in culture takes time. The key is to start small.&nbsp;By making small, conscious changes in how you think and act every day, you can create momentum that is capable of initiating a much larger change within the organization.&nbsp;As you progress through the Switch experience both here and in the classroom, prepare yourself for a safety transformation and take ownership over your safety culture maturity. </p><p>This pyramid represents the Safety Culture Maturity Model.&nbsp;</p><p>Where do you see yourself on this chart?&nbsp;And where do you see your workgroup?&nbsp;Or Southern California Edison as a whole? Select each level of the pyramid to see an example of the mindset that accompanies each level of the Safety Security Model. </p>'
				},
				{ // Slide 6
					name: 'Knowledge Check: Safety Culture Maturity Model',
					type: 'Video',
					//type: 'CreateJS',
					cctext: '<p>Let\'s see what you\'ve learned! Match each thought onscreen to the corresponding safety culture maturity level.</p>'
				},
				{ // Slide 7
					name: 'Conclusion',
					type: 'VideoAA',
					cctext: '<p>This eLearning course is required learning that is designed to prepare you for the upcoming workshop. It will provide you with all the information and concepts you need so that you can successfully apply them, engage with other participants, and have fun in the workshop! If you aren\'t sure when your workshop is scheduled, please check with your management team to confirm that you\'re enrolled in the one-day session. </p><p>The Switch Training will be presented in five modules. In these modules we will talk about why you value safety, the safety culture model and variables that keep an organization safe, how the brain affects safety, and brain tools. Finally, we will discuss the Big Five Safety Frames. </p><p>Now, let\'s get started!</p>'
				},
				{ // Slide 8
					name: 'Main Menu',
					type: 'HTML',
					cctext: '<p>Select Module 1: This Is Why.</p>'
				}
			]
		},
		{ // Lesson 1
			name: 'This Is Why',
			slides: [
				{ // Slide 1
					name: 'Introduction and Objectives',
					type: 'Video',
					cctext: '<p>Welcome to Module 1: This Is Why.</p><p>By the end of this module, you will be able to identify five&nbsp;reasons to adopt and increase your personal investment in physical and psychological safety and define the three components of the Attitude-Behavior-Results model.&nbsp;You will also be able to explain how Switch is different from any other safety training.</p><p>Let\'s get started!</p>'
				},
				{ // Slide 2
					name: 'How Is Switch Different?',
					type: 'Video',
					cctext: '<p>This&#8230; is your brain. You use it for every task you complete, every single day. But, what does your brain have to do with safety? </p><p>Well, everything you do begins as a thought, and so the actions you take - and the events that occur as a result - are almost always because of the thoughts you were having at the moment. Your thoughts drive what you feel, what you do, and ultimately the results you achieve - or don\'t achieve - both in your life and your organization. </p><p>We can assume that one result we ALL want to achieve is to make it home safely to the people and things that matter the most. That means your thoughts and your mindset should focus on just that - making safety a priority. It also means that your brain is your most important PPE because it drives everything you do!</p><p>So what makes Switch different from every other safety training? Throughout this training, we will focus on shifting our mindsets from private compliance to public compliance. That means that instead of focusing on rules, procedures, and what you SHOULD do, we will talk about shifting our focus to why we do what we do and staying safe because we CHOOSE to work together to achieve our ultimate goal of protecting ourselves and those around us.</p>'
				},
				{ // Slide 3
					name: 'ABR Model',
					type: 'HTML',
					cctext: '<p>Let\'s take a look at the Attitude-Behavior-Results, or ABR, model. Select each component of the model to learn more. When you\'re finished, select Next to continue.</p><p>[Attitude]</p><p>Attitude is a settled way of thinking or feeling about someone or something.</p><p>[Behavior]</p><p>Behavior is the way in which one acts, or the way in which one conducts oneself - especially toward others.</p><p>[Result]</p><p>A result is a consequence, effect, or outcome of something, such as an action.</p>'
				},
				{ // Slide 4
					name: 'ABR Model and Safety',
					type: 'Video',
					cctext: '<p>At Southern California Edison, all of us ultimately have the same goal: to get home safely. So, how does our safety fit into the ABR model?</p><p>Well, remember how we said that everything starts with a thought? If making it home safely is the desired result, how likely are you to achieve that result if your thought is, &ldquo;Safety is pure luck&rdquo;? This thought process means that when you have a good day and don\'t get hurt, you attribute that to luck being on your side. But if you get injured, you will likely blame the injury on having bad luck.</p><p>If this is your attitude toward safety, how will you feel when it comes time to complete a risk assessment or take part in a safety meeting? Your behavior will likely be unenergized, unmotivated, and disinterested. Will you put much energy into the activity if you feel this way? Of course not. How is this behavior going to impact your desired result of going home safely? Probably not positively. If your attitude and behavior are negative, your results are likely to be negative as well. On the other hand, if your attitude is that your safety is in your hands &ndash; considering what matters most and being mindful of how controlling your brain can impact not just your safety, but also your life. You will likely be energized and motivated in your daily activities. Your behaviors will likely be energized and motivated, and your positive attitude and behaviors are likely to produce positive results!</p>'
				},
				{ // Slide 5
					name: 'Reasons for Working Safe',
					type: 'Video',
					cctext: '<p>We all have different reasons for working safe. You might work safe for the people, things, and experiences in your life, or to maintain your future plans. Your reasons for working safe are the things that motivate you &ndash; the things you would miss if they were taken away. They are the reason your life is worth living.</p>'
				},
				{ // Slide 6
					name: '5 Reasons for Working Safe',
					type: 'HTML',
					cctext: '<p>Select each finger on the hand to enter your five reasons for working safe.</p><p>[Once text entry is complete]</p><p>Take a moment to stop and think about the things you listed. The things that matter. We encourage you to keep these keep these reasons in mind, so you make choices that will keep you safe for the people, places, and things you value the most.</p>'
				},
				{ // Slide 7
					name: '2017 Injuries: Field Employees',
					type: 'HTML',
					cctext: '<p>What is the current state of safety here at Southern California Edison? First, let\'s take a look at the injury statistics for our field employees. Select each category to learn more.</p><p>[Total Injuries]</p><p>In 2017, there were 181 total injuries reported involving field employees.</p><p>[Body Part Most Injured]</p><p>Of the 181 injuries reported, 13 percent of those injuries affected an upper extremity and 10 percent affected a lower extremity. Another 10 percent were ear-related injuries.</p><p>[Most Common Injury Type]</p><p>By far, the most common injury type was sprains or strains, which comprised 51 percent of all injuries. In addition, 13 percent of injuries were open wounds and 11 percent were sensory injuries.</p><p>[Most Frequent Causes]</p><p>Fourteen percent of injuries are caused by a struck object. This is closely followed by lifting and carrying, which causes 13 percent of injuries, and walking, which causes nine percent of injuries.</p><p>[Total Lost Time in Days]</p><p>5,558 - this is the total lost time in days due to injury!</p><p>Injury to field employees in 2017 caused 2,112 total restricted duty days.</p>'
				},
				{ // Slide 8
					name: '2017 Injuries: Office Employees',
					type: 'HTML',
					cctext: '<p>Wow! That was a lot of numbers! But, what did all of those stats tell us? Well, they not only told us that we can do better, but they helped us better understand where we are at risk so we can improve! Now, let\'s take a look at the statistics for office-related injuries in 2017. Select each category to learn more.</p><p>[Total Injuries]</p><p>In 2017, there were 91 total injuries reported involving office employees.</p><p>[Body Part Most Injured]</p><p>Of the injuries reported by office employees, 29 percent affected an upper extremity. In addition, 20 percent affected the wrist and seven percent affected the back.</p><p>[Most Common Injury Type]</p><p>A whopping 76 percent of injuries that occurred in the office were sprains or strains. That was followed by contusions and eight percent and fractures and only four percent.</p><p>[Most Frequent Causes]</p><p>What were the most frequent causes of injury? Forty-one percent of injuries were the result of typing or mousing and 16 percent were caused by cumulative trauma. Only nine percent of office injuries were the result of a struck object.</p><p>[Total Lost Time in Days]</p><p>The total lost time in days in 2017 was 923. Injury to office employees in 2017 caused 319 total restricted duty days.</p>'
				},
				{ // Slide 9
					name: 'Activity',
					type: 'HTML',
					cctext: '<p>Let\'s see what you\'ve learned! Read each question and select the best answer.</p>'
				},
				{ // Slide 10
					name: 'Conclusion',
					type: 'Video',
					cctext: '<p>Congratulations! You\'ve completed Module 1 of the Switch Safety Training. </p><p>You should now be able to identify five&nbsp;reasons to adopt and increase your personal investment in physical and psychological safety and define the three components of the Attitude-Behavior-Results model.&nbsp;You will also be able to explain how Switch is different from any other safety training.</p><p>Next, you\'ll proceed to Module 2, where we answer the question "What is a safety culture?"</p>'
				}
			]
		},
		{ // Lesson 2
		name: 'Lesson2',
			slides: [
				{ // Slide 1
					name: 'SlideTitle',
					type: 'Video',
					cctext: '<p>XXXXX</p>'
				}
			]
		},
		{ // Lesson 3
		name: 'Lesson3',
			slides: [
                { // Slide 1
                    name: 'SlideTitle',
                    type: 'Video',
                    cctext: '<p>XXXXX</p>'
                },
                { // Slide 1
                    name: 'Course Introduction',
                    type: 'Video',
                    cctext: '<p>Welcome to Switch, where we are going to take a very different approach to safety training.&nbsp; </p><p>In 2017, Southern California Edison invested in an extensive Safety Culture Assessment with the vendor, Propulo. Roughly 9,000 SCE employees participated in the surveys, and 546 people participated in interviews and focus groups.</p><p>So, what did we learn from the Safety Culture Assessment?</p><p>Well, we learned that we have improved&#8230;but we also learned that we can do better. Let\'s talk about some of the key takeaways.</p><p>First, we learned that as an organization we tend to focus more on the rules, procedures, and equipment than we do on the risks that our employees face every day. </p><p>We also learned that our safety culture is leader-led and influenced. So, if the leader is less committed or lacks the skills necessary to motivate employees, those employees may not buy into our safety programs or want the freedom to make choices that may protect their own safety.&nbsp;In addition, we have so many safety messages and programs, and our employees feel like they make a lot of noise but that they are ultimately overkill. </p><p>Our employees did note that they get the opportunity to give feedback, but the assessment tells us that when they do, they don\'t always feel heard. More often than not, they feel that SCE places a higher focus on protecting the business from risk. </p><p>Finally, the assessment taught us that our safety culture is all about public compliance. What does that mean? It means that we follow the rules because we have to. So, we have to ask ourselves, "If someone isn\'t watching, what decisions do we make? Do we put our safety first or focus on covering up?"</p>'
                },
                { // Slide 2
                    name: 'Pre-Training Survey',
                    type: 'HTML',
                    cctext: '<p>Throughout this training, you will be provided with many opportunities - both online and in person - to engage, to share your insight, and to provide feedback that will help us with the continuous care and improvement of the Switch Safety Training Program.</p><p>One way we ask for your feedback is through the use of surveys that inform us about your experience with the training. We will ask you to complete a survey before the training, one immediately after the workshop, and another several weeks down the road.</p><p>Your honesty will help us make the program stronger, more enjoyable, and more useful to you. Your responses are completely anonymous. There is no way and no need for us to know who answered the questions the way they did. We are only concerned with gathering your opinions and the experience and knowledge you had, or gained, before and after the training.</p><p>When you\'re ready, select the button onscreen to begin the pre-training survey. But first, we want to thank you for helping us build a better training program and for making SCE a safer workplace!</p>'
                },
                { // Slide 3
                    name: 'Why Switch? Why Now?',
                    type: 'Video',
                    cctext: '<p>At SCE, we understand that everyone is dedicated to transforming our safety culture. So, as an organization, how are we working to achieve this transformation?</p><p>We are uniting&nbsp;people from different operational organizations across the business, and we\'re supporting our leaders with training that provides a clear view of&nbsp;strong safety leadership. This enables our leaders to work towards alignment, using a common approach&nbsp;that can take all of us to the next level - together!</p><p>We\'re also improving our work practices so that people feel empowered and engaged each and every day. We do this by supporting our employees in a way that allows them to take ownership of their safety through improved practices. And we\'re streamlining our safety messages so that we can focus on effectively getting the word out about the concepts our employees will learn in our training programs.</p><p>In addition, we will focus on shifting our safety mindset - adapting our attitudes toward safety to focus on personal accountability rather than rules and procedures. This will help us get to a place where we CHOOSE to put safety first.</p><p>Finally, we are making an investment in our safety both as individuals and as an organization with Switch Training. In doing so, we look forward to taking the critical next step toward taking control and ownership of our personal safety, and we look forward to seeing the evolution of our safety culture.</p>'
                },
                { // Slide 4 part2 added in JT ///////////////////////////
                    name: 'Transform the Safety Mindset',
                    //type: 'HTML',
                    type: 'Video',
                    cctext: '<p>Select the arrows onscreen to transform the safety mindset. When you\'re finished, select Next to learn about the Safety Culture Maturity Model.</p>'
                },
                { // Slide 5
                    name: 'Safety Culture Maturity Model',
                    //type: 'HTML',
                    type: 'Video',
                    cctext: '<p>Different organizations have different safety and performance results, and it\'s important to remember that any shift in culture takes time. The key is to start small.&nbsp;By making small, conscious changes in how you think and act every day, you can create momentum that is capable of initiating a much larger change within the organization.&nbsp;As you progress through the Switch experience both here and in the classroom, prepare yourself for a safety transformation and take ownership over your safety culture maturity. </p><p>This pyramid represents the Safety Culture Maturity Model.&nbsp;</p><p>Where do you see yourself on this chart?&nbsp;And where do you see your workgroup?&nbsp;Or Southern California Edison as a whole? Select each level of the pyramid to see an example of the mindset that accompanies each level of the Safety Security Model. </p>'
                },
                { // Slide 6
                    name: 'Knowledge Check: Safety Culture Maturity Model',
                    type: 'Video',
                    //type: 'CreateJS',
                    cctext: '<p>Let\'s see what you\'ve learned! Match each thought onscreen to the corresponding safety culture maturity level.</p>'
                },
                { // Slide 7
                    name: 'Conclusion',
                    type: 'VideoAA',
                    cctext: '<p>This eLearning course is required learning that is designed to prepare you for the upcoming workshop. It will provide you with all the information and concepts you need so that you can successfully apply them, engage with other participants, and have fun in the workshop! If you aren\'t sure when your workshop is scheduled, please check with your management team to confirm that you\'re enrolled in the one-day session. </p><p>The Switch Training will be presented in five modules. In these modules we will talk about why you value safety, the safety culture model and variables that keep an organization safe, how the brain affects safety, and brain tools. Finally, we will discuss the Big Five Safety Frames. </p><p>Now, let\'s get started!</p>'
                },
                { // Slide 8
                    name: 'Main Menu',
                    type: 'HTML',
                    cctext: '<p>Select Module 1: This Is Why.</p>'
                },
                { // Slide 1
                    name: 'Course Introduction',
                    type: 'Video',
                    cctext: '<p>Welcome to Switch, where we are going to take a very different approach to safety training.&nbsp; </p><p>In 2017, Southern California Edison invested in an extensive Safety Culture Assessment with the vendor, Propulo. Roughly 9,000 SCE employees participated in the surveys, and 546 people participated in interviews and focus groups.</p><p>So, what did we learn from the Safety Culture Assessment?</p><p>Well, we learned that we have improved&#8230;but we also learned that we can do better. Let\'s talk about some of the key takeaways.</p><p>First, we learned that as an organization we tend to focus more on the rules, procedures, and equipment than we do on the risks that our employees face every day. </p><p>We also learned that our safety culture is leader-led and influenced. So, if the leader is less committed or lacks the skills necessary to motivate employees, those employees may not buy into our safety programs or want the freedom to make choices that may protect their own safety.&nbsp;In addition, we have so many safety messages and programs, and our employees feel like they make a lot of noise but that they are ultimately overkill. </p><p>Our employees did note that they get the opportunity to give feedback, but the assessment tells us that when they do, they don\'t always feel heard. More often than not, they feel that SCE places a higher focus on protecting the business from risk. </p><p>Finally, the assessment taught us that our safety culture is all about public compliance. What does that mean? It means that we follow the rules because we have to. So, we have to ask ourselves, "If someone isn\'t watching, what decisions do we make? Do we put our safety first or focus on covering up?"</p>'
                },
                { // Slide 2
                    name: 'Pre-Training Survey',
                    type: 'HTML',
                    cctext: '<p>Throughout this training, you will be provided with many opportunities - both online and in person - to engage, to share your insight, and to provide feedback that will help us with the continuous care and improvement of the Switch Safety Training Program.</p><p>One way we ask for your feedback is through the use of surveys that inform us about your experience with the training. We will ask you to complete a survey before the training, one immediately after the workshop, and another several weeks down the road.</p><p>Your honesty will help us make the program stronger, more enjoyable, and more useful to you. Your responses are completely anonymous. There is no way and no need for us to know who answered the questions the way they did. We are only concerned with gathering your opinions and the experience and knowledge you had, or gained, before and after the training.</p><p>When you\'re ready, select the button onscreen to begin the pre-training survey. But first, we want to thank you for helping us build a better training program and for making SCE a safer workplace!</p>'
                },
                { // Slide 3
                    name: 'Why Switch? Why Now?',
                    type: 'Video',
                    cctext: '<p>At SCE, we understand that everyone is dedicated to transforming our safety culture. So, as an organization, how are we working to achieve this transformation?</p><p>We are uniting&nbsp;people from different operational organizations across the business, and we\'re supporting our leaders with training that provides a clear view of&nbsp;strong safety leadership. This enables our leaders to work towards alignment, using a common approach&nbsp;that can take all of us to the next level - together!</p><p>We\'re also improving our work practices so that people feel empowered and engaged each and every day. We do this by supporting our employees in a way that allows them to take ownership of their safety through improved practices. And we\'re streamlining our safety messages so that we can focus on effectively getting the word out about the concepts our employees will learn in our training programs.</p><p>In addition, we will focus on shifting our safety mindset - adapting our attitudes toward safety to focus on personal accountability rather than rules and procedures. This will help us get to a place where we CHOOSE to put safety first.</p><p>Finally, we are making an investment in our safety both as individuals and as an organization with Switch Training. In doing so, we look forward to taking the critical next step toward taking control and ownership of our personal safety, and we look forward to seeing the evolution of our safety culture.</p>'
                },
                { // Slide 4 part2 added in JT ///////////////////////////
                    name: 'Transform the Safety Mindset',
                    //type: 'HTML',
                    type: 'Video',
                    cctext: '<p>Select the arrows onscreen to transform the safety mindset. When you\'re finished, select Next to learn about the Safety Culture Maturity Model.</p>'
                },
                { // Slide 5
                    name: 'Safety Culture Maturity Model',
                    //type: 'HTML',
                    type: 'Video',
                    cctext: '<p>Different organizations have different safety and performance results, and it\'s important to remember that any shift in culture takes time. The key is to start small.&nbsp;By making small, conscious changes in how you think and act every day, you can create momentum that is capable of initiating a much larger change within the organization.&nbsp;As you progress through the Switch experience both here and in the classroom, prepare yourself for a safety transformation and take ownership over your safety culture maturity. </p><p>This pyramid represents the Safety Culture Maturity Model.&nbsp;</p><p>Where do you see yourself on this chart?&nbsp;And where do you see your workgroup?&nbsp;Or Southern California Edison as a whole? Select each level of the pyramid to see an example of the mindset that accompanies each level of the Safety Security Model. </p>'
                },
                { // Slide 6
                    name: 'Knowledge Check: Safety Culture Maturity Model',
                    type: 'Video',
                    //type: 'CreateJS',
                    cctext: '<p>Let\'s see what you\'ve learned! Match each thought onscreen to the corresponding safety culture maturity level.</p>'
                },
                { // Slide 7
                    name: 'Conclusion',
                    type: 'VideoAA',
                    cctext: '<p>This eLearning course is required learning that is designed to prepare you for the upcoming workshop. It will provide you with all the information and concepts you need so that you can successfully apply them, engage with other participants, and have fun in the workshop! If you aren\'t sure when your workshop is scheduled, please check with your management team to confirm that you\'re enrolled in the one-day session. </p><p>The Switch Training will be presented in five modules. In these modules we will talk about why you value safety, the safety culture model and variables that keep an organization safe, how the brain affects safety, and brain tools. Finally, we will discuss the Big Five Safety Frames. </p><p>Now, let\'s get started!</p>'
                },
                { // Slide 8
                    name: 'Main Menu',
                    type: 'HTML',
                    cctext: '<p>Select Module 1: This Is Why.</p>'
                }
			]
		},
		{ // Lesson 4
		name: 'Lesson4',
			slides: [
				{ // Slide 1
					name: 'SlideTitle',
					type: 'Video',
					cctext: '<p>XXXXX</p>'
                },
                { // Slide 1
                    name: 'Course Introduction',
                    type: 'Video',
                    cctext: '<p>Welcome to Switch, where we are going to take a very different approach to safety training.&nbsp; </p><p>In 2017, Southern California Edison invested in an extensive Safety Culture Assessment with the vendor, Propulo. Roughly 9,000 SCE employees participated in the surveys, and 546 people participated in interviews and focus groups.</p><p>So, what did we learn from the Safety Culture Assessment?</p><p>Well, we learned that we have improved&#8230;but we also learned that we can do better. Let\'s talk about some of the key takeaways.</p><p>First, we learned that as an organization we tend to focus more on the rules, procedures, and equipment than we do on the risks that our employees face every day. </p><p>We also learned that our safety culture is leader-led and influenced. So, if the leader is less committed or lacks the skills necessary to motivate employees, those employees may not buy into our safety programs or want the freedom to make choices that may protect their own safety.&nbsp;In addition, we have so many safety messages and programs, and our employees feel like they make a lot of noise but that they are ultimately overkill. </p><p>Our employees did note that they get the opportunity to give feedback, but the assessment tells us that when they do, they don\'t always feel heard. More often than not, they feel that SCE places a higher focus on protecting the business from risk. </p><p>Finally, the assessment taught us that our safety culture is all about public compliance. What does that mean? It means that we follow the rules because we have to. So, we have to ask ourselves, "If someone isn\'t watching, what decisions do we make? Do we put our safety first or focus on covering up?"</p>'
                },
                { // Slide 2
                    name: 'Pre-Training Survey',
                    type: 'HTML',
                    cctext: '<p>Throughout this training, you will be provided with many opportunities - both online and in person - to engage, to share your insight, and to provide feedback that will help us with the continuous care and improvement of the Switch Safety Training Program.</p><p>One way we ask for your feedback is through the use of surveys that inform us about your experience with the training. We will ask you to complete a survey before the training, one immediately after the workshop, and another several weeks down the road.</p><p>Your honesty will help us make the program stronger, more enjoyable, and more useful to you. Your responses are completely anonymous. There is no way and no need for us to know who answered the questions the way they did. We are only concerned with gathering your opinions and the experience and knowledge you had, or gained, before and after the training.</p><p>When you\'re ready, select the button onscreen to begin the pre-training survey. But first, we want to thank you for helping us build a better training program and for making SCE a safer workplace!</p>'
                },
                { // Slide 3
                    name: 'Why Switch? Why Now?',
                    type: 'Video',
                    cctext: '<p>At SCE, we understand that everyone is dedicated to transforming our safety culture. So, as an organization, how are we working to achieve this transformation?</p><p>We are uniting&nbsp;people from different operational organizations across the business, and we\'re supporting our leaders with training that provides a clear view of&nbsp;strong safety leadership. This enables our leaders to work towards alignment, using a common approach&nbsp;that can take all of us to the next level - together!</p><p>We\'re also improving our work practices so that people feel empowered and engaged each and every day. We do this by supporting our employees in a way that allows them to take ownership of their safety through improved practices. And we\'re streamlining our safety messages so that we can focus on effectively getting the word out about the concepts our employees will learn in our training programs.</p><p>In addition, we will focus on shifting our safety mindset - adapting our attitudes toward safety to focus on personal accountability rather than rules and procedures. This will help us get to a place where we CHOOSE to put safety first.</p><p>Finally, we are making an investment in our safety both as individuals and as an organization with Switch Training. In doing so, we look forward to taking the critical next step toward taking control and ownership of our personal safety, and we look forward to seeing the evolution of our safety culture.</p>'
                },
                { // Slide 4 part2 added in JT ///////////////////////////
                    name: 'Transform the Safety Mindset',
                    //type: 'HTML',
                    type: 'Video',
                    cctext: '<p>Select the arrows onscreen to transform the safety mindset. When you\'re finished, select Next to learn about the Safety Culture Maturity Model.</p>'
                },
                { // Slide 5
                    name: 'Safety Culture Maturity Model',
                    //type: 'HTML',
                    type: 'Video',
                    cctext: '<p>Different organizations have different safety and performance results, and it\'s important to remember that any shift in culture takes time. The key is to start small.&nbsp;By making small, conscious changes in how you think and act every day, you can create momentum that is capable of initiating a much larger change within the organization.&nbsp;As you progress through the Switch experience both here and in the classroom, prepare yourself for a safety transformation and take ownership over your safety culture maturity. </p><p>This pyramid represents the Safety Culture Maturity Model.&nbsp;</p><p>Where do you see yourself on this chart?&nbsp;And where do you see your workgroup?&nbsp;Or Southern California Edison as a whole? Select each level of the pyramid to see an example of the mindset that accompanies each level of the Safety Security Model. </p>'
                },
                { // Slide 6
                    name: 'Knowledge Check: Safety Culture Maturity Model',
                    type: 'Video',
                    //type: 'CreateJS',
                    cctext: '<p>Let\'s see what you\'ve learned! Match each thought onscreen to the corresponding safety culture maturity level.</p>'
                },
                { // Slide 7
                    name: 'Conclusion',
                    type: 'VideoAA',
                    cctext: '<p>This eLearning course is required learning that is designed to prepare you for the upcoming workshop. It will provide you with all the information and concepts you need so that you can successfully apply them, engage with other participants, and have fun in the workshop! If you aren\'t sure when your workshop is scheduled, please check with your management team to confirm that you\'re enrolled in the one-day session. </p><p>The Switch Training will be presented in five modules. In these modules we will talk about why you value safety, the safety culture model and variables that keep an organization safe, how the brain affects safety, and brain tools. Finally, we will discuss the Big Five Safety Frames. </p><p>Now, let\'s get started!</p>'
                },
                { // Slide 8
                    name: 'Main Menu',
                    type: 'HTML',
                    cctext: '<p>Select Module 1: This Is Why.</p>'
                },
                { // Slide 1
                    name: 'Course Introduction',
                    type: 'Video',
                    cctext: '<p>Welcome to Switch, where we are going to take a very different approach to safety training.&nbsp; </p><p>In 2017, Southern California Edison invested in an extensive Safety Culture Assessment with the vendor, Propulo. Roughly 9,000 SCE employees participated in the surveys, and 546 people participated in interviews and focus groups.</p><p>So, what did we learn from the Safety Culture Assessment?</p><p>Well, we learned that we have improved&#8230;but we also learned that we can do better. Let\'s talk about some of the key takeaways.</p><p>First, we learned that as an organization we tend to focus more on the rules, procedures, and equipment than we do on the risks that our employees face every day. </p><p>We also learned that our safety culture is leader-led and influenced. So, if the leader is less committed or lacks the skills necessary to motivate employees, those employees may not buy into our safety programs or want the freedom to make choices that may protect their own safety.&nbsp;In addition, we have so many safety messages and programs, and our employees feel like they make a lot of noise but that they are ultimately overkill. </p><p>Our employees did note that they get the opportunity to give feedback, but the assessment tells us that when they do, they don\'t always feel heard. More often than not, they feel that SCE places a higher focus on protecting the business from risk. </p><p>Finally, the assessment taught us that our safety culture is all about public compliance. What does that mean? It means that we follow the rules because we have to. So, we have to ask ourselves, "If someone isn\'t watching, what decisions do we make? Do we put our safety first or focus on covering up?"</p>'
                },
                { // Slide 2
                    name: 'Pre-Training Survey',
                    type: 'HTML',
                    cctext: '<p>Throughout this training, you will be provided with many opportunities - both online and in person - to engage, to share your insight, and to provide feedback that will help us with the continuous care and improvement of the Switch Safety Training Program.</p><p>One way we ask for your feedback is through the use of surveys that inform us about your experience with the training. We will ask you to complete a survey before the training, one immediately after the workshop, and another several weeks down the road.</p><p>Your honesty will help us make the program stronger, more enjoyable, and more useful to you. Your responses are completely anonymous. There is no way and no need for us to know who answered the questions the way they did. We are only concerned with gathering your opinions and the experience and knowledge you had, or gained, before and after the training.</p><p>When you\'re ready, select the button onscreen to begin the pre-training survey. But first, we want to thank you for helping us build a better training program and for making SCE a safer workplace!</p>'
                },
                { // Slide 3
                    name: 'Why Switch? Why Now?',
                    type: 'Video',
                    cctext: '<p>At SCE, we understand that everyone is dedicated to transforming our safety culture. So, as an organization, how are we working to achieve this transformation?</p><p>We are uniting&nbsp;people from different operational organizations across the business, and we\'re supporting our leaders with training that provides a clear view of&nbsp;strong safety leadership. This enables our leaders to work towards alignment, using a common approach&nbsp;that can take all of us to the next level - together!</p><p>We\'re also improving our work practices so that people feel empowered and engaged each and every day. We do this by supporting our employees in a way that allows them to take ownership of their safety through improved practices. And we\'re streamlining our safety messages so that we can focus on effectively getting the word out about the concepts our employees will learn in our training programs.</p><p>In addition, we will focus on shifting our safety mindset - adapting our attitudes toward safety to focus on personal accountability rather than rules and procedures. This will help us get to a place where we CHOOSE to put safety first.</p><p>Finally, we are making an investment in our safety both as individuals and as an organization with Switch Training. In doing so, we look forward to taking the critical next step toward taking control and ownership of our personal safety, and we look forward to seeing the evolution of our safety culture.</p>'
                },
                { // Slide 4 part2 added in JT ///////////////////////////
                    name: 'Transform the Safety Mindset',
                    //type: 'HTML',
                    type: 'Video',
                    cctext: '<p>Select the arrows onscreen to transform the safety mindset. When you\'re finished, select Next to learn about the Safety Culture Maturity Model.</p>'
                },
                { // Slide 5
                    name: 'Safety Culture Maturity Model',
                    //type: 'HTML',
                    type: 'Video',
                    cctext: '<p>Different organizations have different safety and performance results, and it\'s important to remember that any shift in culture takes time. The key is to start small.&nbsp;By making small, conscious changes in how you think and act every day, you can create momentum that is capable of initiating a much larger change within the organization.&nbsp;As you progress through the Switch experience both here and in the classroom, prepare yourself for a safety transformation and take ownership over your safety culture maturity. </p><p>This pyramid represents the Safety Culture Maturity Model.&nbsp;</p><p>Where do you see yourself on this chart?&nbsp;And where do you see your workgroup?&nbsp;Or Southern California Edison as a whole? Select each level of the pyramid to see an example of the mindset that accompanies each level of the Safety Security Model. </p>'
                },
                { // Slide 6
                    name: 'Knowledge Check: Safety Culture Maturity Model',
                    type: 'Video',
                    //type: 'CreateJS',
                    cctext: '<p>Let\'s see what you\'ve learned! Match each thought onscreen to the corresponding safety culture maturity level.</p>'
                },
                { // Slide 7
                    name: 'Conclusion',
                    type: 'VideoAA',
                    cctext: '<p>This eLearning course is required learning that is designed to prepare you for the upcoming workshop. It will provide you with all the information and concepts you need so that you can successfully apply them, engage with other participants, and have fun in the workshop! If you aren\'t sure when your workshop is scheduled, please check with your management team to confirm that you\'re enrolled in the one-day session. </p><p>The Switch Training will be presented in five modules. In these modules we will talk about why you value safety, the safety culture model and variables that keep an organization safe, how the brain affects safety, and brain tools. Finally, we will discuss the Big Five Safety Frames. </p><p>Now, let\'s get started!</p>'
                },
                { // Slide 8
                    name: 'Main Menu',
                    type: 'HTML',
                    cctext: '<p>Select Module 1: This Is Why.</p>'
                }
			]
		},
		{ // Lesson 5
		name: 'Lesson5',
			slides: [
				{ // Slide 1
					name: 'SlideTitle',
					type: 'Video',
					cctext: '<p>XXXXX</p>'
				}
			]
		}
	]
});
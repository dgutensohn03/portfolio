/// <reference path="../Source/XM/SlideStatus.js" />

var CourseData = kendo.observable({
	name: 'Marathon Pipe Line - Champions of Energy',
	lessons: [
		{ // Lesson 1
			name: 'Lesson 1',
			slides: [
				{ // Slide 1.1
					name: 'Introduction',
					type: 'HTML',
					cctext: ''
				},
				{ // Slide 1.2
					name: 'World Map',
					type: 'Game',
					gameState: 'map',
					cctext: ''
				},
				{ // Slide 1.3
					name: 'Level 1',
					type: 'Game',
					gameState: 'level1',
					bonus: 'level1Boss',
					cctext: ''
				},
				{ // Slide 1.4
					name: 'Bonus Level 1',
					type: 'CreateJS',
					cctext: ''
				},
				{ // Slide 1.5
					name: 'Level 2',
					type: 'Game',
					gameState: 'level2',
					bonus: 'level2Boss',
					cctext: ''
				},
				{ // Slide 1.6
					name: 'Bonus Level 2',
					type: 'CreateJS',
					cctext: ''
				},
				{ // Slide 1.7
					name: 'Conclusion',
					type: 'HTML',
					cctext: ''
				}
			]
		}
	]
});
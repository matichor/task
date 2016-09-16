'use strict'

commonMod.constant('MenuData', {
	
		'BasicData':[{
			
			id:1,
			
			name:'Uzytkownicy',
			
			childVisible:false,
			
			url:'modules/users/users.html',
			
			actions:[
				{
					actionType:1, /*akcja widoczności dla childrenów*/
					actionDetail: null
				},
				{
					actionType: 3, /*akcja schowania childrenów*/
					actionDetail: null
				}
			],
			
			isVisible: true,
			
			parentId: null,
			
			hasChildren: true,
			
			sequence: 1,
			
			strucureLevel: 0
			
			},
			{
				id:2,
			
			name:'Kontakty',
			
			childVisible:true,
			
			actions:[
				{
					actionType:2, /*akcja widoczności dla childrenów*/
					actionDetail: {
						name:'url',
						
						value:'modules/information/html/information.html'
					}
				}
			],
			
			isVisible: false,
			
			parentId: 1,
			
			hasChildren: false,
			
			sequence: 2,
			
			strucureLevel: 1
			
			}


		],
		
		'MenuSequence':{
			
			INFO: 1,
			
			ADVERT:4,
			
			EST_MAN_OPINION:5
			
		}
	
}).constant('RecordStatus', {

	'NEW':1,
	
	'IN_PROGRESS':2,
	
	'APPROVED':4
	
}).constant('TableHeaderIndicator', {
	
	'IdeaTableHeader': 1
	
}).constant('MappingPhrase',{

	'Action':'action'
})




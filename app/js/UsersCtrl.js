function UsersCtrl($scope) {

	$scope.users = [
	                 {"id":1,"name": "Óscar", "surname": "Andreu Martínez", "date":"2012-11-04T18:53:04.0000000Z", "balance":12},
	                 {"id":2,"name": "Pedro", "surname": "Lopex Garay", "date":"2012-11-04T18:53:04.0000000Z", "balance":1},
	                 {"id":3,"name": "Julián","surname": "Perez Buendía", "date":"2012-11-04T18:53:04.0000000Z", "balance":15},
	                 {"id":4,"name": "Pilar","surname": "Perez Molina", "date":"2012-11-04T18:53:04.0000000Z", "balance":15},
	                 {"id":5,"name": "Isabel","surname": "Hernandez Abreu", "date":"2012-11-04T18:53:04.0000000Z", "balance":15},
	                 {"id":6,"name": "Rosa","surname": "Fernandez Buendía", "date":"2012-11-04T18:53:04.0000000Z", "balance":15},
	                 {"id":7,"name": "Miriam","surname": "Hernandez Buendía", "date":"2012-11-04T18:53:04.0000000Z", "balance":15},
	                 {"id":8,"name": "Carlos","surname": "Abreu Fernandez", "date":"2012-11-04T18:53:04.0000000Z", "balance":15},
	                 {"id":9,"name": "Peddro","surname": "Molina Hernandez", "date":"2012-11-04T18:53:04.0000000Z", "balance":15},
	                 {"id":10,"name": "Felipe","surname": "Fernandez Buendía", "date":"2012-11-04T18:53:04.0000000Z", "balance":15},
	                 {"id":11,"name": "Aunción","surname": "Hernandez Castro", "date":"2012-11-04T18:53:04.0000000Z", "balance":15},
	                 {"id":12,"name": "Julián","surname": "Perez Fernandez", "date":"2012-11-04T18:53:04.0000000Z", "balance":15},
	                 {"id":13,"name": "Julián","surname": "Castro Hernandez", "date":"2012-11-04T18:53:04.0000000Z", "balance":15},
	               ];
	
	$scope.usersTableClick = function(id){
		location.href= '#/users/' + id;
	};

	$scope.resultsPerPageOptions = [
	                      { name: 'Show 5 per page', value: '5' }, 
	                      { name: 'Show 10 per page', value: '10' }, 
	                      { name: 'Show 15 per page', value: '15' },
	                      { name: 'Show 20 per page', value: '20' },
	                  ];
	$scope.resultsPerPageOption = $scope.resultsPerPageOptions[1].value;
}
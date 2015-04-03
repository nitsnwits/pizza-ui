function drawChart(pieParam, donutParam) {
	// get the rows from as retrieved from local storage
	var rows = [
		['Mushrooms', mushroom],
		['Onions', onion],
		['Olives', olive],
		['Pepper', pepper],
		['Tomatoes', tomato]
	];

	// Create the data table.
	var dataForPie = new google.visualization.DataTable();
	dataForPie.addColumn('string', 'Topping');
	dataForPie.addColumn('number', 'Slices');
	dataForPie.addRows(rows);

	// Set chart options
	var optionsForPie = pieParam || {
		'title':'BuildYourOwnPizza Pie View',
	    'width':500,
	    'height':300,
	    'is3D': true,
	    'pieStartAngle': 0,
	    'pieSliceText': 'label'
	};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.PieChart(document.getElementById('pie-view'));
	chart.draw(dataForPie, optionsForPie);

	// create data for donuts
	var dataForDonut = new google.visualization.DataTable();
	dataForDonut.addColumn('string', 'Topping');
	dataForDonut.addColumn('number', 'Slices');
	dataForDonut.addRows(rows);

	// set chart options
	var optionsForDonut = donutParam || {
		'title': 'BuildYourOwnPizza Donut View',
		'width': 500,
		'height': 300,
		'pieHole': 0.5,
		'pieSliceText': 'label'
	};

	// instantiate and draw donut view chart
	var donutChart = new google.visualization.PieChart(document.getElementById('donut-view'));
	donutChart.draw(dataForDonut, optionsForDonut)
};


$(document).ready(function() {
	mushroom = parseInt(sessionStorage.getItem("mushroom"));
	onion = parseInt(sessionStorage.getItem("onion"));
	olive = parseInt(sessionStorage.getItem("olive"));
	pepper = parseInt(sessionStorage.getItem("pepper"));
	tomato = parseInt(sessionStorage.getItem("tomato"));

	// use the values from session storage and draw the chart
	//$('#charts').show();

	// Load the Visualization API and the piechart package.
	google.load('visualization', '1.0', {'packages':['corechart']});

	// Set a callback to run when the Google Visualization API is loaded.
	google.setOnLoadCallback(drawChart(null, null));

	// set start angle for pie rotation as 0
	sessionStorage.setItem('pieStartAngle', 0);

	$('#rotate-button').on('click', function(){
		// update angle to + 30
		var existingAngle = parseInt(sessionStorage.getItem('pieStartAngle'));
		sessionStorage.setItem('pieStartAngle', existingAngle + 30);
		// Set chart options
		var optionsForPie = {
			'title':'BuildYourOwnPizza Pie View',
		    'width':500,
		    'height':300,
		    'is3D': true,
		    'pieStartAngle': existingAngle + 30
		};
		drawChart(optionsForPie, null);
	});

	$('#explode-button').on('click', function() {
		// Set chart options
		var optionsForPie = {
			'title':'BuildYourOwnPizza Pie View',
		    'width':500,
		    'height':300,
		    'is3D': true,
		    'pieSliceText': 'label',
			slices: {  
				1: {offset: 0.2},
				2: {offset: 0.3},
				3: {offset: 0.4},
				4: {offset: 0.5}
			}
		};
		drawChart(optionsForPie, null);	
	});

	$('#unexplode-button').on('click', function() {
		// fall back to normal options
		drawChart(null, null);
	});
});
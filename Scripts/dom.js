$('#container').append('<img src="Images/fresh_food.jpg">' + 
    '<h1>Mystery Spot A</h1>' + 
    '<p>Automatically the bass</p>');

$('#container').append('' +
		'<button id="home">Home</button>' +
		'<button id="menu">Menu</button>' +
		'<button id="contact">Contact</button>');

$('#home').click(function(){
	$('#content').empty();
	$('#content').append('<p>Home of the tasties</p>');
});

$('#menu').click(function(){
	$('#content').empty();
	$('#content').append('<p>Catfish $1.00</p>');
	$('#content').append('<p>Dogfish $13.37</p>');
});

$('#contact').click(function(){
	$('#content').empty();
	$('#content').append('<p>In the bathroom</p>');
	$('#content').append('<p>Some town, some country, 12345</p>');
	$('#content').append('<p>123-456-789</p>');
});

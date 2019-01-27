var source = $('#store-template').html();

var template = Handlebars.compile(source)

var newHTML = template({item: "bread", price: "15"});

$('.items').append(newHTML);


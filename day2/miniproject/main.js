const useData = function (data) {

    var source = $('#directory-template').html();
    var template = Handlebars.compile(source)
    var newHTML = template({ data });
    $('#directory').append(newHTML);
    console.log(data)
}
$.ajax({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/users`,
    success: function (data)
    {useData(data)},
    error: function (xhr, text, error) {
        console.log(text);
    }
})


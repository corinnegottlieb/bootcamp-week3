// $.get("https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind", function(result){
//     console.log(result.items[0].volumeInfo.description)
// })

// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//     let last = users[users.length-1]
//   console.log(last.company.catchPhrase)
// })


// let usedata = function(data){
//     console.log(data)
// }

// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: usedata 

//   })

// EXCERCISE 1

// let fetch = function(isbn){
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     }); 
// }

// fetch(9782806269171)



// EXCERCISE 2
// let fetch = function(queryType, queryValue){
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     }); 
// }

// fetch("title", "How to Win Friends and Influence People")

// EXCERCISE 3
// let fetch = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {

//             data.items.forEach(d =>
//                 console.log(`Title: ${d.volumeInfo.title}, Authors: ${d.volumeInfo.authors}, ISBN: ${d.volumeInfo.industryIdentifiers[0].identifier}`)
//             )
//         }
//         ,
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     });
// }

// fetch("title", "How to Win Friends and Influence People")

// EXCERCISE 4


// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=VoLbUnLb8vcimAiwQiAzJIJBv7ngyOus&limit=5");
// xhr.done(function(data) { console.log("success got data", data);}
// $(`body`).append(`<iframe src= "${data.data[0].embed_url}"></iframe>`)

const search = function (){
 $(`#container`).empty()
 $(`#container`).css("display","block")
    $.get(`http://api.giphy.com/v1/gifs/search?q=${$("#input").val()}&api_key=VoLbUnLb8vcimAiwQiAzJIJBv7ngyOus&limit=5`, function(data){
    data.data.forEach(d =>   $(`#container`).append(`<div class="result"> <iframe src= "${d.embed_url}" data-src="${d.embed_url}"></iframe><button id="addButton">Add</button></div>`))
         
    })
        
}

$(`body`).on(`click`, `#addButton`, function() {
    // console.log($(this).siblings(`iframe`).data().src)
    $(`#favorites`).append(`<div class="fave"><iframe src="${$(this).siblings(`iframe`).data().src}" ></iframe>`)
$(`#container`).css("display","none")
})



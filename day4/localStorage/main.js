// localStorage.setItem(`name`,`Corinne`)

// console.log(localStorage.name)

// localStorage.removeItem(`name`)
// localStorage.clear()


// localStorage.personalData = JSON.stringify({
//     averageTimeOnSite: {unit: "hr", amt: 9},
//     probabilityOfFriends: 0.02,
//     commonKeywords: ["salsa for one", "1 vs. none Chess"]
//   })

//   let userStuff = JSON.parse(localStorage.personalData)

// console.log(userStuff.probabilityOfFriends) //prints 0.02

// let userStorage = {
//     darkMode: true,
//     showSideNav: false,
//     defaultResultCount: 9,
//     latestMarks: {
//         sectionA: 92,
//         sectionB: 11
//     },
//     cart: [
//         { id: 3112, count: 2 },
//         { id: 812, count: 16 }
//     ]
// }

// localStorage.userStorage = JSON.stringify(userStorage)

// localStorage.clear()

let data = JSON.parse(localStorage.data||"[]")

$(`#add`).click(function(){
    $(`body`).append(`<div class = "newText">${$(`input`).val()}</div>`)
    data.push({text:$(`input`).val()})
    localStorage.data = JSON.stringify(data)
})

data.forEach(d=>$(`body`).append(`<div class = "newText" >${d.text}</div>`))


$(`#clear`).click(function(){
    localStorage.clear()
    $(`.newText`).remove()
})
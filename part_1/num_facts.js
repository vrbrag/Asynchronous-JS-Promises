let favoriteNum = 12
let url = "http://numbersapi.com"

// 1.
$.getJSON(`${url}/${favoriteNum}?json`)
   .then(data => { console.log(data.text) })
   .catch(err => console.log(err))

// 2. 
let nums = [1, 2, 3, 4]
$.getJSON(`${url}/${nums}?json`)
   .then(data => { console.log(data) })
   .catch(err => { console.log(err) })

// // 3.
// $.getJSON(`${url}/${favoriteNum}?json`)
//    .then(data => {
//       console.log(data.text);
//       return $.getJSON(`${url}/${favoriteNum}?json`);
//    })
//    .then(data => {
//       console.log(data.text);
//       return $.getJSON(`${url}/${favoriteNum}?json`);
//    })
//    .then(data => {
//       console.log(data.text);
//       return $.getJSON(`${url}/${favoriteNum}?json`);
//    })
//    .then(data => {
//       console.log(data.text);
//    })
//    .catch(err => {
//       console.log(err)
//    })

Promise.all(
   Array.from({ length: 4 }, () => {
      return $.getJSON(`${url}/${favoriteNum}?json`)
   })
).then(facts => {
   facts.forEach(data => { console.log(data.text) })
})


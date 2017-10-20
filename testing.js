var array = [1,2,3,4,5,'',4,5]

var isTrue = true;

for (var i = 0; i < array.length; i++) {
  if (array[i] === ''){
    console.log('nothing at this position' + i)
  }
  else{
    console.log('yay, there\'s a value!' + i);
  }
}

// var friends = [
//   {
//     name: "friend1",
//     photoUrl: "http://www.sepeb.com/random-picture/random-picture-013.jpg",
//     scores: [1,5,3,1,2,3,4,2,3,1]
//   },
//   {
//     name: "friend2",
//     photoUrl: "http://www.sepeb.com/random-picture/random-picture-014.jpg",
//     scores: [2,3,5,5,5,3,1,1,5,5]
//   },
//   {
//     name: "friend3",
//     photoUrl: "http://www.sepeb.com/random-picture/random-picture-015.jpg",
//     scores: [2,2,2,2,2,2,3,1,3,3]
//   },
//   {
//     name: "friend4",
//     photoUrl: "http://www.sepeb.com/random-picture/random-picture-016.jpg",
//     scores: [1,1,1,1,1,1,1,1,1,1]
//   },
//   {
//     name: "friend5",
//     photoUrl: "http://www.sepeb.com/random-picture/random-picture-017.jpg",
//     scores: [5,5,5,5,5,5,5,5,5,5]
//   },
//    {
//     name: "friend6",
//     photoUrl: "http://www.sepeb.com/random-picture/random-picture-017.jpg",
//     scores: ['5','5','4',5,5,5,5,5,5,5]
//   }
// ];

// var converted = JSON.stringify(friends[5].scores);
// console.log(converted);

// var converted1 = JSON.parse(friends[1].scores[0]);
// console.log(converted1);

// // console.log(friends[5].scores);

// function parseValues() {
//   for (var i = 0; i < friends.length; i++) {
//     for (var j = 0; j < friends[i].scores.length; j++) {
//       friends[i].scores[j] = JSON.parse(friends[i].scores[j]);  
//     }
//     console.log(friends[i].scores);
//   }
// }

// parseValues();

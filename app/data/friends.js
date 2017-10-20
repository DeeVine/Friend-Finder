var friends = [
  {
    name: "friend1",
    photoUrl: "http://www.sepeb.com/random-picture/random-picture-013.jpg",
    scores: [1,5,3,1,2,3,4,2,3,1]
  },
  {
    name: "friend2",
    photoUrl: "http://www.sepeb.com/random-picture/random-picture-014.jpg",
    scores: [2,3,5,5,5,3,1,1,5,5]
  },
  {
    name: "friend3",
    photoUrl: "http://www.sepeb.com/random-picture/random-picture-015.jpg",
    scores: [2,2,2,2,2,2,3,1,3,3]
  },
  {
    name: "friend4",
    photoUrl: "http://www.sepeb.com/random-picture/random-picture-016.jpg",
    scores: [1,1,1,1,1,1,1,1,1,1]
  },
  {
    name: "friend5",
    photoUrl: "http://www.sepeb.com/random-picture/random-picture-017.jpg",
    scores: [5,5,5,5,5,5,5,5,5,5]
  }
];

// function compatibleFriend() {
//   for (var i = 0; i < tableArray.length; i++) {
//     console.log(tableArray[i].scores);
//   }
// }

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;

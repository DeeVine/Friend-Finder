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
  },
   {
    name: "friend6",
    photoUrl: "http://www.sepeb.com/random-picture/random-picture-017.jpg",
    scores: ['5','5','4',5,5,5,5,5,5,5]
  }
];

var converted = JSON.stringify(friends[5].scores);
console.log(converted);

var converted1 = JSON.parse(friends[1].scores[0]);
console.log(converted1);

// console.log(friends[5].scores);

function parseValues() {
  for (var i = 0; i < friends.length; i++) {
    for (var j = 0; j < friends[i].scores.length; j++) {
      friends[i].scores[j] = JSON.parse(friends[i].scores[j]);  
    }
    console.log(friends[i].scores);
  }
}

parseValues();

// var currentArray = [];
// var comparedValue = 0;

// //push absolute values into array for comparison
// var absoluteValue = function() {
//   var tempArray = [];
//   currentUser = friends[friends.length-1];

//   for (var i = 0; i < friends.length-1; i++) {
//     var absoluteVal = 0;
    
//     // tempArray.push(absoluteVal);
//     for(var j = 0; j < friends[i].scores.length; j++) {
//       absoluteVal += Math.abs(currentUser.scores[j] - friends[i].scores[j]);
//       // console.log('current user score ' + currentUser.scores[j] + 'second user score ' + friends[i].scores[j]);
//       console.log(absoluteVal);
//     }
//     currentArray.push(absoluteVal);
//     console.log(currentArray);
//   }
// } 

// var compareValues = function() {
//   comparedValue = currentArray[0];
//   for (var i = 0; i < currentArray.length; i++) {
//     if(currentArray[i] <= comparedValue){
//       comparedValue = currentArray[i];
//     }
//     else{
//       console.log('not greater');
//     }
//   }
//   console.log('compared value: ' + comparedValue);
// }

// absoluteValue();
// compareValues();
// var bestMatch = currentArray.indexOf(comparedValue);
// console.log(bestMatch);

// console.log(friends[bestMatch].name);
  
// function compatibleFriend() {
//   // var currentFriend;
//   // var tempValue = 0;
//   for (var i = 0; i < friends.length; i++) {
//     // console.log(friends[i].scores);
//     var tempValue = 0;
//     var currentFriend = friends[i];
//     for (var j = 0; j < currentFriend.scores.length; j++) {
//       tempValue += currentFriend.scores[j];
//       // console.log('score at position ' + j + ' ' + currentFriend.scores[j]);
//       console.log(currentFriend.name + ' theri value is:' + tempValue);
//     }
//   }
// }

// compatibleFriend();

// console.log(friends[0].scores[1]);
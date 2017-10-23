//linking data source
var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);

  });

  // API POST Requests
  app.post("/api/friends", function(req, res) {

    //push survey information into friends array
    friends.push(req.body);
  
    var currentArray = [];
    var comparedValue = 0;

    //convert all scores in array to numbers
    function parseValues() {
      for (var i = 0; i < friends.length; i++) {
        for (var j = 0; j < friends[i].scores.length; j++) {
          friends[i].scores[j] = JSON.parse(friends[i].scores[j]);  
        }
      }
    }

    //push absolute values into array for comparison
    var absoluteValue = function() {
      currentUser = friends[friends.length-1];

      for (var i = 0; i < friends.length-1; i++) {
        var absoluteVal = 0;
        
        for(var j = 0; j < friends[i].scores.length; j++) {
          absoluteVal += Math.abs(currentUser.scores[j] - friends[i].scores[j]);
        }
        currentArray.push(absoluteVal);
      }
    } 

    //get index position of friend with lowest difference
    var compareValues = function() {
      comparedValue = currentArray[0];
      for (var i = 0; i < currentArray.length; i++) {
        if(currentArray[i] <= comparedValue){
          comparedValue = currentArray[i];
        }
      }
    }

    parseValues();
    absoluteValue();
    compareValues();
    var bestMatch = currentArray.indexOf(comparedValue);
    res.json(friends[bestMatch]);

  });

//reset database to default sample array of friends
  app.post("/api/clear", function() {
    friends = [
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

  });
};

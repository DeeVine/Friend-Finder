// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

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
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    //push survey information into friends array
    friends.push(req.body);
    // res.json(friends[0]);
  
    var currentArray = [];
    var comparedValue = 0;

    //convert all scores in array to numbers
    function parseValues() {
      for (var i = 0; i < friends.length; i++) {
        for (var j = 0; j < friends[i].scores.length; j++) {
          friends[i].scores[j] = JSON.parse(friends[i].scores[j]);  
        }
        console.log(friends[i].scores);
      }
    }

    //push absolute values into array for comparison
    var absoluteValue = function() {
      var tempArray = [];
      currentUser = friends[friends.length-1];

      for (var i = 0; i < friends.length-1; i++) {
        var absoluteVal = 0;
        
        // tempArray.push(absoluteVal);
        for(var j = 0; j < friends[i].scores.length; j++) {
          absoluteVal += Math.abs(currentUser.scores[j] - friends[i].scores[j]);
          // console.log('current user score ' + currentUser.scores[j] + 'second user score ' + friends[i].scores[j]);
          console.log(absoluteVal);
        }
        currentArray.push(absoluteVal);
        console.log(currentArray);
      }
    } 

    var compareValues = function() {
      comparedValue = currentArray[0];
      for (var i = 0; i < currentArray.length; i++) {
        if(currentArray[i] <= comparedValue){
          comparedValue = currentArray[i];
        }
        else{
          console.log('not greater');
        }
      }
      console.log('compared value: ' + comparedValue);
    }

    parseValues();
    absoluteValue();
    compareValues();
    var bestMatch = currentArray.indexOf(comparedValue);
    console.log(bestMatch);
    console.log(friends[bestMatch].name);
    res.json(friends[bestMatch]);

  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
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

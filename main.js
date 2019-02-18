var button = document.getElementsByTagName('button')[0];
var myHeading = document.getElementsByTagName('h1') [0];

var lunchItems = ['Mexican Food', 'Sushi', 'Chicken Wings', 'Pizza', 'Greek Food', 'Subs and Sandwhiches', 'Italian Food', 'Fried Chicken', 'Chicken Fried Steak', 'Chinese Food', 'Breakfast Food', 'BBQ'];


var myFunction = function() {
  lunchItems.sort(function(a, b){return 0.5 - Math.random()});
  console.log(lunchItems);
};


button.onclick = myFunction;

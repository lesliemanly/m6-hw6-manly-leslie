var button = document.getElementsByTagName('button')[0];
var myHeading = document.getElementsByTagName('h1') [0];

var ourRandomLunchItem = document.createElement('p');
var lunchItemWrapper = document.getElementById('generator-results');
lunchItemWrapper.appendChild(ourRandomLunchItem);

var placeholderText = document.createTextNode('');
ourRandomLunchItem.appendChild(placeholderText);

var lunchItems = ['Mexican Food', 'Sushi', 'Chicken Wings', 'Pizza', 'Greek Food', 'Subs and Sandwhiches', 'Italian Food', 'Fried Chicken', 'Chicken Fried Steak', 'Chinese Food', 'Breakfast Food', 'BBQ'];


var myFunction = function() {
  lunchItems.sort(function(a, b){return 0.5 - Math.random()});
  var ourRandomLunchItemFiller = document.createTextNode(lunchItems[0]);
  ourRandomLunchItem.appendChild(ourRandomLunchItemFiller);
  var ourButtonSection = document.getElementById('generator-button');
  ourButtonSection.removeChild(button);
  ourRandomLunchItem.classList.add('big-and-bold');
};


button.onclick = myFunction;

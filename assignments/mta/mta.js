function Train(name, stations) {
  this.name = name;
  this.stations = stations;
}

Train.prototype.distance = function(board, exit) {
  board = this.stations.indexOf(board);
  exit = this.stations.indexOf(exit);
  return Math.abs(board - exit);
};

var lStations = [ "8th", "6th", "Union Square", "3rd", "1st" ];
var nStations = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ];
var sixStations = [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ];
var gStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];

var lTrain = new Train('The L Train', lStations);
var nTrain = new Train('The N Train', nStations);
var sixTrain = new Train('The Six Train', sixStations);
var gTrain = new Train('The G Train', gStations);


var trains = [lTrain, nTrain, sixTrain, gTrain];
var msg = "Which train would you like to get on? \n The L, N, 6 & G are available" + displayLines();
var startStation = prompt(msg);

for (var i = 0; i < trains.length; i ++) {
  if (train[i].name === startStation)
    train = trains[i]
};

function displayLines() {
  var trainNames = "";
  for (var i = 0; i < trains.length; i++) {
    trainNames += trains[i].name + '\n';
  }
  return trainNames.trim();
}


function displayStops() {
  var stopNames = "";
  for (var i = 0; i < startStation.length; i++) {
    stopNames += startStation[i].name + '\n';
  }
  return startStation.trim();
}

var endStation = prompt("Which station would you like to get off");

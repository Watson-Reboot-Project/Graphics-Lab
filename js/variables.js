/*
* Contains code for the variable window.
* All variable arrays are declared and
* the variable window is populated with
* the declared variables
*
* relied on by `canvas.js`, `addElements.js`
*/

//Declare all variables
// TODO: canvas.js
var pointVariables = [];
// TODO: canvas.js
var lineVariables = [];
// TODO: canvas.js
var circleVariables = [];
// TODO: canvas.js
var polygonVariables = [];
// TODO: canvas.js
var distanceVariables = [];

var paintbrush = 0; //Keeps track of which function was called last. (prevents multiple shapes from being drawn at once)

//Print all declared variables into the variables window
// canvas.js
function printVars() {
    var d = '';
    var p = '';
    var l = '';
    var c = '';
    var g = '';
    var total = '';

    var i;

    //Add all declared distance variables to the total string
    for (i = 0; i < distanceVariables.length; i++) {
        d += distanceVariables[i] + ', ';
    }
    if (d.length > 0) { total += 'Distance: ' + d + '<br>'; }

    //Add all declared point variables to the total string
    for (i = 0; i < pointVariables.length; i++) {
        p += pointVariables[i] + ', ';
    }
    if (p.length > 0) { total += 'Point: ' + p + '<br>'; }

    //Add all declared line variables to the total string
    for (i = 0; i < lineVariables.length; i++) {
        l += lineVariables[i] + ', ';
    }
    if (l.length > 0) { total += 'Line: ' + l + '<br>'; }

    //Add all declared circle variables to the total string
    for (i = 0; i < circleVariables.length; i++) {
        c += circleVariables[i] + ', ';
    }
    if (c.length > 0) { total += 'Circle: ' + c + '<br>'; }

    //Add all declared polygon variables to the total string
    for (i = 0; i < polygonVariables.length; i++) {
        g += polygonVariables[i] + ', ';
    }
    if (g.length > 0) { total += 'Polygon: ' + g + '<br>'; }

    //Add all variables to variable window
    $('#' + variableDiv.id).empty().append(total);
}

//New Distance variable
// TODO: addElements.js
function newDistance() {
    paintbrush++;
    distanceVariables[distanceVariables.length] = 'd' + (distanceVariables.length+1);
    printVars();
}

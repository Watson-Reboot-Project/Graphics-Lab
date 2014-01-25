/*
* Contains code for the variable window.
* All variable arrays are declared and
* the variable window is populated with
* the declared variables
*/

//Declare all variables
var pointVariables = [];
var lineVariables = [];
var circleVariables = [];
var polygonVariables = [];
var distanceVariables = [];

//Print all declared variables into the variables window
function printVars() {
    var d = '';
    var p = '';
    var l = '';
    var c = '';
    var g = '';
    var total = '';

    var i;

    for (i = 0; i < distanceVariables.length; i++) { //Add all declared distance variables to the total string
        d += distanceVariables[i] + ', ';
    }
    if (d.length > 0) { total += 'Distance: ' + d + '<br>'; }

    for (i = 0; i < pointVariables.length; i++) { //Add all declared point variables to the total string
        p += pointVariables[i] + ', ';
    }
    if (p.length > 0) { total += 'Point: ' + p + '<br>'; }

    for (i = 0; i < lineVariables.length; i++) { //Add all declared line variables to the total string
        l += lineVariables[i] + ', ';
    }
    if (l.length > 0) { total += 'Line: ' + l + '<br>'; }

    for (i = 0; i < circleVariables.length; i++) { //Add all declared circle variables to the total string
        c += circleVariables[i] + ', ';
    }
    if (c.length > 0) { total += 'Circle: ' + c + '<br>'; }

    for (i = 0; i < polygonVariables.length; i++) { //Add all declared polygon variables to the total string
        g += polygonVariables[i] + ', ';
    }
    if (g.length > 0) { total += 'Polygon: ' + g + '<br>'; }

    $('#' + variableDiv.id).empty().append(total); //Add all variables to variable window
}

//New Distance variable
function newDistance() {
    paintbrush++;
    distanceVariables[distanceVariables.length] = 'd' + (distanceVariables.length+1);
    printVars();
}




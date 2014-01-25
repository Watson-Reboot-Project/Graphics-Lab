/*
 * Controls the Run and Walk features of the Watson Graphcis Lab
 *
 * relies on `editor.js`
 * relied on by `addElements.js`
 */

define(['addElements'], function() {
    //Assign all global variables
    // local
    var step = 0;
    //Allows users to run the program slowly
    // TODO: de-global-ize
    // addElements.js
    function run() {
        console.log('run');
    }

    //Allows users to walk through the program code one step at a time
    // TODO: de-global-ize
    // addElement.js
    function walk() {
        returnToNormalColor();
        if (step > codeTable.rows.length-1) { //Don't allow step to go beyond program
            step = 0;
            return;
        }
        selectRow(step);
        highlightLine(step);
        console.log(rowToString(step));
        step++;
    }
});

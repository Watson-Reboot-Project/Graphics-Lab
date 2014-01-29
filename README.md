<html>
	<body>
		<h1>Done by: Bidur Shrestha</h1>
		<h2>This branch is merged with keypad.</h2>
		<h3>Required directory structure for adding keypad:</h3>

		- index.html
		- css/
				- jquery-ui.custom.css
				- NumpadStyle.css
				- images/
						- All images
		- js/
				- NumpadDesign.js
				- jquery-ui.js
				- Click.js
--------------------------------------------------------------
<h3>Instructions on including keypad:</h3>

		1. In the head section of index page, add followings:
						<link rel="stylesheet" href="css/jquery-ui-custom.css"/>
						<link rel="stylesheet" href="css/NumPadStyle.css"/>

		2. In body section of the index page, add followings:
						<script src="js/NumpadDesign.js"></script> //Before any other javascripts are included
						<script src="js/jquery-ui.js"></script> //At the end of body
						<script src="js/Click.js"></script> //At the end of body after including jquery-ui.js

		3. Make sure to have following javascript files in js folder which should be located in same folder as index.html
				a. Click.js
				b. NumpadDesign.js
				c. jquery-ui.js
		
		4. Make sure to have other required files for design in css folder, which should also be located in same folder as index.html
				a. jquery-ui-custom.css
				b. NumpadStyle.css
--------------------------------------------------------------
<h3>In js/editor.js file make the following changes:</h3>

		1. Declare a global variable named CurrentElement at the beginning of the file like following:
				var CurrentElement; // This identifies the current clicked element for change later on from numpad and variable chooser 


		2. Add following code to desired location where pop needs to be for numpad:
			/************************************************************************************************************************/
            CurrentElement = $(this);
						$( "#dialog-modal-num" ).dialog(
						{
							height: 280,
							width: 350,
							modal: true
						});
			/************************************************************************************************************************/

		3. Add the following code to desired location where pop needs to be for variable chooser:
			/************************************************************************************************************************/
		        CurrentElement = $(this);
						CreateDialogOptions();
						$( "#dialog-modal-Vars" ).dialog(
						{
							height: 280,
							width: 350,
							modal: true
						});	
			/************************************************************************************************************************/
--------------------------------------------------------------
</body>
</html>


var CurrentID = ""; //Global Variable to identify the clicked object
var CurrentVal = "";
$(document).on('click', "a.Clickable" , function() 
{
	CurrentID = $(this).attr("id");
	CurrentVal = $(this).html();
	if ((CurrentID.substring(0,5)=="start") || (CurrentID.substring(0,3)=="end")) 
	{
		$( "#dialog-modal-num" ).dialog(
		{
			height: 280,
			width: 350,
			modal: true
		});
	}
	else if ((CurrentID.substring(0,6)=="lclick") || (CurrentID.substring(0,6)=="cclick") || (CurrentID.substring(0,6)=="gclick") || (CurrentID.substring(0,6)=="pclick") || (CurrentID.substring(0,4)=="draw"))
	{
		CreateDialogOptions();
		$( "#dialog-modal-Vars" ).dialog(
		{
			height: 280,
			width: 350,
			modal: true
		});	
	}

});

$(document).on('click', "input.Numpad" , function() 
{
	var Val = $(this).val();
	var Current = $("input.InputValue").val();
	var NewVal = Current+""+Val;
	if (NewVal.length>3)
		NewVal = NewVal.substring(1, 4);
	/*if ((parseInt(NewVal))>300)
	{
		alert("Cannot have more than 300.");
		NewVal="300";
	}*/
	$("input.InputValue").val(NewVal);
});

$(document).on('click', "input.ClearBtn" , function() 
{
	$("input.InputValue").val("");
});

$(document).on('click', "input.CancelBtn" , function() 
{
	$( "#dialog-modal-num" ).dialog("close");
});

$(document).on('click', "input.OKBtn" , function() 
{
	var input = $("input.InputValue").val();
	
	if (input > 300) {
	    $("#dialog-modal-num").dialog("close");
	    alert("Please choose a value less than or equal to 300");
	    $("input.InputValue").val("");
	    $("#dialog-modal-num").dialog("open");
	}
	else {
	    CurrentElement.html(parseInt(input));
        $("#dialog-modal-num").dialog("close");
	}
	//return;	
});


$(document).on('click', "input.VarOKBtn" , function() 
{
	var VarName = $('#VarsDialogSelect :selected').text();
	if (VarName=="")
	{
		alert("Please select one variable name.");
	}
	else
	{
		CurrentElement.html(VarName);	
		$( "#dialog-modal-Vars" ).dialog("close");
	}
});

$(document).on('click', "input.VarCancelBtn" , function() 
{
		$( "#dialog-modal-Vars" ).dialog("close");
});

function CreateDialogOptions(list) {
	$("select#VarsDialogSelect").html(list);
	
	/*//Here change Options2 to the name of array variable that holds all the current variables
	var Options2 = new Array();
	var ValToken = CurrentElement.html().substring(0,1);	
	if (ValToken=="l")
		Options2 = lineVariables;//["Var1", "var2", "l3", "c2", "sth"];
	else if (ValToken=="d")
		Options2 = distanceVariables;
	else if (ValToken=="p")
		Options2 = pointVariables;
	else if (ValToken=="g")
		Options2 = polygonVariables;
	else if (ValToken=="c")
		Options2 = circleVariables;
	var OptionVals = "";
	var i = 0;
	for (i = 0; i < Options2.length; i++)
	{
		OptionVals = OptionVals+"<option>"+Options2[i]+"</option>";
	}
	$("select#VarsDialogSelect").html(OptionVals);
	return;*/
}


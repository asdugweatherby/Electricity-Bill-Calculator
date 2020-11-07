let cr = document.getElementById("CR");
let pr = document.getElementById("PR");
let sd = document.getElementById("SD");
let ed = document.getElementById("ED");
let lblResult = document.getElementById("lblResult");
let inpError = document.getElementById("lblError");

let units = cr-pr;
let days = ed-sd;

function clearTextBox()
{
	units=0;
	console.log("Value Cleared");
}


function calcBill()
{
	let total=0;
	
	if(units>0 && days>0)
	{
		if(units<=days)
		{
			total = (units*7.85)+50;	
		}
		else if(units>days && units<=2*days)
		{
			total= (units*7.85)+200;	
		}

		else if(units>2*days && units<=3*days)
		{
			total = (2*days*7.85)+(units-2*days)*10+400;	
		}

		else
		{
			total= (2*days*7.85)+ (days*10.00) + (units-3*days)*27.85 + 800	
		}
		lblResult.InnerHTML = total;
	}
	
	else
	{
		lblError.InnerHTML = "Invalid Input!";
	}
			
}
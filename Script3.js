var color;
var fontweight
document.write("<table border='1px'>");

for(var i = 1; i <= 10; i++) {

	document.write("<tr style='height:30px;'>");

	for(var j = 1; j <= 10; j++) {
        
		
        if(j> 1 && i == 1 || i>1 && j==1) {
			color = "grey";
            fontweight="bold";
        }
            
        
        
            else if(i==1 && j==1){
            color="yellow";
            
        }
		
		else {
			color = "white";
            fontweight="normal"
		}
        
		// document.write("<td style='width:30px;background-color:" + color+ ";text-align:center;font-weight:"+fontweight+"'>" + i*j + "</td>");
        document.write(`<td style='width:30px;background-color:${color};text-align:center;font-weight:${fontweight}'>${(i*j == 1) ? `${x}` : `${i*j}`}</td>`);

    }
	document.write("</tr>");
}

document.write("</table>");
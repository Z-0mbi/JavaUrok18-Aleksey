  
var table = "<table id='idTable'>";
var str = "abcdefgh" // для разметки доски

//не получилось вставить html символы - &#9812; и тп
var figureW = '\u2656\u2658\u2657\u2654\u2655\u2657\u2658\u2656';
var figureB = "\u265C\u265E\u265D\u265A\u265B\u265D\u265E\u265C";

//Создаем доску
for (var i = 0; i < 9; i++){    
    table += "<tr>";
    for (var j = 0; j < 9; j++){
                
        if (i<8 && j<8){
            if ((i+j) % 2 == 1){
            table += "<td class='black'></td>";           
            }
            else{
                table += "<td class='white'></td>";            
            }            
        }
        //Делаем разметку
        else if(i == 8 && j == 8){            
            table += "<td></td>"
        }
        else if(i == 8){            
            table += "<td>" + (j+1) + "</td>"
        }
        else if(j == 8){
            table += "<td>" + str.charAt(i) + "</td>"
        }
    }
    table += "</tr>";
}
table += "</table>";

document.write(table);
//Заполняем доску
var x = document.getElementsByTagName('td');
for(var i=0; i<x.length; i++){
    
    if (i < 8){        
        x[i].innerText = figureW.charAt(i);
    }
    else if (i>8 && i<17){
        x[i].innerHTML = "&#9817";
    }
    else if (i>53 && i<62){
        x[i].innerText = "\u265F";
    }
    else if (i>62 && i<71){
        x[i].innerText = figureB.charAt(i%63);
    }
    
        
    
}
 
 
 
 
 
 
 
 
 
 
 


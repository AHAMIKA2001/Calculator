document.getElementById("screen").defaultValue=0
let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';
let button='';
for(item of buttons){
    item.addEventListener('click',function(e){
        buttontxt=e.target.innerText;
        if(buttontxt=='C'){
            screenValue="";
            screen.value=screenValue;
        } 
        else if(buttontxt=='='){
            if(screenValue.includes("cos"))
            {
            button="cos"
            let ind=screenValue.indexOf(button)
            let calnum=''
            let i
            for(i=ind+3;i<screenValue.length;i++)
               {
                   if(screenValue[i]>='0' && screenValue[i]<='9')
                   calnum+=screenValue[i];
                   else
                   break;
               }
            let calint=parseInt(calnum);
            triVal=Math.cos((calint*Math.PI)/180);
            screenValue=screenValue.slice(0,ind)+triVal+screenValue.slice(i)
            }
            else if(screenValue.includes("sin"))
            {
            button="sin"
            let ind=screenValue.indexOf(button)
            let calnum=''
            let i
            for(let i=ind+3;i<screenValue.length;i++)
               {
                   if(screenValue[i]>='0' && screenValue[i]<='9')
                   calnum+=screenValue[i];
                   else
                   break;
               }
            calint=parseInt(calnum);
            triVal=Math.sin((calint*Math.PI)/180);
            screenValue=screenValue.slice(0,ind)+triVal+screenValue.slice(i)
            }
            else if(screenValue.includes("tan"))
            {
            button="tan"
            let ind=screenValue.indexOf(button)
            let calnum=''
            let i
            for(i=ind+3;i<screenValue.length;i++)
               {
                   if(screenValue[i]>='0' && screenValue[i]<='9')
                   calnum+=screenValue[i];
                   else
                   break;
               }
            let calint=parseInt(calnum);
            triVal=Math.tan((calint*Math.PI)/180);
            screenValue=screenValue.slice(0,ind)+triVal+screenValue.slice(i)
            }
            else if(screenValue.includes("sqrt"))
            {
            button="sqrt"
            let ind=screenValue.indexOf(button)
            let calnum=''
            let i
            for(i=ind+4;i<screenValue.length;i++)
               {
                   if(screenValue[i]>='0' && screenValue[i]<='9')
                   calnum+=screenValue[i];
                   else
                   break;
               }
            let calint=parseInt(calnum);
            triVal=Math.sqrt((calint*Math.PI)/180);
            screenValue=screenValue.slice(0,ind)+triVal+screenValue.slice(i)
            }
            else if(screenValue.includes("log"))
            {
            button="log"
            let ind=screenValue.indexOf(button)
            let calnum=''
            let i
            for(i=ind+3;i<screenValue.length;i++)
               {
                   if(screenValue[i]>='0' && screenValue[i]<='9')
                   calnum+=screenValue[i];
                   else
                   break;
               }
            let calint=parseInt(calnum);
            triVal=Math.log10(calint);
            screenValue=screenValue.slice(0,ind)+triVal+screenValue.slice(i)
            }
            screen.value=eval(screenValue)
        }
        else if(buttontxt=='del'){
            screenValue=screenValue.slice(0,-1);
            screen.value=screenValue;
        }
        else{
            screenValue+=buttontxt;
            screen.value=screenValue;
        }
        })
}
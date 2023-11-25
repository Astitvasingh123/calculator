let v="";
let buttons=document.querySelectorAll('.role')
inp=document.getElementById("inp");
console.log(inp);
console.log(buttons);
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.value == '=')
        {
            v=eval(v);
            document.getElementById("inp").value=v;
        }
        else if(e.target.value == 'C')
        {
            v="";
            document.getElementById("inp").value=v;
        }
        else{
            
            console.log(v);
            console.log(e.target);
            v=v+e.target.value;
            document.getElementById("inp").value=v;
        }
    })
})
/*
Practice script to learn how to create an element, edit the contents in the element and then append
it to another element
*/

const M1B=document.getElementById("m1");
M1B.addEventListener('click',function(){
    const CE1=document.createElement('div');
    const CE1I= CE1.innerHTML=`<code>
        const M1B=document.getElementById("m1"); <br>
        M1B.addEventListener(click,function(){ <br>
        const CE1=document.createElement('div'); <br>
        const CE1I= CE1.innerHTML="Exaample"; <br>
        const M1DISP=document.getElementById("m1Display"); <br>
        M1DISP.appendChild(CE1); <br>
        </code>
    });`;
    const M1DISP=document.getElementById("m1Display");
    M1DISP.appendChild(CE1);
});
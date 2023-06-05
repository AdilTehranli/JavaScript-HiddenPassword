"use strict "

function show(){
    let inp=document.getElementById('inp');
    let icon=document.getElementById('icon');

    if(inp.type==='password'){
        inp.type='text';
        icon.className='fa-solid fa-eye-slash'
        
    }else{
        inp.type='password';
        icon.className='fa-solid fa-eye'
        
        
    }
}
function check(){
    let inp=document.getElementById('inp');
    let text=document.getElementById('text');
    if(inp.value.length>8){
        text.innerHTML='Strong';
        text.className  ='badge bg-success';
    }else{
        text.innerHTML='Less than 8 letters'
        text.className='badge bg-danger'
    }
}
const body = document.querySelector("#iframe");
function ChangeWidth(width) {
    body.style.width = width;
}

const button_block = document.querySelector('.buttons-block');
       
function handleClick(e) { 
    const el = e.target;
    if (el.tagName != "BUTTON")
        return;
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(btn) {
        btn.classList.remove("btn-active");
    })
    el.classList.add("btn-active");
}

button_block.addEventListener('click', handleClick);
     
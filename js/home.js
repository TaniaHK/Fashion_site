let modal = document.getElementById('img-view-modal');
let modalimg =  document.getElementById('img-view-modal-content');

function onimgclick(e){
    modal.style.display = "block";
    modalimg.src = e.target.src;
}

let span = document.getElementsByClassName('img-view-modal-close')[0];
span.addEventListener("click",function(){
    modal.style.display = "none";
}) 


function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show');
        }else{
            change.target.classList.remove('show');
        }
        
    });
}
let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.foto-anim');

for (let elm of elements) {
    observer.observe(elm);
}


let elements2 = document.querySelectorAll('.text-anim-up');
let elements3 = document.querySelectorAll('.text-anim-down');
let elements4 = document.querySelectorAll('.num-anim');
for (let elm of elements2) {
    observer.observe(elm);
}
for (let elm of elements3) {
    observer.observe(elm);
}
for (let elm of elements4) {
    observer.observe(elm);
}

let elements5 = document.querySelectorAll('.bag-item-img');
for (let elm of elements5) {
    observer.observe(elm);
}


let elements6 = document.querySelectorAll('.foto-anim-small');
for (let elm of elements6) {
    observer.observe(elm);
}
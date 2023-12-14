const navBar = document.querySelector('.navbar');
const youBar = document.querySelector('.disappearing-ul');
const list2 = document.querySelector('.list2');
const list3 = document.querySelector('.list3');
const list4 = document.querySelectorAll('.list4');
const hovs = document.querySelectorAll('.list ul');
const disappearingP = document.querySelectorAll('.disappearing-p');
const lists = document.querySelector('.lists');
const rbot = document.querySelector('.rbot');
const rmain = document.querySelector('.rmain');
const yvid = document.querySelector('.yvid');
const disNone = document.querySelectorAll('.dis-none');

let visible = true;
navBar.addEventListener('click', ()=>{
    if(visible){
        list2.style.display = 'none';
        list3.style.display = 'none';
        list4.forEach(list=>{
            list.style.display = 'none';
        })
        disNone.forEach(list=>{
            list.style.display = 'block';
        })
        hovs.forEach(list=>{
            list.style.marginBottom = '40px';
            list.style.display = 'flex';
            list.style.flexDirection = 'column';
        })
        disappearingP.forEach(list=>{
            list.style.display = 'none';
        })
        lists.style.width = '6%';
        visible = false;
    }
    else{
        list2.style.display = '';
        list3.style.display = '';
        list4.forEach(list=>{
            list.style.display = '';
        })
        disNone.forEach(list=>{
            list.style.display = '';
        })
        hovs.forEach(list=>{
            list.style.marginBottom = '';
            list.style.display = '';
            list.style.flexDirection = '';
        })
        disappearingP.forEach(list=>{
            list.style.display = '';
        })
        lists.style.width = '';
        visible = true;
    }
    youBar.classList.toggle('appear');
    rbot.classList.toggle('transform');
    rmain.classList.toggle('width');
    rmain.classList.toggle('transform');
    yvid.classList.toggle('rows');
})
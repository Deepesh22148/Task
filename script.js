const openBtnIcon = '<i class="fa fa-arrow-circle-o-right icon-adjust" style="font-size:24px"></i>';
const closeBtnIcon = '<i class="fa fa-arrow-circle-o-left icon-adjust" style="font-size:24px"></i>';

const btn = document.querySelector('#bttn');
const optionBar = document.querySelector('#optionBar');
let isbtn = false;
btn.addEventListener('click',function(){
    if(!isbtn){
        optionBar.style.left = '0px';
        btn.innerHTML = closeBtnIcon;
        isbtn = true;
    }
    else{
        optionBar.style.left = '-300px';
        btn.innerHTML = openBtnIcon;
        isbtn = false;
    }
})
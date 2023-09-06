const btn = document.querySelector('.btn');
//btn.addEventListener('click',(e)=>{
    //e.preventDefault();
    //console.log('click');
    //document.querySelector("body").classList.add('bg-dark');
//})
btn.addEventListener('mouseover',(e)=>{
e.preventDefault();
document.querySelector('.name').style.color="blue";
document.querySelector('.email').style.color="blue";
})
btn.addEventListener('mouseout',(e)=>{
    document.querySelector('.name').style.color='black';
    document.querySelector('.email').style.color="black";
})
const myForm = document.querySelector('#my_form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg= document.querySelector('.msg');
const userlist = document.querySelector('#users');
 
myForm.addEventListener('submit',onSubmit);

  function onSubmit(e) {
    e.preventDefault();
   if(nameInput.value === '' || emailInput.value === ''){
    msg.innerHTML = 'Please enter a feild';
    setTimeout(()=>msg.remove(),3000);
   }
   else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    userlist.append(li);
    nameInput.value='';
    emailInput.value='';
   }
  }

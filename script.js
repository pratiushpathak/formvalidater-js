const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

//show input error message
function showError(input,message)
{
  const formControl=input.parentElement;
  formControl.className='form-control error';
  const small=formControl.querySelector('small');
  small.innerText=message;
 

}
//show success outline
function showSuccess(input)
{
  const formControl=input.parentElement;
  formControl.className='form-control success';

}
//check email
function isValidEmail(email){
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase())



}
//check rewuired fields
function checkRequired(inputArr)
{
  inputArr.forEach(function(input)
{
  if(input.value.trim()=='')
  {
    showError(input,`${input.id} is required`);
  }
  else
  {
    showSuccess(input);
  }

})

}


// event listeners
form.addEventListener('submit',function(e)
{
  e.preventDefault();
  checkRequired([username,email,password,password2]);
 
  
});
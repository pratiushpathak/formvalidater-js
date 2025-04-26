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


// event listeners
form.addEventListener('submit',function(e)
{
  e.preventDefault();
  if(username.value==='')
  {
   showError(username,'username is required');
  }
  else
  {
    showSuccess(username)
  }
  if(email.value==='')
    {
     showError(email,'email is required');
    }
    else if(!isValidEmail(email.value))

    {
      
      
     
        showError(email,'email is not valid');
     

    }
    else
    {
      showSuccess(email)
    }
    if(password.value==='')
      {
       showError(password,' password is required');
      }
      else
      {
        showSuccess(password)
      }
      if(password2.value==='')
        {
         showError(password2,'password is required');
        }
        else
        {
          showSuccess(password2)
        }

});
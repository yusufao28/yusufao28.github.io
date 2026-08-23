var form = document.querySelector('form');
form.onsubmit = function(event){

    let thisForm = this;

    var formData = new FormData(form);
    
    fetch("https://unilorinwaterquality.com.ng/mail_post.php",
    {
       body: formData,
       method: "post"
    }).then();

    thisForm.querySelector('.sent-message').classList.add('d-block');
    thisForm.querySelector('.sent-newline').classList.add('d-block');
    thisForm.reset(); 
    
    //Dont submit the form.
    return false; 
    
}
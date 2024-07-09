var typed = new Typed(".text", {
    strings: ["Front End Developer","Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});







// --------readmore-------

var i=0;
function show(){
  // alert("hello");
  if(!i){
    document.getElementById("moreText").style.
    display="inline";
    
    document.getElementById("show").innerHTML="Read Less"
    i=1;
  }

  else{
    document.getElementById("moreText").style.
    display="none";
    
    document.getElementById("show").innerHTML="Read More"
    i=0;
  }





  
}


var i=0;
function show1(){
  // alert("hello");
  if(!i){
    document.getElementById("moreText1").style.
    display="inline";
    
    document.getElementById("show1").innerHTML="Read Less"
    i=1;
  }

  else{
    document.getElementById("moreText1").style.
    display="none";
    
    document.getElementById("show1").innerHTML="Read More"
    i=0;
  }





  
}






var i=0;
function show2(){
  // alert("hello");
  if(!i){
    document.getElementById("moreText2").style.
    display="inline";
    
    document.getElementById("show2").innerHTML="Read Less"
    i=1;
  }

  else{
    document.getElementById("moreText2").style.
    display="none";
    
    document.getElementById("show2").innerHTML="Read More"
    i=0;
  }





  
}

// Disable form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


// --------MediaCapabilities----
function toggleMenu(){
	
	const menu = document.querySelector("#desktop")
	const icon = document.querySelector(".#menu-icon")
	menu.classList.toggle("open")
	icon.classList.toggle("open")
}



// -----------email-----
function emailSend(){

       var userName= document.getElementById("name").value;
       var email= document.getElementById("email").value;
       var subject= document.getElementById("subject").value;
       var area= document.getElementById("showt2").value;

       var messageBody = "Name" + userName + 
       "<br/> Email " + email + 
       "<br/> Subject " + subject + 
       "<br/> Area " + showt2 ; 



  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "kavingoutham2708@gmail.com",
    Password : "08246D799270FED2EB0720768E8197239F8E",
    To : 'kavingoutham2708@gmail.com',
    From : "kavingoutham2708@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message =>alert(message) 
   
  
);
}

 // if(message=='ok'){
    //   swal("Good job!", "Message Sent Successfully!", "success");
    // }
    // else{
    //   swal("Error!", "Please type the correct Mail Address!", "error");
    // }





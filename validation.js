
$(document).ready(function(){
    /* start contractor and customer login form  validation events */ 
    // email event in login form...
   let login_email_error=true;
   let login_pass_error=true;
   $("#login-email").focus(function(){
    $("#loginemailerror").hide();
   });
    $("#login-email").blur(function() { 
      let regex =  
      /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
      let dotcom=/.com$/; 
      if (regex.test($("#login-email").val()) && dotcom.test($("#login-email").val())) { 
          $("#loginemailerror").hide();
          login_email_error=false;
      } else { 
          $("#loginemailerror").show();
          login_email_error=true;
      }
    }); 
    // password event in login form..
    $("#login-password").focus(function(){
      $("#loginpassworderror").hide();
      
     });

    $("#login-password").blur(function(){
        let pass_regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(pass_regex.test($("#login-password").val()))
        {
         $("#loginpassworderror").hide();
         login_pass_error=false;
        }
        else{
         $("#loginpassworderror").show();
        }
      });
      $(".eye-icon").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var passwordInput = $("#login-password");
        if (passwordInput.attr("type") == "password") {
          passwordInput.attr("type", "text");
        } else {
          passwordInput.attr("type", "password");
        }
      });
})
// function Form_Submission()
// {
//   if(login)
//   confirm("e")
// }
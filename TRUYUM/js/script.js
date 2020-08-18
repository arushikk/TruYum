function validatef(){
        
        var title = document.myform.title;
        var ti_len = title.value.length;

     if( document.myform.title.value == "" ) {
            alert( "Title is required!" );
            document.myform.title.focus() ;
            return false;
         }
       else if (ti_len >= 65|| ti_len < 2)
        {
        alert("Title should have 2 to 65 characters");
       document.myform.title.focus();
       return false;
        }

if( document.myform.price.value == "" ) {
            alert( "Price is required!" );
            document.myform.price.focus() ;
            return false;
         }
         else if (isNaN(document.myform.price.value) ){
            alert( "Price has to be a number!" );
            document.myform.price.focus() ;
            return false;
         }

if( document.myform.dol.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm.dateOfLaunch.focus() ;
            return false;
         }

if( document.myform.Category.value == "-1" ) {
            alert( "Please provide category!" );
            return false;
         }

return true;
}



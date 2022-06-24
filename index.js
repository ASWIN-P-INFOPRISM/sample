function ajaxcall(){
    let name = document.getElementById("machine_name").value;
    $.ajax({
        url : '/page/route'+name, //this is a sample url
        //give the url to which this ajax request has to be made
        //the name is added to that url
        method : 'get',//'get' or 'post'
        success : ((returnValue)=>{
            //"returnValue" is a variable that has a json returned after doing the specified operations 
            //in the router. json result will have key : value pairs
            //then you can make changes in frontend with that json result(if you need it)
            //Here I have written a small updation to be made in the div
            document.getElementById('text').innerHTML = returnValue.full_name; 
            // returnValue is a json that has a key named "full_name". the value of that key,
            //is given to the div with id="text"
            
            
            //Now i think you have an idea of AJAX :)
        })
    })
}
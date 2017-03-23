var root = 'https://jsonplaceholder.typicode.com/posts/1';

$('#form').submit(function(ev){

    ev.preventDefault();

    $.ajax('localhost:80/mvc/form.php',{
        method: 'POST',
        data: {
            username:$('#username').val()
        },
        success: function(response){
            console.log("az");
            console.log(response);
        },
        error: function(err){
            console.log("b");
            console.log(err);
        }
    });
});

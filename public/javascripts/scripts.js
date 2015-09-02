/**
 * Created by kamiekehrwald on 9/2/15.
 */
$(document).ready(function(){

    $('form').submit('click', function(e){
        e.preventDefault();
        alert("working!");
        //var $this = $(this);
        console.log("stuff");


        var input = $(this).serializeArray()[0];
        console.log(input);
        console.log("about to ajax");

        $.ajax({
            url: '/students',
            type: 'POST',
            data: data
        }).done(function(response, textStatus, jqXHR){
            console.log('Success!');

            var html = template({ student: data });
            $this.after(html);


        }).fail(function( jqXHR, textStatus, errorThrown ) {
            console.log(jqXHR, textStatus, errorThrown);
        }).always(function(){
            console.log('Ajax Complete!');
        });
    })
});
$(document).ready( function() {

    $("#about-btn").click( function(event) {
        msgstr = $("#msg").html()
        msgstr = msgstr + "o"
        $("#msg").html(msgstr)
    });

        $(".ouch").click( function(event) {
               alert("You clicked me! ouch!");
    });

    $("p").hover(
        function() {
        $( this ).append( $( "<span> </span>" ) );
        }, function() {
        $( this ).find( "span:last" ).remove();
        }

    );

     $("p").hover(
        function() {
        $( this ).css( "color", 'white' );
        }, function() {
        $( this ).css( "color", 'grey' );}

    );



   	});

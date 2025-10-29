// $(document).ready(function () {
//     // $("button").click(function () {
//     //     $("#para").hide();
//     // });

//     // $("p").click(function () {
//     //     $("#para").hide();
//     // });

//     // $("p").click(function () {
//     //     $("p").hide();
//     // });

//     $("p").click(function () {
//         $(this).hide();
//     });
// });


//jQuery Selectors
$(document).ready(function () {
    $("button").click(function () {
        // $(".my-class").hide();
        // $(".my-class").css("color","blue");
        // $("*").css("color","blue");
        // $(this).css("color","blue");

        // $("p.my-class").css("color","blue");
        // $("p:first").css("color","blue");
        // $("div p:first").css("color","blue");
        $("p:last").css("color","blue");
    });
});
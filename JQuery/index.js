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
// $(document).ready(function () {
//     $("button").click(function () {
//         // $(".my-class").hide();
//         // $(".my-class").css("color","blue");
//         // $("*").css("color","blue");
//         // $(this).css("color","blue");

//         // $("p.my-class").css("color","blue");
//         // $("p:first").css("color","blue");
//         // $("div p:first").css("color","blue");
//         $("p:last").css("color","blue");
//     });
// });


//jQuery Event Methods
// $(document).ready(function () {
//     // $("button").click(function () {
//     //     console.log("single click on button")
//     // });

//     // $("div").dblclick(function () {
//     //     console.log("double click on button")
//     // });

//     // $("div").mouseenter(function () {
//     //     console.log("mouse enet on div")
//     //     // $("div").css("background-color","blue");
//     // });

//     // $("div").mouseleave(function () {
//     //     console.log("mouse leave on div")
//     //     // $("div").css("background-color","blue");
//     // });

//     // $("div").mousedown(function () {
//     //     console.log("mouse down on div")
//     //     // $("div").css("background-color","blue");
//     // });

//     $("div").hover(function () {
//         $("div").css("background-color", "blue");
//     },
//         function () {
//             $("div").css("background-color", "yellow");
//         });

//     $("input").focus(function () {
//         console.log("focus")
//         $("input").css("background-color", "red");
//     });
//     $("input").blur(function () {
//         console.log("blur")
//         $("input").css({ "border": "5px solid green", "background-color": "white" });
//     });


//     $("p").on({
//         mouseenter: function () {
//             $(this).css("background-color", "lightgray");
//         },
//         mouseleave: function () {
//             $(this).css("background-color", "lightblue");
//         },
//         click: function () {
//             $(this).css("background-color", "yellow");
//         }
//     });
// });


//jQuery hide show , toggle method
// $(document).ready(function () {
//     $("button").click(function () {
//         // $(".my-para").hide(5000);
//         // $(".my-para").hide("slow");
//         // $(".my-para").hide("fast");
//         // $(".my-para").hide(3000, () => {
//         //     // console.log("element is hide");
//         //     // $(".box").css("color","white")
//         //     $(".my-para").show(3000,function(){
//         //         console.log("hide,show complete")
//         //     });
//         // });

//         $(".my-para").toggle(2000,()=>{
//             console.log("operation done")
//         });
//     });
// });



// //jquery fadeIn fadeOut fadeToggle fadeto
// $(document).ready(function () {
//     $("button").click(function () {
//         // $(".my-para").fadeOut(3000, () => {
//         //     // $(".my-para").fadeIn(3000,()=>{
//         //     //     console.log("fadein out complete")
//         //     // });


//         // });
//         // $(".my-para").fadeToggle(3000);
//         $(".my-para").fadeTo(2000,0.3);
//     });
// });



//jquery methods
// slideDown()
// slideUp()
// slideToggle()
$(document).ready(function () {
    $("button").click(function () {
        // $(".box").slideUp(3000, () => {
        //     $(".box").slideDown(3000);
        // });
        $(".box").slideToggle(2000);
    });
});

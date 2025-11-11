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
// $(document).ready(function () {
//     $("button").click(function () {
//         // $(".box").slideUp(3000, () => {
//         //     $(".box").slideDown(3000);
//         // });
//         $(".box").slideToggle(2000);
//     });
// });




//jQuery Effects - Animation
// $(document).ready(function () {
//     // $("button").click(function () {
//     //     $("div").animate({ left: '250px' }, 3000, () => {
//     //         $("div").animate({ left: '0px' }, 3000, () => {
//     //             console.log("animation complete")
//     //         })
//     //     });
//     // });

//     // $("button").click(function () {
//     //     $("div").animate({
//     //         left: '250px',
//     //         opacity: '0.5',
//     //         height: '300px',
//     //         width: '300px'
//     //     }, 3000, () => {
//     //         $("div").animate({
//     //             left: '0px',
//     //             opacity: '1',
//     //             height: '150px',
//     //             width: '150px'
//     //         }, 3000)
//     //     });
//     // });
//     // $("button").click(function () {
//     //     $("div").animate({
//     //         height: '-=10px',
//     //         width: '-=10px'
//     //     });
//     // });

//     // $("button").click(function () {
//     //     $("div").animate({
//     //         height: 'toggle'
//     //     });
//     // });


//     // $("button").click(function () {
//     //     $("div").animate({ height: '300px' }, "slow");
//     //     $("div").animate({ width: '300px' }, "slow");
//     //     $("div").animate({ height: '100px' }, "slow");
//     //     $("div").animate({ width: '100px' }, "slow");
//     // });

//     // $(".start").click(function () {
//     //     $("div").animate({ left: '250px' }, 3000);
//     //     $("div").animate({ fontSize: '80px' }, 3000);
//     // });
//     // $(".stop").click(function () {
//     //     $("div").stop(false,true);
//     // });



// });




// //jquery chaining
// $(document).ready(function () {
//     $(".start").click(function (e) {
//         $("p").css("color", "red").fadeTo(2000,"0.5").slideUp(2000).slideDown(2000);
//     });
// });


// Get Content - text(), html(), and val()
// $(document).ready(function () {
//     $(".start").click(function () {
//         // let text = $("div").text()
//         // console.log(text)
//         // let text = $("div").html()
//         // console.log(text)
//         // let text = $("input").val()
//         // console.log(text)
//         // let text = $("a").attr("title")
//         // console.log(text)

//         // $("#para").text("hello brother");
//         // $("div").html("<b>hello brother<b>");

//         // let c = 12 + Number($("input").val());
//         // $("#para").text(`addition = ${c}`);
//         // $("input").val("set any value")

//         // $("a").attr("title","new title")
//         // $("a").attr("class","new-class")

//         // $("#para").text((i, original) => {
//         //     return original + " this is new text " + i;
//         // });


//         // $("p").text((i, original) => {
//         //     let arr = ["apple", "savfal","banana","mango"]
//         //     return original + arr[i];
//         // });
//     });
// });

//jQuery - Add Elements
// append() - Inserts content at the end of the selected elements
// prepend() - Inserts content at the beginning of the selected elements
// after() - Inserts content after the selected elements
// before() - Inserts content before the selected elements
// $(document).ready(function () {
//     $(".start").click(function (e) {
//         //  $("div").append("hello div");
//         //  $("div").prepend("hello div");
//         //  $("div").after("hello div");
//         // $("div").before("hello div");

//         // let btn = document.createElement("button");
//         // btn.innerText="click me !"

//         // let btn = "<button>click me !</button>";

//         // let btn = $("<button></button>").text("click me!");

//         // $("div").append(btn);

//         // let btn = $("<button></button>").text("click me!");

//         // $("div").append(btn, "<p>my para</p>");

//         // $("h1").remove();
//         // $("div").remove();
//         $("div").empty();
//         // $("div").empty().text("hello").css("background-color","pink").slideUp(2000);

//     });
// });

// Get and Set CSS Classes
// $(document).ready(function () {
//     $(".start").click(function (e) {

//         // $("#para").addClass("new-class");
//         // $("#para").addClass("my-class");
//         // $("a").removeClass("ancher-class");

//         $("#para").toggleClass("new-class");
//     });
// });



// jQuery - css() Method
// $(document).ready(function () {
//     $(".start").click(function (e) {
//         // let text = $("#para").css("color");
//         // console.log(typeof text);

//         // let text = $("#para").css("font-size");
//         // console.log(text);

//         // $("#para").css("font-size", "50px");
//         // $("#para").css("color", "green");
//         $("#para").css({
//             "color": "green",
//             "background-color": "black",
//             "font-size": "50px"
//         });

//     });
// });


// jQuery Dimension Methods
// width()
// height()
// innerWidth()
// innerHeight()
// outerWidth()
// outerHeight()
$(document).ready(function () {
    $(".stop").click(function (e) {
        // res = $(".box").width();
        // res = $(".box").height();
        // res = $(".box").innerHeight();
        // res = $(".box").innerWidth();
        // res = $(".box").outerWidth();
        res = $(".box").outerWidth(true);


        console.log(res);
    });
});
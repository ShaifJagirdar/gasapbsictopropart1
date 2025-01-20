document.addEventListener("DOMContentLoaded",function(){

    // gsap.to("#box1",{
    //     duration: 2,
    //     delay: 1,
    //     x:  1000,
    //     rotate: 360,
    //     borderRadius: "50%",
    //     width: "70px",
    //     height: "70px",
    //     backgroundColor: "#fff",
    //     marginTop: "70px",
    //     repeat: -1,
    //     yoyo: true

    // });
    
    // gsap.to("#box2",{
    //     duration: 2,
    //     delay: 3,
    //     x: 1000,
    //     rotate: 90,
    //     borderRadius: "20%",
    //     marginTop: "150px"
    // })

    // gsap.to("#box3",{
    //     duration: 2,
    //     delay: 5,
    //     x: 1000,
    //     rotate: 180,
    //     borderRadius: "30%",
    //     marginTop: "-70px"
    // })
    // gsap.from("#box1",{
    //     duration: 2,
    //     delay: 7,
    //     x:  1000,
    //     rotate: 360,
    //     borderRadius: "0%",
    //     width: "300px",
    //     height: "300px",
    //     backgroundColor: "Red",
    //     marginTop: "0px"
    // })

    // gsap.from("h1",{
    //     duration: 0.2,
    //     delay: 1,
    //     opacity: 0,
    //     y: 100,
    //     stagger: 0.5
    // })

    var tl = gsap.timeline();

    // tl.to("#box1",{
    //     duration: 2,
    //     x: 1000,
    //     rotate: 360,
    //     borderRadius: "50%",
    //     width: "70px",
    //     height: "70px",
    //     backgroundColor: "#fff",
    // })
    // tl.to("#box2",{
    //     duration: 2,
    //     rotate: 90,
    //     x: 1000,
    //     borderRadius: "10%",
    //     marginTop: "150px",
    //     backgroundColor: "green"
    // })
    // tl.to("#box3",{
    //     duration: 2,
    //     x: 1000,
    //     rotate: 180,
    //     borderRadius: "50%",
    //     marginTop: "-80px",
    //     backgroundColor: "blue",
    //     repeat: 2,
    //     yoyo: true
    // })

    tl.from(".log",{
        duration: 0.5,
        y: -30,
        opacity: 0,
    })

    tl.from("h4",{
        duration:0.1,
        y: -30,
        opacity: 0,
        stagger: 1
    })

});
    
window.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();



    ScrollTrigger.scrollerProxy("body", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });





    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log(scrollTop);


        // $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)







	    if(scrollTop >= 50){

            
        }


        if(scrollTop >= 50){

            
        }


        if(scrollTop >= 70){

            
        }


        if(scrollTop >= 70){

            
        }


        if(scrollTop >= 90){

            
        }


        if(scrollTop >= 90){

            
        }


        if(scrollTop >= 300){

            $('.s2_img').addClass('on');
        }


        if(scrollTop >= 700){

            $('.s2_tit').addClass('on');
        }


        if(scrollTop >= 800){

            $('.s2_ro').addClass('on');
        }


        if(scrollTop >= 300){

            $('.s2_t1').addClass('on');
        }


        if(scrollTop >= 400){

            $('.s2_t2').addClass('on');
        }


        if(scrollTop >= 500){

            $('.s2_t3').addClass('on');
        }


        if(scrollTop >= 600){

            $('.s2_t4').addClass('on');
        }


        if(scrollTop >= 700){

            $('.s2_s1').addClass('on');
        }


        if(scrollTop >= 750){

            $('.s2_s2').addClass('on');
        }


        if(scrollTop >= 800){

            $('.s2_s3').addClass('on');
        }


        if(scrollTop >= 850){

            $('.s2_s4').addClass('on');
        }


        if(scrollTop >= 1350){

            $('.s3_tl1').addClass('on');
        }


        if(scrollTop >= 1400){

            $('.s3_tl2').addClass('on');
        }


        if(scrollTop >= 1850){

            $('.s3_w1').addClass('on');
        }


        if(scrollTop >= 2000){

            $('.s3_w2').addClass('on');
        }


        if(scrollTop >= 2800){

            $('.s3_w3').addClass('on');
        }


        if(scrollTop >= 3000){

            $('.s3_tit').addClass('on');
        }


        if(scrollTop >= 3900){

            $('.s3_w4').addClass('on');
        }


        if(scrollTop >= 4200){

            $('.s3_w5').addClass('on');
        }


        if(scrollTop >= 4700){

            $('.s3_w6').addClass('on');
        }


        if(scrollTop >= 5100){

            $('.s4_tit').addClass('on');
        }


        if(scrollTop >= 5200){

            $('.s4_tel').addClass('on');
        }


        if(scrollTop >= 5300){

            $('.s4_mail').addClass('on');
        }


        if(scrollTop >= 5400){

            $('.s4_tool').addClass('on');
        }









        







    });




    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });





    (function () {

        $('.s1_tit1').addClass('on');

        $('.s1_tit2').addClass('on');

        $('.s1_tit3').addClass('on');

        $('.s1_tit4').addClass('on');

        $('.s1_tit5').addClass('on');

        $('.s1_tit6').addClass('on');

        

        setTimeout(()=>{
            $('.main').addClass('on');
        },1000)
	$('.logo').addClass('on')
 	$('.bg_top').addClass('on');
	 $('.main_title1').addClass('on');
	 $('.main_title2').addClass('on');
	$('.sub_title').addClass('on');
/*

        gsap.to(".box2", {
            x: 400,
            scrollTrigger: {
                trigger: ".box2",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: false,
                id: "scrub"
            }
        });

        gsap.to(".box3", {
            x: 400,
            rotation: 360,
            scrollTrigger: {
                trigger: ".box3",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: true,
                id: "scrub"
            }
        });*/

    })();



})

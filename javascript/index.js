$(function(){

    menu = gsap.fromTo('.menu_area .depth1 > li',{
        opacity:0,
        yPercent:5,

    },{
        opacity:1,
        yPercent:0,

        stagger:0.4,
        duration:1
    })

    menu.pause();


    $('.logo_area .icon_menu').click(function(e){
        e.preventDefault();
        $('.menu_area').addClass('on');

        menu.restart();

    })

    $('.menu_area .icon_close').click(function(e){
        e.preventDefault();
        $('.menu_area').removeClass('on');
    });


    $(window).on('mousewheel',function(e){
        var wheel = e.originalEvent.wheelDelta;
        
        var curr = $(window).scrollTop();
        // console.log(curr)

        if(curr > 100){

        
        if(wheel>0){
        //스크롤 올릴때
            $('.logo_area').removeClass('hide');
            $('.logo_area').addClass('show');
            $('.icon_menu .burger').addClass('black');

        } else {
        //스크롤 내릴때
            $('.logo_area').addClass('hide');
            $('.icon_menu .burger').removeClass('show');
            $('.icon_menu .burger').removeClass('black');

        }
    }
    });

    $(window).scroll(function(){

        curr = $(this).scrollTop();

        if(curr > 70){
            $('.logo_area').addClass('show');
        }else{
            $('.logo_area').removeClass('show');
            $('.icon_menu .burger').removeClass('black');
        }
        
    });


    //첫 시작하자마자 실행하는것


    gsap.to(".sc_intro h2 .over_txt span",{
        delay:0.5,
        //시작지점 딜레이
        y:0,
        stagger:0.3,
        duration:1.2,
        //하나 실행 후 이다음꺼 실행 
    })

    gsap.to(".sc_intro .sub_title span",{
        delay:0.9,
        //시작지점 딜레이
        y:0,
        duration:1.2,
    })

    gsap.fromTo(".sc_intro .btn",{
        opacity:0,
        y:100+'%',
    },{
        delay:0.6,
        opacity:1,
        duration:1,
        //모션이 완성되는 시간
        y:0
    })

    gsap.fromTo(".sc_intro .desc",{
        opacity:0,
        y:5+'%',
        //=yPercent: -5 라고 표기해도 됨, !!! 
    },{
        delay:0.6,
        opacity:1,
        duration:1,
        //모션이 완성되는 시간
        y:0
    })

    gsap.fromTo(".sc_intro .bg_box",{
        scale:1.1,
    },{
        delay:1.3,
        scale:1,
        duration:0.5,
    })




// 스크롤 모션
gsap.to(".item01 img",{
    scrollTrigger:{
        trigger: ".item01", // 기준점
        // markers:true,
        start: "top 50%", //앞: 기준의 기준, 뒤는 브라우저의 기준
        end: "120% bottom",
        scrub: 1,
    },
    scale:1
})

gsap.to(".item02 img",{
    scrollTrigger:{
        trigger: ".item02", // 기준점
        // markers:true,
        start: "top 50%", //앞: 기준의 기준, 뒤는 브라우저의 기준
        end: "120% bottom",
        scrub: 1,
    },
    scale:1
})

gsap.to(".item03 img",{
    scrollTrigger:{
        trigger: ".item03", // 기준점
        // markers:true,
        start: "top 50%", //앞: 기준의 기준, 뒤는 브라우저의 기준
        end: "120% bottom",
        scrub: 1,
    },
    scale:1
})



}) //지우면 안돼~~~~~~~~~~!!!!!!!


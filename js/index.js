// var swiper = new Swiper(".mySwiper .pop2", {
//     direction: "vertical",
//     slidesPerView: 1,
//     spaceBetween: 30,
//     mousewheel: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// $(document).ready(function(){
// $('.pop2').on('mousewheel DOMMouseScroll',function(event){
//     let E = event.originalEvent;
//         let delta = 0;
//         if(E.detail){
//             delta = E.detail * -40;
//         }else{
//             delta = E.wheelDelta;
//         }
    // if(delta>0){
        //마우스 휠을 올렸을 때 
        // alert('올림')
        // count --;
        // if(count>-15){
        //     count = 0;
        // }

    // }else{
        //마우스 휠을 내렸을 때 
        // alert('내림')
        // count ++;
        // if(count>15){
        //     count = 15;
        // }
        // $('.pop2').children('.train').children('li').css('trans')
    // }
// })

$(function(){

    let count = 0;
    let count2 = 1;
    let slide = $('.pop2').children('ul').height();
    let li = $('.pop2').children('ul').children('li')
    let move = li.height();
    let move1 = li.children('ul').eq(count);
    let navi = $('pop2 .navi').height();
    let idx=li.children('ul').index();
    let sliderState = false;
    
    $('.pop2').on('mousewheel DOMMouseScroll',function(event){

        let E = event.originalEvent;
        let delta = 0;
        if(E.detail){
            delta = E.detail * -40;
        }else{
            delta = E.wheelDelta;
        }

        if(delta>0){
            count--;
            if(count<0){
                count=0;
            }
            
            $('.pop2').children('ul').css('transform','translateY('+-(move*count)+'px)');
            // alert('fg')
            count2--;
            if(count2<1){
                count2=1;
            }
            $('.pop2 .navi').css('height',60*count2+`px`)
            
            
        }else{
            //마우스 휠을 내렸을 때 
            // let posTop = $(this).next().offset().top;
            // $('html,body').stop().animate({scrollTop:posTop},800)
            count++;
            if(count>4){
                count=4;
            }
            $('.pop2').children('ul').css('transform','translateY('+-(move*count)+'px)');
            // alert('fg')

            count2++
            if(count2>5){count2=5;}
            // console.log(count)
            $('.pop2 .navi').css('height',60*count2+`px`)
            
        }
        if(count==0 || count==4){
            sliderState = true;
        }else{
            sliderState = false;
        }

        console.log(count);
        console.log(sliderState);

        return sliderState;
    });

// $(window).scroll(function(){
//     let scrolltop = $(window).scrollTop()
//     console.log(scrolltop)
//     console.log(window.pageYOffset)
// })


$(window).scroll(function(){
    let windowHight = window.innerHeight*0.6
    let scrolltop = $(window).scrollTop();
    let windowHight1 = window.innerHeight*0.8

    $(".skills,.pop1,.pop2,.pop3 ,.black2 ").each(function(){
        if(scrolltop+windowHight>$(this).offset().top){
            $(this).addClass("on")
            $('.skills>li').each(function(){
                setTimeout(function(){
                    $('.skills>li:nth-of-type(1) .bar,.skills>li:nth-of-type(2) .bar,.skills>li:nth-of-type(3) .bar,.skills>li:nth-of-type(4) .bar,.skills>li:nth-of-type(5) .bar,.skills>li:nth-of-type(6) .bar,.skills>li:nth-of-type(7) .bar,.skills>li:nth-of-type(8) .bar').addClass('on')
                },300)
            })
        }else{
            $(this).removeClass("on")
        }
    })
    
    $("#fifthP h2.sb").each(function(){
        if(scrolltop+windowHight1>$(this).offset().top){
            $(this).addClass("on")
        }else{
                $(this).removeClass("on")
            }
        $("#sixthP .black, #sixthP .title").each(function(){
        if(scrolltop+windowHight>$(this).offset().top){
            $(this).addClass("on")
        }else{
                $(this).removeClass("on")
            }
            
})
})
// let status = "멈춤";
//     $('#fifthP> .button>p').click(function(){
//         if (status == "멈춤") {
//             $('.ex').addClass('on');
//             status = "나타남";
//         } else {
//             $('.ex').removeClass('on');
//             status = "멈춤";
//         }
//     });

$('#fifthP> .button>p').click(function(){
    $('#redesign').addClass('on');
    $('.ex').addClass('on');
    // $('html').scrollTop(0);
})
$('.ex img').click(function(){
    $('#redesign').removeClass('on');
    $('.ex').removeClass('on');
    return false;
})
// $("#forthP .scrollTop").click(function(event){         

//     event.preventDefault();

//     $('html,body').animate({scrollTop:$('#box').offset().top}, 500);

// });
$('#redesign .scrollT>a>img').click(function(){
    $('#redesign').scrollTop(0);
})

    $('.box1').click(function(){
        let pop1 = $('.pop1').offset().top;
        
        let pop1H = $('.pop1').height();
        console.log(pop1H)
        let transP1= pop1 - pop1H;
        
        console.log(pop1)
        window.scrollTo(0,transP1)
        
        if(window.pageYOffset == 2075){
            $('.pop1').addClass('on')
        }

    })
    $('.box1').click(function(){
        $('.pop1').addClass('on')
    })

    $('.box2').click(function(){
        let pop2 = $('.pop2').offset().top;
        let pop2H = $('.pop2').height();
        let transP2 = pop2 - pop2H;
        window.scrollTo(0,transP2);
    })

    $('.box3').click(function(){
        let pop3 = $('.pop3').offset().top;
        let pop3H = $('.pop3').height()/2;
        let transP3 = pop3 - pop3H;
        window.scrollTo(0,transP3);
        console.log(pop3)
    })

$(window).scroll(function(){
    let scrolltop = $(window).scrollTop()
    // console.log(scrolltop)
    // console.log(window.pageYOffset)
    
})

let slide2 = $('.pop3').children('ul').height();
    let li2 = $('.pop3').children('ul').children('li')
    let move2 = li2.height();
    let move12 = li2.children('ul').eq(count);

    // console.log(move12)
    // console.log(slide2)

    $('.pop3').on('mousewheel DOMMouseScroll',function(event){
        let E = event.originalEvent;
        let delta = 0;
        if(E.detail){
            delta = E.detail * -40;
        }else{
            delta = E.wheelDelta;
        }

        if(delta>0){
            count--;
            if(count<0){
                count=0;
            }
                
            $('.pop3').children('ul').css('transform','translateY('+-(move2*count)+'px)');
            // alert('fg')
            count2--
            if(count2<1){count2=1}
            // console.log(count)
            $('.pop3 .navi').css('height',200*count2+`px`)
        }else{
            //마우스 휠을 내렸을 때 
            // let posTop = $(this).next().offset().top;
            // $('html,body').stop().animate({scrollTop:posTop},800)
            count++;
            if(count>1){
                count=1;
            }
                
            $('.pop3').children('ul').css('transform','translateY('+-(move2*count)+'px)');
            // alert('fg')
            
            count2++
            if(count2>2){count2=2}
            // console.log(count)
            $('.pop3 .navi').css('height',200*count2+`px`)
        }
        if(count==0 || count==1){
            sliderState = true;
        }else{
            sliderState = false;
        }
        console.log(count);
        console.log(sliderState);

        return sliderState;
})
})

    let li2 = $('.banner').children('ul').children('li')
    let move2 = li2.height();
    // let move3 = li2.children('ul').eq(count);

$('.banner').on('mousewheel DOMMouseScroll',function(event){

    let E = event.originalEvent;
    let delta = 0;
    if(E.detail){
        delta = E.detail * -40;
    }else{
        delta = E.wheelDelta;
    }

    if(delta>0){
        count--;
        if(count<0){
            count=0;
        }
        
        $('.banner').children('ul').css('transform','translateY('+-(move2*count)+'px)');
        // alert('fg')
        activeNavi(count);
        
        
    }else{
        //마우스 휠을 내렸을 때 
        // let posTop = $(this).next().offset().top;
        // $('html,body').stop().animate({scrollTop:posTop},800)
        count++;
        if(count>7){
            count=7;
        }
        $('.banner').children('ul').css('transform','translateY('+-(move2*count)+'px)');
        // alert('fg')
        activeNavi(count);
    }
    
    function activeNavi(slideIdx){
        //네비활성화 기능
        $('.bannerN>li').removeClass('on');
        $('.bannerN>li').eq(slideIdx).addClass('on');
    }
    if(count==0 || count==7){
        sliderState = true;
    }else{
        sliderState = false;
    }
    
    function activeNavi(slideIdx){
        $('.bannerN>li').removeClass('on');
        $('.bannerN>li').eq(slideIdx).addClass('on');
    }
    console.log(count);
    console.log(sliderState);

    return sliderState;
});
// $(window).scroll(function(){
//     let scrolltop = Math.round($(window).scrollTop())
//     console.log(scrolltop)
// })


let p1 = $('.p1').height();
let p2 = $('.p2').height();
let p3 = $('.p3').height();
console.log(p1)
console.log(p2)
console.log(p3)

$('.draw svg path').each(function(){
    let pathLength= $(this).get(0).getTotalLength();
    console.log('각 패스의 길이:'+pathLength);

    $(this).css('stroke-dasharray',pathLength);
    $(this).css('stroke-dashoffset',pathLength);
    let _this = $(this);

        setTimeout(function(){
            _this.css('transition','stroke-dashoffset 2s ease 0s,fill 1s ease 0s');
            _this.css('stroke-dashoffset',0);
            // _this.css('fill','salmon');

        },500)
        // setTimeout(function(){
        //     _this.css('fill','black');
        // },1500)
});

    let bg_path_length = $('.draw svg path').get(0).getTotalLength();
    console.log(bg_path_length)
    $('.bg_path').css('stroke-dasharray',bg_path_length);
    $('.bg_path').css('stroke-dashoffset',bg_path_length);


$(window).scroll(function(){
    let currentTop = $(window).scrollTop();
    let docHeight = $('#thirdP').height();
    let winHeight = window.innerHeight;
    let percent =  currentTop/(docHeight-winHeight)*100;
    console.log('현재 전체문서대비 '+percent+'% 만큼 스크롤 내리셨어요')
    $('.bg_path').css("stroke-dashoffset",bg_path_length-(bg_path_length*percent/500))
})


$('.contentsWrap').on('mousewheel DOMMouseScroll',function(event){
    let E = event.originalEvent;
    let delta = 0;
    if(E.detail){
        delta = E.detail * -40;
    }else{
        delta = E.wheelDelta;
    }
    $('html,body').clearQueue();
    if(delta>0){
        //마우스 휠을 올렸을 때 
       
    }else{
        //마우스 휠을 내렸을 때 
        let posTop = $(this).next().offset().top;
        
        $('html,body').stop().animate({scrollTop:posTop},800)
    }

});

$('.one,.two,.three,.four,.five,.six,.seven,.eight').mouseover(function(){
    $('.ex0,.ex1,.ex2,.ex3,.ex4,.ex5,.ex6,.ex7').addClass('on')
})
$('.one,.two,.three,.four,.five,.six,.seven,.eight').mouseout(function(){
    $('.ex0,.ex1,.ex2,.ex3,.ex4,.ex5,.ex6,.ex7').removeClass('on')
})

$(document).mousemove(function(e){
    let posX = e.pageX;
    let posY = e.pageY;
    $('.cursor').css('display','block')
    $('.cursor').css('left',posX-15).css('top',posY-15);
})
})
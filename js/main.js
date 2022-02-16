$(document).ready(function(){
    // fullpage
    $('#fullpage').fullpage({
        anchors:['intro','profile','web','edit','contact'],
        sectionsColor:['#000','#000','#000','#000','#000'],
        // 현재 섹션이 나타난 후(활성화 된 후, 열린 후)
        menu:"#myMenu",
        // anchorLink : fullpage에서 사용하는 앵커 연결하라는 매개변수
        // index : fullpage에서 사용하는 .section의 인덱스번호, 1부터 시작함.
        afterLoad:function(anchorLink, index){
            $('.intro .intro_title ul li img').removeClass('active');
            $('.intro .intro_title ul .center_ani').removeClass('active');
            $('.profile h1').removeClass('active');
            $('.profile .box > div').removeClass('active');
            $('.web h1').removeClass('active');
            $('.web .swiper').removeClass('active');
            $('.edit h1').removeClass('active');
            $('.edit .gallery').removeClass('active');
            $('.contact h1').removeClass('active');
            $('.contact form').removeClass('active');
            // 만약 활성화된 section이 두번째 section이면
            if(index==1){
                $('.intro .intro_title ul li img').addClass('active');
                $('.intro .intro_title ul .center_ani').addClass('active');
               
                //skillbar길이 0
                $('.skill_value').each(function(index, el) {
                    thisVal = $(this).text();
                    $(this).parent('.skill_view').animate({width: 0},2000)
                });
            }else if (index==2){
                // 자식객체 애니메이션
                $('.profile h1').addClass('active');
                $('.profile .box > div').addClass('active');
                //skillbar 실행
                $('.skill_value').each(function(index, el) {
                    thisVal = $(this).text();
                    $(this).parent('.skill_view').delay(1000).animate({width: thisVal},2000)
                });
            }else if (index==3){
                // 자식객체 애니메이션
                $('.web h1').addClass('active');
                $('.web .swiper').addClass('active');
                //skillbar길이 0
                $('.skill_value').each(function(index, el) {
                    thisVal = $(this).text();
                    $(this).parent('.skill_view').animate({width: 0},2000)
                });
            }else if (index==4){
                // 자식객체 애니메이션
                $('.edit h1').addClass('active');
                $('.edit .gallery').addClass('active');
                //skillbar길이 0
                $('.skill_value').each(function(index, el) {
                    thisVal = $(this).text();
                    $(this).parent('.skill_view').animate({width: 0},2000)
                });
            }else{
                // 자식객체 애니메이션
                $('.contact h1').addClass('active');
                $('.contact form').addClass('active');
                //skillbar길이 0
                $('.skill_value').each(function(index, el) {
                    thisVal = $(this).text();
                    $(this).parent('.skill_view').animate({width: 0},2000)
                });
            }
        }
    });
    // 스킬바
    // $(window).on('load',function() {
    //     $('.skill_value').each(function(index, el) {
    //         thisVal = $(this).text();
    //         $(this).parent('.skill_view').animate({width: thisVal},2000)
    //     });
    // });
    
    // 스와이퍼 슬라이드 
    var swiper = new Swiper('.swiper',{
        loop:true,
        // 내비게이션 화살표들
        navigation: {
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
        }
    });
    // 에디토리얼 갤러리
    $('.big_img ul li').hide();
    $('.big_img ul li').eq(0).show();
    $('.thum_img ul li').click(function(){
        var idx=$(this).index();
        $('.big_img ul li').hide();
        $('.big_img ul li').eq(idx).fadeIn();
    });
});
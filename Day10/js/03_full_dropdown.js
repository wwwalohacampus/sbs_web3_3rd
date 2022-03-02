
// 문서 준비 이벤트
$(function () {

    let status = 'off'

    // 메인 메뉴 - 마우스 올렸을 때, 이벤트
    $('.mainmenu').on('mouseover', function() {
        let index = $(this).index()
        let no = index+1
        $(this).addClass('active')
        
        if( status == 'on' ){
            $('.submenu').css({'transition' : 'none'});
        } 
        else {
            $('.submenu').css({'transition' : 'height 0.4s'});
        } 
        $('.submenu:nth-of-type(' + no + ')').addClass('active')
      
        status = 'on'
    })
    
    $('.submenu').on('mouseover', function() {
        $(this).addClass('active')
        status = 'on'
    })
    
    // 메인 메뉴 - 마우스 벗어날 때, 이벤트
    $('.mainmenu').on('mouseout', function() {
        $(this).removeClass('active')
        $('.submenu').removeClass('active')

    })
    
    $('.submenu').on('mouseout', function() {
        $(this).removeClass('active')
        status = 'off'
    })
    


})
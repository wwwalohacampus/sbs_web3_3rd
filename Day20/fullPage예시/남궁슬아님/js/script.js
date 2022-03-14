

$(function() {


    // gnb 에 마우스 호버 시
    $('.gnb').on('mouseover', function() {
        $('.sub-nav').slideDown()
        submenu = true
    })

    // 서브메뉴에서 마우스 벗어날 때
    $('header').on('mouseleave', function() {
        $('.sub-nav').slideUp()
    })


})

$(function() {

    /* 
        스크롤의 방향 감지
        - 이전 스크롤 위치
        - 현재 스크롤 위치
        - 이동 크기
        - 최소 지점 (left)
        - 최대 지점 (left)
    */
    let prev = $(this).scrollTop            // 이전 스크롤 위치
    let move = 100                           // 텍스트 이동 크기
    let leftMin = -1200                     // 왼쪽 최대 지점
    let leftMax = 1200                      // 오른쪽 최대 지점

    // 스크롤 이벤트
    $(window).on('scroll', function() {
        let now = $(this).scrollTop()       // 현재 스크롤 위치

        // 따라 다니는 플로팅 버튼
        $('.floating').stop().animate({'bottom': -now+15}, 300)

        // 스크롤 아래로 
        if( now > prev ) {
            $('header').slideUp()
        }
        // 스크롤 위로 
        else {
            $('header').slideDown()
        }


        // scroll-title 인터렉션
        let titleOffset = $('.scroll-title').offset()
        let left = titleOffset.left

        if( now > prev && left > leftMin && now > 0 && now < 1000 ) {
            $('.scroll-title').animate({'left' : left-= move}, 5)
        } else if( now < prev && left < leftMax && now < 1000 ) {
            $('.scroll-title').animate({'left' : left+= move}, 5)
        }

        prev = now
    })

    // 플로팅 버튼 클릭 이벤트
    $('.floating').on('click', function() {

        // 스크롤 맨 위로 이동
        $('html').animate({'scroll-top' : 0}, 1000)
    })

})
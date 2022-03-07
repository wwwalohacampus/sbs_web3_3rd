

// 슬라이드 순서 번호
let slideIndex = 1;

// 문서 준비 이벤트
$(function() {

    // 슬라이드 쇼 실행
    showSlides( slideIndex )

})

// 슬라이드 함수(n)
// : n 번째 이미지를 보여준다.
function showSlides(n) {
    let slides = $('.mySlides')         // 각각의 슬라이드들
    let dots = $('.dot')                // 썸네일 이미지들
    let captionText = $('#caption')     // 이미지 제목

    // 맨 마지막에 도달
    // - 슬라이드 번호를 1 번으로
    // sldies/length  : 슬라이드 개수
    if( n > slides.length ) {
        slideIndex = 1
    }

    // 맨 앞에 도달
    // - 슬라이드 번호를 마지막으로
    if( n < 1 ) {
        slideIndex = slides.length
    }

    // 모든 이미지를 숨김
    slides.css({'display' : 'none'})

    // 활성화된 썸네일을 비활성화
    dots.removeClass('active')

    // 선택한 번호의 슬라이드만 보여주기
    $( slides[slideIndex-1] ).css({'display' : 'block'})

    // 선택한 번호의 썸네일 활성화
    $( dots[slideIndex-1] ).addClass('active')

    // 이미지 제목 갱신
    // attr()   : 속성값을 가져오는 메서드
    captionText.text( $(dots[slideIndex-1]).attr('alt') )
}

// 썸네일 클릭
function slide(n) {
    slideIndex = n
    showSlides(slideIndex)
}

// 화살표 클릭
function move(n) {
    slideIndex += n
    showSlides(slideIndex)
}
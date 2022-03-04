
// 문서 준비 이벤트
$(function () {

    /* 
        * index : 0부터 시작 

        :eq(index)
        - 여러 개의 요소들 중에서 index 번째 요소를 선택

        :not('선택자')
        - 여러 개의 요소들 중에서 선택한 요소를 제외하여 선택

        :lt(index)
        - index 번째 요소 이전의 요소들을 선택

        :gt(index)
        - index 번째 요소 이후의 요소들을 선택

        :first
        - 첫번째 요소를 선택
        :last
        - 마지막 요소를 선택
        :even
        - 짝수 요소들을 선택
        :odd
        - 홀수 요소들을 선택

        .next()
        - 다음 요소를 선택
        .prev()
        - 이전 요소를 선택
        .end()
        - 마지막 요소를 선택

        선택요소.append('추가 요소')
        - 선택한 요소의 마지막 자식 요소로 추가

        선택요소.appendTo('부모 선택자')
        - 선택한 요소를 부모 선택자의 마지막 자식 요소로 추가

        .before()
        - 선택한 요소의 앞에 내용을 추가
        .after()
        - 선택한 요소의 뒤에 내용을 추가
        .prepend()
        - 선택한 요소의 첫 번째 자식요소로 추가
        
    */

    // 0. 첫번째 이미지를 제외한 나머지 이미지를 숨김
    //    (첫번째 이후의 요소들을 선택) - hide()
    $('#slide > div:gt(0)').hide()

    setInterval( function() {
        // 1. 5초 마다, 현재 사진을 fadeOut
        // 2.           다음 사진을 fadeIn
        // 3.           현재 사진을 마지막 요소로 추가

        // 슬라이드 박스의 첫 번째 자식요소         
        $('#slide > div:first').fadeOut(2000)

        $('#slide > div:first').next().fadeIn(2000)
        
        $('#slide > div:first').appendTo('#slide')

    }, 5000)

})

// .fadeOut(2000)   : 2000ms 동안 서서히 사라지게 하는 메소드
// .next()          : 선택한 요소의 다음 요소를 선택하는 메소드
// .fadeIn(2000)    : 2000ms 동안 서서히 나타나게 하는 메소드
// A.appendTo(B)    : A 를  부모요소(B)의 마지막 요소로 추가하는 메소드
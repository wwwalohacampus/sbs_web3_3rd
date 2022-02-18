
// 문서 준비 이벤트
// $(fucntion() {})
$(function() {
    // $('선택자').css('스타일속성', '속성값')

    $('#item1').css('color', 'hotpink')

    $('#item2 .inner').css('transform', 'rotate(45deg)')

    $('#item3 .inner').css('opacity', '0.5')

    // 여러 개의 스타일 속성을 지정할 때,
    /* 
        { 
            '스타일1' : '속성값1', 
            '스타일2' : '속성값2', 
            '스타일3' : '속성값3' 
        }
    */
    // 따옴표를 붙이면, 케밥 케이스 ('-' 을 사용한 명명규칙)
    $('#item4 .inner').css({
        'color' : 'hotpink',
        'font-size' : '50px',
        'border' : '1px solid blue',
        'width' : '400px',
        'height' : '400px',
        'line-height' : '400px'
    })

    // 따옴표를 안 붙이면, 카멜 케이스 (2번째 단어부터 첫글자 대문자)
    $('#item5 .inner').css({
        color : 'hotpink',
        fontSize : '50px',
        border : '1px solid blue',
        width : '400px',
        height : '400px',
        lineHeight : '400px'
    })


})
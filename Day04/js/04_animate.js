
// 문서 준비 이벤트 
$(function() {

    /* item1 */
    // hide 버튼 클릭 이벤트
    $('#item1 .hide').on('click', function() {
        // 박스
        $('#item1 .target-box').hide()
    })

    // show 버튼 클릭 이벤트
    $('#item1 .show').on('click', function() {
        // 박스
        $('#item1 .target-box').show()
    })

    /*
        hide( 인자1, 인자2 )
         
        * 인자1 : duration (시간) 
        - margin, padding, width, height, opacity 속성들을
          지정된 값에서 0으로, 지정시간(ms) 동안 애니메이션한다.
          그 이후에, display : none 변경한다.
          (1s = 1000ms)

        * 인자2 : function (함수)
        - 애니메이션이 완료되면 호출한 콜백 함수
        
    */

    // hide1000 버튼 클릭 이벤트
    $('#item1 .hide1000').on('click', function() {
        // 박스
        // 콜백함수 
        // - function() {}    
        // - () => {}
        $('#item1 .target-box').hide(1000, () => {
            alert('hide')
        })
    })

    // show1000 버튼 클릭 이벤트
    $('#item1 .show1000').on('click', function() {
        // 박스
        $('#item1 .target-box').show(1000, function() {
            alert('show')
        })
    })


    /* item2 */
    /*
        fadeXXX( 인자1, 인자2 )
        * 인자1 : duration (시간 : ms), ('slow', 'fast')
        * 인자2 : fucntion (애니메이션 후, 콜백함수)
        
        fadeXXX( 인자1, 인자2, 인자3 )
        * 인자1 : duration (시간 : ms), ('slow', 'fast')
        * 인자2 : easing (swing[default], linear)
        * 인자2 : fucntion (애니메이션 후, 콜백함수)
        
        fadeTo( 인자1, 인자2, 인자3 )
        * 인자1 : duration (시간 : ms), ('slow', 'fast')
        * 인자2 : opacity (불투명도 : 0.0 ~ 1)
        * 인자3 : fucntion (애니메이션 후, 콜백함수)
        * 
        fadeTo( 인자1, 인자2, 인자3, 인자4 )
        * 인자1 : duration (시간 : ms), ('slow', 'fast')
        * 인자2 : opacity (불투명도 : 0.0 ~ 1)
        * 인자3 : easing (swing[default], linear)
        * 인자4 : fucntion (애니메이션 후, 콜백함수)

    */
    // fadeIn 버튼 클릭 이벤트
    $('#item2 .fadeIn').on('click', function() {
        $('#item2 .target-box').fadeIn()
    })

    // fadeOut 버튼 클릭 이벤트
    $('#item2 .fadeOut').on('click', function() {
        $('#item2 .target-box').fadeOut()
    })

    // fadeToggle 버튼 클릭 이벤트
    $('#item2 .fadeToggle').on('click', function() {
        $('#item2 .target-box').fadeToggle()
    })

    // fadeTo 버튼 클릭 이벤트
    $('#item2 .fadeTo').on('click', function() {
        $('#item2 .target-box').fadeTo('slow', 0.2)
    })

    /* item3 */
    /* 
        slideXXX( 인자1, 인자2 )
        * 인자1 : duration (시간 : ms), ('slow', 'fast')
        * 인자2 : fucntion (애니메이션 후, 콜백함수)
        * 
        slideXXX( 인자1, 인자2 )
        * 인자1 : duration (시간 : ms), ('slow', 'fast')
        * 인자2 : easing (swing[default], linear)
        * 인자3 : fucntion (애니메이션 후, 콜백함수)
     */
    // slideUp 버튼 클릭 이벤트
    $('#item3 .slideUp').on('click', function() {
        $('#item3 .target-box').slideUp(1000)
    })

    // slideDown 버튼 클릭 이벤트
    $('#item3 .slideDown').on('click', function() {
        $('#item3 .target-box').slideDown(1000)
    })

    // slideToggle 버튼 클릭 이벤트
    $('#item3 .slideToggle').on('click', function() {
        $('#item3 .target-box').slideToggle(2000, 'linear', ()=> {
            alert('슬라이드')
        })
    })

    /* item4 */
    let item4Cliked = 'off' // aniamte 버튼 클릭 여부
    $('#item4 .animate').on('click', function() {

        if( item4Cliked == 'off' ){
            // .animate( '스타일', 시간 )
            $('#item4 .target-box').animate({
                'opacity' : '0.3',
                'width' : '400px',
            }, 3000)
            
            item4Cliked = 'on'
        }

        else {
            $('#item4 .target-box').animate({
                'opacity' : '1',
                'width' : '150px',
            }, 3000)
            
            item4Cliked = 'off'
        }
    })

    /* item5 */
    /* 
        .animate() 메서드에는 적용할 수 있는 스타일 속성이 제한되어있다.
        원하는 스타일 지정하여 애니메이션을 적용하는 방법
        1. 이벤트 정의 
            ex. click 이벤트
        2. 애니메이션 적용될 요소에 'active' 라는 클래스 추가/삭제
            - toggleClass('active')
        3. CSS 에서 .active 에 애니메이션 적용할 스타일 속성

    */
    $('#item5 .animate').on('click', function() {
        $('#item5 .target-box').toggleClass('active')

    })


})
import $ from 'jquery';
import {Link } from 'react-router-dom';
function Menu(){
    return(
        <>
            <div class="article_wrapper">
                <div class="article_inner">
                    <ul class="">
                        <li><a href="#" data-id="1">소파</a>
                            <div class="inner_list">1</div>
                        </li>
                        <li><a href="#" data-id="2" >바디필로우</a>
                            <div class="inner_list">2</div>
                        </li>
                        <li><a href="#"data-id="3" >리빙</a>
                            <div class="inner_list">3</div>
                        </li>
                        <li><a href="#"data-id="4" >캐릭터</a>
                            <div class="inner_list">4</div>
                        </li>
                        <li><a href="#"data-id="5" >스폐셜 에디션</a>
                            <div class="inner_list">5</div>
                        </li>
                        <li><a href="#"data-id="6" >세트</a>
                            <div class="inner_list">5</div>
                        </li>
                        <li><a href="#"data-id="7" >케어</a>
                            <div class="inner_list">6</div>
                        </li>
                        <li><a href="#"data-id="8" >온라인쇼룸</a>
                            <div class="inner_list">7</div>
                        </li>
                        <li><a href="#"data-id="9" >요기요기</a>
                            <div class="inner_list">8</div>
                        </li>
                        <li><a href="#"data-id="10" >혜택</a>
                            <div class="inner_list">9</div>
                        </li>
                        <li><a href="#" class="community" data-id="11">커뮤니티</a>
                        <div class="inner_list">10</div>
                        </li>		
                        <li>
                            <a href="#"data-id="12"><i>전</i><i>국</i><i>매</i><i>장</i></a>
                        </li>
                    </ul>
                </div>
            </div>       
        </>
    )
}

//메뉴 
$( document ).ready( function() {
	var jbOffset = $( '.article_wrapper' ).offset();
	$( window ).scroll( function() {
		if ( $( document ).scrollTop() > jbOffset.top ) {
			$('.article_wrapper').addClass('menu_right')
		}
		else {
			$('.article_wrapper').removeClass('menu_right')
		}
	});
    $('.article_inner ul li').mouseenter(function(e){
		const id = e.target.dataset.id ;
		var idx = $(this).index();
		//e.tagetdata==idx 값 비교 
		if(id==idx+1){
			$('.inner_list').hide();
			$('.inner_list').eq(idx).show();
		}
	})
	$('.article_inner ul li').mouseleave(function(){
		$('.inner_list').hide();
	})
});

export default Menu
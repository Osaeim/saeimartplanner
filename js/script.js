// origin gnb>lnb 메뉴 스르륵 내려오기
$(function(){
  $(".origin_lnb_wrap").hide();
  $(".origin_gnb>li").mouseenter(function(){
    $(".origin_lnb_wrap").stop().slideDown();
  });
  $(".origin_gnb>li").mouseleave(function(){
    $(".origin_lnb_wrap").stop().slideUp();
  });
});

$(function(){
  $(".lnb_bg").hide();
  $(".origin_gnb>li").mouseenter(function(){
    $(".lnb_bg").stop().slideDown();
  });
  $(".origin_gnb>li").mouseleave(function(){
    $(".lnb_bg").stop().slideUp();
  });
});


// header2 gnb_lnb 메뉴 스르륵 내려오기
$(function(){
  $(".lnb_wrap").hide();
  $(".header2_gnb>li").mouseenter(function(){
    $(".lnb_wrap").stop().slideDown();
  });
  $(".header2_gnb>li").mouseleave(function(){
    $(".lnb_wrap").stop().slideUp();
  });
});

$(function(){
  $(".header2_lnb_bg").hide();
  $(".header2_gnb>li").mouseenter(function(){
    $(".header2_lnb_bg").stop().slideDown();
  });
  $(".header2_gnb>li").mouseleave(function(){
    $(".header2_lnb_bg").stop().slideUp();
  });
});



// 사진이 보이는 메뉴 만들기
$(function(){
  $(".lnb_menu_glance").hide();
  $(".lnb_li_1st").mouseenter(function(){
    $(".lnb_menu_glance1").stop().show();
  });
  $(".lnb_li_1st").mouseleave(function(){
    $(".lnb_menu_glance1").stop().hide();
  });
});

$(function(){
  $(".lnb_menu_glance").hide();
  $(".lnb_li_2nd").mouseenter(function(){
    $(".lnb_menu_glance2").stop().show();
  });
  $(".lnb_li_2nd").mouseleave(function(){
    $(".lnb_menu_glance2").stop().hide();
  });
});

$(function(){
  $(".lnb_menu_glance").hide();
  $(".lnb_li_3rd").mouseenter(function(){
    $(".lnb_menu_glance3").stop().show();
  });
  $(".lnb_li_3rd").mouseleave(function(){
    $(".lnb_menu_glance3").stop().hide();
  });
});

$(function(){
  $(".lnb_menu_glance").hide();
  $(".lnb_li_4th").mouseenter(function(){
    $(".lnb_menu_glance4").stop().show();
  });
  $(".lnb_li_4th").mouseleave(function(){
    $(".lnb_menu_glance4").stop().hide();
  });
});

$(function(){
  $(".lnb_menu_glance").hide();
  $(".lnb_li_5th").mouseenter(function(){
    $(".lnb_menu_glance5").stop().show();
  });
  $(".lnb_li_5th").mouseleave(function(){
    $(".lnb_menu_glance5").stop().hide();
  });
});

$(function(){
  $(".lnb_menu_glance").hide();
  $(".lnb_li_6th").mouseenter(function(){
    $(".lnb_menu_glance6").stop().show();
  });
  $(".lnb_li_6th").mouseleave(function(){
    $(".lnb_menu_glance6").stop().hide();
  });
});



// #hedaer2 꾸미기
$(function() {
  let lastScrollTop = 0;
  const $header = $('#header2');
  const headerHeight = $header.outerHeight(); // 헤더의 높이를 가져옵니다

  // 페이지가 처음 로드되었을 때와 최상단에서 헤더를 숨깁니다.
  $(window).on('load scroll', function() {
      let currentScrollTop = $(this).scrollTop();

      if (currentScrollTop <= headerHeight) {
          // 페이지 최상단 또는 헤더 높이보다 위에 있을 때
          $header.css('transform', 'translateY(-100%)'); // 헤더 숨기기
      } else if (currentScrollTop > lastScrollTop) {
          // 스크롤 다운
          $header.css('transform', 'translateY(-100%)'); // 헤더 숨기기
      } else {
          // 스크롤 업
          $header.css('transform', 'translateY(0)'); // 헤더 보이게 하기
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // 스크롤 위치 업데이트
  });
});


// 호버하면 N초 동안 확대 상태 유지 후 원래 크기로 돌아오기
document.querySelectorAll('.subpage-imgwrap > a').forEach(link => {
  link.addEventListener('mouseenter', function() {
      const img = this.querySelector('img');
      img.classList.add('scaled');
      
      // N초 동안 확대 상태 유지
      setTimeout(() => {
          img.classList.remove('scaled');
      }, 2000); // N초 후 원래 크기로 돌아오기
  });
});


// fnq 아코디언 펼치고 닫기
$(function(){
	$(".subpage> ul> li").click(function(){
		$(this).children(".text_info").slideToggle();
		$(this).siblings().children(".text_info").slideUp();
    $(this).children(".text_info").css("background-color", "#f3e8cb82");
    // $(this).children(".fnq").children(".fnq_title").toggleClass("color","#AC9250");
    // 색깔 바뀌는 거 별루 안 예쁘넹.
	});
});

$(function(){
	$(".subpage> ul> li").click(function(){
		$(this).toggleClass("turn");
		
		if($(this).hasClass("turn")===true){
				$(this).siblings().removeClass("turn");
		}

	});
});


// 마우스 올리면 애니메이션 재생시키기
$(function() {
  $('.ad-banner_textbox').on('mouseenter', function() {
      $(this).addClass('animated');
  });
  $('.ad-banner_textbox').on('animationend', function() {
      $(this).removeClass('animated');
  });
});


// ad-banner slide로 보여주기
$(function () {
  $(".ad-banner_wrap li").hide();
  $(".ad-banner_wrap li:nth-child(1)").show();
  setInterval(function () {
    $(".ad-banner_wrap li:nth-child(1)").fadeOut(1000).next().fadeIn(1000).end().appendTo(".ad-banner_wrap")
  }, 4500);
});


// 클릭하면 다음 이미지 보여주기
$(function(){
  $(".target-bundleimages > li").hide();
  $(".target-bundleimages > li:nth-child(1)").show();
    setInterval(function () {
      $(".target-bundleimages > li:nth-child(1)").fadeOut(1000).next().fadeIn(1000).end().appendTo(".target-bundleimages")
    }, 3500);
  });


  // bundleimages 호버하면 크게 보여주기
  $(function() {
    $(".target-bundleimg img").hover(
        function() {
            $(this).addClass("scaledup");
        }, 
        function() {
            $(this).removeClass("scaledup");
        }
    );
});


// bundleimages option 아코디언 펼치고 닫기
$(function() {
  // .option 클릭 시에만 슬라이드 토글
  $("#bundle-wrap .bundle-content .purchase-wrap .option-wrap .item-option > ul > li .option").click(function(event) {
      var parentLi = $(this).parent(); // 현재 클릭한 .option-header의 부모 li
      var optionInfo = parentLi.find(".option_info"); // 해당 li의 .option_info

      // 클릭한 항목의 .option_info만 슬라이드 토글, 나머지 모두 슬라이드업
      optionInfo.slideToggle();
      parentLi.siblings().find(".option_info").slideUp();

      // 클릭한 li에 turn 클래스 추가, 나머지 li에서 제거
      parentLi.toggleClass("turn");
      parentLi.siblings().removeClass("turn");
      // 이벤트 전파 방지
      event.stopPropagation(); 
  });
  // .option_info 안의 li 클릭 시 이벤트 전파 차단, 부모의 토글에 영향 주지 않음
  $(".option_info ul li").click(function(event) {
      event.stopPropagation(); // 부모 li의 클릭 이벤트 전파 방지
  });
});


// bundle tab 하기
$(function() {
  // 모든 tab_text를 숨기고 첫 번째 tab_text만 보여줌
  $(".tab_text").hide(); 
  $(".tab_text").eq(1).show();

  // 탭을 클릭할 때마다 동작
  $("#tab > li > a").click(function(e) {
      e.preventDefault(); // 기본 링크 동작을 막음 (페이지 이동 방지)

      // 클릭된 탭에 속한 li의 순번을 찾음
      var index = $(this).parent().index();

      // 모든 tab_text를 숨기고, 클릭된 탭의 tab_text만 보여줌
      $(".tab_text").hide();
      // 클릭된 li 안의 a 태그에 text-decoration: dashed; 적용
      $(".tab_text").eq(index).show();

      // 클릭된 탭에 활성화 클래스 추가, 다른 탭은 비활성화
      $("#tab > li").removeClass("active");
      $(this).parent().addClass("active");
  });
});
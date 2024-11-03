document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarSpan = document.querySelectorAll('.sidebar-toggle span');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    let isWhite = false; // 상태를 추적하는 변수 추가

    // 메인 사이드바 토글 기능
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        sidebarToggle.classList.toggle('active');
        mainContent.classList.toggle('shifted');
        
        // 토글 후 스크롤 위치 재조정
        mainContent.scrollTop = mainContent.scrollTop;

        // 색상 토글 로직
        if (isWhite) {
            sidebarSpan.forEach(span => {
                span.style.backgroundColor = "#333";
            });
            isWhite = false;
        } else {
            sidebarSpan.forEach(span => {
                span.style.backgroundColor = "#fff";
            });
            isWhite = true;
        }
    });
    
    // 화면 크기 변경 시
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            sidebarToggle.classList.remove('active');
            mainContent.classList.remove('shifted');
            
            // 리사이즈 후 스크롤 위치 재조정
            mainContent.scrollTop = mainContent.scrollTop;
        }
    });

    // 스크롤 이벤트 처리
    mainContent.addEventListener('scroll', function(e) {
        e.stopPropagation(); // 스크롤 이벤트 전파 방지
    });
});

// 서브메뉴 토글 함수
function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    const arrow = menu.previousElementSibling;
    
    // 다른 열린 메뉴들 닫기
    const allMenus = document.querySelectorAll('[id^="Menu"]');
    const allArrows = document.querySelectorAll('.arrow');
    
    allMenus.forEach((item) => {
        if(item.id !== menuId && item.classList.contains('show')) {
            item.classList.remove('show');
        }
    });
    
    allArrows.forEach((item) => {
        if(item !== arrow && item.classList.contains('open')) {
            item.classList.remove('open');
        }
    });
    
    // 선택된 메뉴 토글
    menu.classList.toggle('show');
    arrow.classList.toggle('open');
}
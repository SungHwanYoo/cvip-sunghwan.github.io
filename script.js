document.addEventListener('DOMContentLoaded', function() {
    // 메인 사이드바 토글 관련 요소
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // 사이드바 내부 서브메뉴 토글 관련 요소
    const leftInner2 = document.getElementById('leftInner2');
    const arrow = document.getElementById('arrow');

    // 메인 사이드바 토글 기능
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        sidebarToggle.classList.toggle('active');
        mainContent.classList.toggle('shifted');
    });

    // 검색 기능
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        // 검색 로직 구현
    });

    // 화면 크기가 변경될 때 사이드바 상태 조정
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            sidebarToggle.classList.remove('active');
            mainContent.classList.remove('shifted');
        }
    });
});

// 서브메뉴 토글 함수
function openDiv() {
    const leftInner2 = document.getElementById('leftInner2');
    const arrow = document.getElementById('arrow');

    if (leftInner2.style.display === 'none') {
        leftInner2.style.display = 'block';
        arrow.style.transform = 'rotate(90deg)';
    } else {
        leftInner2.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }
}
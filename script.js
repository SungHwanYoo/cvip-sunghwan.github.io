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

function handleSearch(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지
    
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const posts = document.querySelectorAll('.post-card');
    
    posts.forEach(post => {
        const title = post.querySelector('.post-title').textContent.toLowerCase();
        const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
        const tags = Array.from(post.querySelectorAll('.tag'))
            .map(tag => tag.textContent.toLowerCase());
        
        // 제목, 내용, 태그에서 검색어 확인
        const isMatch = title.includes(searchTerm) || 
                       excerpt.includes(searchTerm) ||
                       tags.some(tag => tag.includes(searchTerm));
        
        // 검색 결과에 따라 포스트 표시/숨김
        post.style.display = isMatch ? 'block' : 'none';

        const hasResults = Array.from(posts).some(post => post.style.display === 'block');
        document.getElementById('noResults').style.display = hasResults ? 'none' : 'block';
    });
}

// 실시간 검색을 위한 이벤트 리스너
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const posts = document.querySelectorAll('.post-card');
    
    posts.forEach(post => {
        const title = post.querySelector('.post-title').textContent.toLowerCase();
        const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
        const tags = Array.from(post.querySelectorAll('.tag'))
            .map(tag => tag.textContent.toLowerCase());
        
        const isMatch = title.includes(searchTerm) || 
                       excerpt.includes(searchTerm) ||
                       tags.some(tag => tag.includes(searchTerm));
        
        post.style.display = isMatch ? 'block' : 'none';
    });
});
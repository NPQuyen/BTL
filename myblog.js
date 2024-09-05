function showContent(target, event) {
    event.preventDefault();

    // Ẩn tất cả các phần tử nội dung
    document.getElementById('photography-tips-content').style.display = 'none';
    document.getElementById('gallery-content').style.display = 'none';
    document.getElementById(target + '-content').style.display = 'flex';
    // Loại bỏ lớp 'active' khỏi tất cả liên kết
    const links = document.querySelectorAll('a');
    links.forEach(link => link.classList.remove('active'));

    // Hiển thị nội dung liên quan đến mục được chọn và thêm lớp 'active'
    if (target === 'photography-tips') {
      document.getElementById('photography-tips-content').style.display = 'flex';
      
    } else if (target === 'gallery') {
      document.getElementById('gallery-content').style.display = 'flex';
      
    }
   
    // Thêm lớp 'active' cho liên kết đang được chọn

    const activeLink = document.querySelector(`a[data-target="${target}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  
  document.querySelector('.readmore-container').style.display = 'block';

  // Xóa lớp 'active' khi nhấp ra ngoài liên kết
  document.addEventListener('mousedown', (event) => {
    if (!event.target.closest('a'[data-target])) {
      const activeLinks = document.querySelectorAll('a.active');
      activeLinks.forEach(link => link.classList.remove('active'));

      document.querySelector('.readmore-container').style.display = 'none';
    }
  });
}

// Mobile
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');
  
  menuIcon.addEventListener('click', function() {
      menu.classList.toggle('open');
  });
});

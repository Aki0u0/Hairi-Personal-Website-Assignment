// === PAGE 2 LIGHTBOX ===
const g2Lightbox = document.getElementById('g2-lightbox');
const g2LightboxImg = document.getElementById('g2-lightbox-img');
const g2CloseBtn = document.querySelector('.g2-lightbox .g2-close');

if (g2Lightbox && g2LightboxImg && g2CloseBtn) {
  document.querySelectorAll('.g2-lightbox-thumb').forEach(img => {
    img.addEventListener('click', () => {
      g2Lightbox.style.display = 'block';
      g2LightboxImg.src = img.src;
    });
  });

  g2CloseBtn.addEventListener('click', () => {
    g2Lightbox.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === g2Lightbox) g2Lightbox.style.display = 'none';
  });
}

// === PAGE 4 LIGHTBOX ===
const g4Lightbox = document.getElementById('g4-lightbox');
const g4LightboxImg = document.getElementById('g4-lightbox-img');
const g4CloseBtn = document.querySelector('.g4-lightbox .g4-close');

if (g4Lightbox && g4LightboxImg && g4CloseBtn) {
  document.querySelectorAll('.g4-lightbox-thumb').forEach(img => {
    img.addEventListener('click', () => {
      g4Lightbox.style.display = 'block';
      g4LightboxImg.src = img.src;
    });
  });

  g4CloseBtn.addEventListener('click', () => {
    g4Lightbox.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === g4Lightbox) g4Lightbox.style.display = 'none';
  });
}

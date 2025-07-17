document.addEventListener("DOMContentLoaded", () => {
  // === HOMEPAGE CAROUSEL ===
  const homeItems = document.querySelectorAll('.home-carousel-item');
  const homePrev = document.getElementById('home-prevBtn');
  const homeNext = document.getElementById('home-nextBtn');

  if (homeItems.length > 0 && homePrev && homeNext) {
    let current = 0;

    function updateHomeCarousel() {
      homeItems.forEach((item, index) => {
        item.classList.remove('active', 'prev', 'next');
        if (index === current) {
          item.classList.add('active');
        } else if (index === (current - 1 + homeItems.length) % homeItems.length) {
          item.classList.add('prev');
        } else if (index === (current + 1) % homeItems.length) {
          item.classList.add('next');
        }
      });
    }

    homePrev.addEventListener('click', () => {
      current = (current - 1 + homeItems.length) % homeItems.length;
      updateHomeCarousel();
    });

    homeNext.addEventListener('click', () => {
      current = (current + 1) % homeItems.length;
      updateHomeCarousel();
    });

    updateHomeCarousel();
  }

  // === FIRSTPAGE CAROUSEL ===
  const gameItems = document.querySelectorAll('.coverflow-item');
  const gamePrev = document.getElementById('prevBtn');
  const gameNext = document.getElementById('nextBtn');

  if (gameItems.length > 0 && gamePrev && gameNext) {
    let current = 0;

    function updateGameCarousel() {
      gameItems.forEach((item, index) => {
        item.classList.remove('active', 'prev', 'next');
        if (index === current) {
          item.classList.add('active');
        } else if (index === (current - 1 + gameItems.length) % gameItems.length) {
          item.classList.add('prev');
        } else if (index === (current + 1) % gameItems.length) {
          item.classList.add('next');
        }
      });
    }

    gamePrev.addEventListener('click', () => {
      current = (current - 1 + gameItems.length) % gameItems.length;
      updateGameCarousel();
    });

    gameNext.addEventListener('click', () => {
      current = (current + 1) % gameItems.length;
      updateGameCarousel();
    });

    updateGameCarousel();
  }

  // === GAME 5 CAROUSEL ===
  const g5Items = document.querySelectorAll('.g5-coverflow-item');
  const g5Prev = document.getElementById('g5-prevBtn');
  const g5Next = document.getElementById('g5-nextBtn');

  if (g5Items.length > 0 && g5Prev && g5Next) {
    let current = 0;

    function updateG5Carousel() {
      g5Items.forEach((item, index) => {
        item.classList.remove('active', 'prev', 'next');
        if (index === current) {
          item.classList.add('active');
        } else if (index === (current - 1 + g5Items.length) % g5Items.length) {
          item.classList.add('prev');
        } else if (index === (current + 1) % g5Items.length) {
          item.classList.add('next');
        }
      });
    }

    g5Prev.addEventListener('click', () => {
      current = (current - 1 + g5Items.length) % g5Items.length;
      updateG5Carousel();
    });

    g5Next.addEventListener('click', () => {
      current = (current + 1) % g5Items.length;
      updateG5Carousel();
    });

    updateG5Carousel();
  }
});

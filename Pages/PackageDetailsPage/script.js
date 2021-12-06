const navLinks = document.querySelectorAll('.nav-link');
const tabPanes = document.querySelectorAll('.tab-pane');

navLinks.forEach((navItem, index) => {
  navItem.addEventListener('click', () => {
    showTabs(index);
  });
});
function showTabs(id) {
  navLinks.forEach((navItem) => {
    navItem.classList.remove('active');
  });
  tabPanes.forEach((tabPane) => {
    tabPane.classList.remove('show');
  });

  navLinks[id].classList.add('active');
  tabPanes[id].classList.add('show');
}

// galary page
import { galleryImage } from '../../Public/data.js';
const leftPanel = document.querySelector('.tab-content-3 .left-panel');
const rightPanel = document.querySelector('.tab-content-3 .right-panel');
const htmlWrapper = document.querySelector('html');

window.addEventListener('DOMContentLoaded', () => {
  renderContent(leftPanel);
  renderContent(rightPanel);
  handleImageClick();
});

const renderContent = (container) => {
  let html = '';
  if (container == leftPanel) {
    for (let i = 0; i < galleryImage.length / 2; i += 3) {
      html += `
            <div class="gallery-grid">
                <img src="${galleryImage[i]}" alt="${galleryImage[i]}" />
                <img src="${galleryImage[i + 1]}" alt="${
        galleryImage[i + 2]
      }" />
                <img src="${galleryImage[i + 2]}" alt="${
        galleryImage[i + 3]
      }" />
            </div>
            `;
    }
  }
  if (container == rightPanel) {
    for (let i = galleryImage.length / 2; i < galleryImage.length; i += 3) {
      html += `
            <div class="gallery-grid">
                <img src="${galleryImage[i]}" alt="${galleryImage[i]}" />
                <img src="${galleryImage[i + 1]}" alt="${
        galleryImage[i + 2]
      }" />
                <img src="${galleryImage[i + 2]}" alt="${
        galleryImage[i + 3]
      }" />
            </div>
            `;
    }
  }
  container.innerHTML = html;
};

const handleImageClick = () => {
  const images = document.querySelectorAll('.tab-content-3 .gallery-grid img');
  const pictureSlide = document.querySelector('.tab-content-3 .picture-slide');
  const closeButton = pictureSlide.querySelector(
    '.slide .item-show .icon-close'
  );
  const nextButton = pictureSlide.querySelector('.slide .slide-icon.next');
  const prevButton = pictureSlide.querySelector('.slide .slide-icon.prev');
  const imageShow = pictureSlide.querySelector('.slide .item-show #image-show');
  const imageText = pictureSlide.querySelector('.slide .item-show span');

  images.forEach((image, index) => {
    image.onclick = () => {
      const src = image.getAttribute('src');
      imageShow.src = src;
      imageText.textContent = `${index + 1} of ${images.length}`;
      pictureSlide.classList.add('show');
      htmlWrapper.style.overflow = 'hidden';
    };
  });

  closeButton.onclick = () => {
    pictureSlide.classList.remove('show');
    htmlWrapper.style.overflow = 'auto';
  };

  nextButton.onclick = () => {
    const currentSrc = imageShow.getAttribute('src');
    const indexSrc = galleryImage.indexOf(currentSrc);
    let newIndex = indexSrc + 1;
    if (newIndex >= galleryImage.length) {
      newIndex = 0;
    }
    imageShow.src = galleryImage[newIndex];
    imageText.textContent = `${newIndex + 1} of ${galleryImage.length}`;
  };
  prevButton.onclick = () => {
    const currentSrc = imageShow.getAttribute('src');
    const indexSrc = galleryImage.indexOf(currentSrc);
    let newIndex = indexSrc - 1;
    if (newIndex < 0) {
      newIndex = galleryImage.length - 1;
    }
    imageShow.src = galleryImage[newIndex];
    imageText.textContent = `${newIndex + 1} of ${galleryImage.length}`;
  };
  imageShow.onclick = () => {
    const currentSrc = imageShow.getAttribute('src');
    const indexSrc = galleryImage.indexOf(currentSrc);
    let newIndex = null;
    if (newIndex !== indexSrc) {
      newIndex = Math.floor(Math.random() * galleryImage.length + 1) - 1;
    }
    imageShow.src = galleryImage[newIndex];
    imageText.textContent = `${newIndex + 1} of ${galleryImage.length}`;
  };
};

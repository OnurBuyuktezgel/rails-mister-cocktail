import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Classic", "Fruity", "Spicy", "Smoky", "Strong"],
    typeSpeed: 120,
    loop: true
  });
}

export { loadDynamicBannerText };

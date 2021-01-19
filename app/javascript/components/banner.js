import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Simple", "Tasty", "Delicious"],
    typeSpeed: 120,
    loop: true
  });
}

export { loadDynamicBannerText };

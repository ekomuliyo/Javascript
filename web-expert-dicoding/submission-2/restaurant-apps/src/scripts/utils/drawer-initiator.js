const DrawerInitiator = {
  init({ menuToggle, nav }) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('mobile-nav');
      menuToggle.classList.toggle('is-active');
    });
  },
};

export default DrawerInitiator;

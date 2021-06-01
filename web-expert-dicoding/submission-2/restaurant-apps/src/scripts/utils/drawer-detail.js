const DrawerDetail = {
  init() {
    // setup tab menu
    const tabLinks = document.querySelectorAll('.tabs a');
    const tabPanels = document.querySelectorAll('.tabs_panel');
    for (const el of tabLinks) {
      el.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector('.tabs li.active').classList.remove('active');
        document.querySelector('.tabs_panel.active').classList.remove('active');

        const parentListItem = el.parentElement;
        parentListItem.classList.add('active');
        const index = [...parentListItem.parentElement.children].indexOf(parentListItem);
        const panel = [...tabPanels].filter((ele) => parseInt(ele.getAttribute('data-index'), 10) === index);
        panel[0].classList.add('active');
      });
    }
  },
};

export default DrawerDetail;

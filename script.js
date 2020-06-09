const navListContainer = document.querySelector('.nav-list-container');
const sectionTitle = Array.from(document.getElementsByTagName('section'));
const navList__item = Array.from(navListContainer.children);
function setNavItemData() {
  let i = 1;
  for (let item of navList__item) {
    let aElement = item.querySelector('.nav-link');
    aElement.innerText = `Lorem Article ${i}`;
    aElement.setAttribute('href',`#Lorem_Article_${i}`)
    sectionTitle[navList__item.indexOf(item)].querySelector('.section-title').innerText = aElement.innerText;
    sectionTitle[navList__item.indexOf(item)].setAttribute('id',`Lorem_Article_${i}`);
    i += 1;
  }
}
setNavItemData();

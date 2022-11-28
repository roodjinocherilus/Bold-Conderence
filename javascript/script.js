const myNav = document.getElementById('nav');
window.onscroll = () => {
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    myNav.classList.add('nav-colored');
    myNav.classList.remove('nav-transparent');
  } else {
    myNav.classList.add('nav-transparent');
    myNav.classList.remove('nav-colored');
  }
};

function getSpeaker() {
  let speaker = '';

  fetch('./speakers.json')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((Index) => {
        speaker += `
            <div class="speakers-container">
            <div class="speakers-img"><img class="img-speaker" src="${Index.image}" alt="speaker"></div>  
            <div class="speakers-text">
                <h3>${Index.name}</h3>
                <p>${Index.title}</p>
                <hr>
                <p>${Index.bio}</p>
              </div>
            </div>`;
      });
      document.getElementById('speakers').innerHTML = speaker;
    });
}

window.addEventListener('load', getSpeaker());

const hamburger = document.querySelector('.hamburger');
const navitem = document.querySelector('.navitem');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navitem.classList.toggle('display');
});

let stage = document.querySelector('.stage');
let active = 2;

const classArray = [
  'background-img-hobbys',
  'background-img-ambitions',
  'background-img-profile',
  'background-img-educations',
  'background-img-skills'];

function layout() {
  const aside = document.querySelector('background-img')
  const buttons = stage.querySelectorAll('button');
  const spacing = 120;

  buttons.forEach((btn, i) => {
    const dist = Math.abs(i - active);
    btn.classList.remove('is-active', 'is-adjacent', 'is-far');
    btn.classList.add(dist === 0 ? 'is-active' : dist === 1 ? 'is-adjacent' : 'is-far');
    btn.style.transform = `translateX(${(i - active) * spacing}px)`;
    btn.style.zIndex = 100 - dist; // closer to active = always higher, both directions
  });

  classArray.forEach((element, i) => {
    if (i === active) {
      aside.classList.add(element);
    }
    else {
      aside.classList.remove(element);
    }
  });

}

function goTo(i) {
  active = i;
  layout();
}

const navButtons = stage.querySelectorAll('button');
navButtons.forEach((btn, i) => {
  btn.addEventListener('click', () => goTo(i));
});

layout();
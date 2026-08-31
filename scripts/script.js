let stage = document.querySelector('.stage');
let active = 0;

function layout() {
  const buttons = stage.querySelectorAll('button');
  const spacing = 90;

  buttons.forEach((btn, i) => {
    const dist = Math.abs(i - active);
    btn.classList.remove('is-active', 'is-adjacent', 'is-far');
    btn.classList.add(dist === 0 ? 'is-active' : dist === 1 ? 'is-adjacent' : 'is-far');
    btn.style.transform = `translateX(${(i - active) * spacing}px)`;
    btn.style.zIndex = 100 - dist; // closer to active = always higher, both directions
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
document.addEventListener('DOMContentLoaded', () => {
  // Get all buttons and sections
  const buttons = {
    homeBtn: document.getElementById('homeBtn'),
    aboutBtn: document.getElementById('aboutBtn'),
    contactBtn: document.getElementById('contactBtn'),
    ww1Btn: document.getElementById('ww1Btn'),
    ww2Btn: document.getElementById('ww2Btn')
  };

  const sections = {
    home: document.getElementById('home'),
    about: document.getElementById('about'),
    contact: document.getElementById('contact'),
    ww1: document.getElementById('ww1'),
    ww2: document.getElementById('ww2')
  };

  // Show selected section and hide others
  const showSection = (sectionId) => {
    for (const key in sections) {
      sections[key].classList.add('hidden');
    }
    sections[sectionId].classList.remove('hidden');
  };

  // Event listeners for navigation buttons
  buttons.homeBtn.addEventListener('click', () => showSection('home'));
  buttons.aboutBtn.addEventListener('click', () => showSection('about'));
  buttons.contactBtn.addEventListener('click', () => showSection('contact'));
  buttons.ww1Btn.addEventListener('click', () => showSection('ww1'));
  buttons.ww2Btn.addEventListener('click', () => showSection('ww2'));

  // Show the Home section by default
  showSection('home');
});
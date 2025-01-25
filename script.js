let panels = document.querySelectorAll('.panel');
// panels = [panel,...]
panels.forEach(panel => {
  panel.addEventListener('mouseover', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}

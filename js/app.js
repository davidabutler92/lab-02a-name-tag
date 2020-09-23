const userInput = document.getElementById('name-input');
const newName = document.getElementById('name-tag');
const darkMode = document.getElementById('dark-mode');

document.getElementById('name-tag-btn').addEventListener('click', () => {
  newName.textContent = userInput.value;
  userInput.value = ''
});

darkMode.addEventListener('click', () => {
  console.log('dark mode');
  const darkButton = document.body; 
  darkButton.classList.toggle('dark-mode');
});
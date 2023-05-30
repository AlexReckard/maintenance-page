
// Get the toggle mode button and body element
const toggleModeButton = document.getElementById('toggleMode');
const body = document.body;

// Function to toggle the dark mode
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  
  // Save the mode preference in local storage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark');
    toggleModeButton.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    localStorage.setItem('mode', 'light');
    toggleModeButton.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

// Add event listener to toggle mode button
toggleModeButton.addEventListener('click', toggleDarkMode);

// Check for previously saved mode preference
const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  toggleDarkMode();
} else {
  toggleModeButton.innerHTML = '<i class="fas fa-moon"></i>';
}

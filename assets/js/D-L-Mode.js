function toggleDarkMode() {
    const body = document.body;
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const darkModeText = document.getElementById('darkModeText');

    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        darkModeText.textContent = "Mode Light";
        localStorage.setItem('mode', 'dark');
    } else {
        darkModeText.textContent = "Mode Dark";
        localStorage.setItem('mode', 'light');
    }
}

// Store dark mode preference in localStorage
document.addEventListener("DOMContentLoaded", function () {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const darkModeText = document.getElementById('darkModeText');
    const savedMode = localStorage.getItem('mode');
    const body = document.body;

    if (savedMode === 'dark') {
        body.classList.add('light-mode');
        darkModeSwitch.checked = false;
        darkModeText.textContent = "Mode Light";
    } else {
        body.classList.remove('light-mode');
        darkModeSwitch.checked = true;
        darkModeText.textContent = "Mode Dark";
    }
    // if (document.body.classList.contains('light-mode')) {
    //     darkModeSwitch.checked = true;  
    //     darkModeText.textContent = "Mode Terang"; 
    // } else {
    //     darkModeSwitch.checked = false;
    //     darkModeText.textContent = "Mode Gelap"; 
    // }
});
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

async function loadTextFile() {
    fetch('data/content.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('wakvalues').innerText = data;
    })
    .catch(error => console.error('Error fetching the file:', error));
}






const currentPage = window.location.pathname.split('/').pop(); 


if (currentPage === 'WAK/index.html') {
    console.log('This is the Home page.');
    // Add Home page-specific code here
} else if (currentPage === 'WAK/values.html') {
    console.log('This is the About page.');
    window.onload = loadTextFile;





    // Add About page-specific code here
} else if (currentPage === 'research.html') {
    console.log('This is the Research page.');
    // Add Research page-specific code here
}
// Call the function to load the text file when the page loads



window.onload = loadTextFile;

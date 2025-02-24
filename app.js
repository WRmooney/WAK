const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

async function loadTextFile() {
    try {
        const filePath = 'data/content.txt';
        console.log('Fetching file from:', filePath);
        // Fetch the text file
        const response = await fetch(filepath);
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to load text file');
        }

        // Get the text content
        const text = await response.text();
        
        console.log('Fetched content:', text);

        // Insert the text into the placeholder element
        document.getElementById('text-content').innerText = text;
    } catch (error) {
        console.error('Error loading text file:', error);
        document.getElementById('text-content').innerText = 'Failed to load content.';
    }
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

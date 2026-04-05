// Updated router function to handle navigation properly

function router() {
    // Prevent default action for nav-brand link
    const navBrandLink = document.querySelector('.nav-brand');
    navBrandLink.addEventListener('click', (event) => {
        event.preventDefault();
        // Add your navigation logic here
    });

    // Ensure all data-page links trigger the router function correctly
    const dataPageLinks = document.querySelectorAll('[data-page]');
    dataPageLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            // Call your routing logic here
        });
    });

    // Initialization code to attach event listeners to all navigation elements
    const logoButton = document.querySelector('.bue-logo');
    logoButton.addEventListener('click', (event) => {
        event.preventDefault();
        // Logic to handle logo click
    });
}
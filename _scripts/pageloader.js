// pageloader.js

// Function to fetch and insert HTML content into a container
function fetchAndInsert(url, containerId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => console.error(`Error fetching ${url}:`, error));
}

// Get the base URL of the current page
const baseURL = window.location.origin;

// Fetch and insert header
fetchAndInsert(`./${baseURL}/_includes/header.html`, 'header-container');

// Get the current page's path and file name
const currentPagePath = window.location.pathname;
const currentPage = currentPagePath.split('/').pop();

// Fetch and insert page content based on the current page
fetchAndInsert(`./${baseURL}/${currentPage}`, 'page-content-container');

// Fetch and insert footer
fetchAndInsert(`./${baseURL}/_includes/footer.html`, 'footer-container');
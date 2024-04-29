const currentYear = new Date().getFullYear();
const footerFirstParagraph = document.querySelector('footer p:first-of-type');
footerFirstParagraph.textContent += ` ${currentYear}`;
const lastModifiedDate = new Date(document.lastModified);

const formattedLastModifiedDate = lastModifiedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});

const footerSecondParagraph = document.querySelector('footer p:nth-of-type(2)');
footerSecondParagraph.textContent += ` ${formattedLastModifiedDate}`
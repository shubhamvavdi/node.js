// public/script.js
document.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll('.s');
    headings.forEach((heading) => {
        heading.style.color = 'red';
        heading.textContent += ' - Updated by JavaScript';
    });
});

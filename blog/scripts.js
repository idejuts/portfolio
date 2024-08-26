document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const postContent = this.previousElementSibling;
            postContent.querySelectorAll('p:not(:first-child)').forEach(p => {
                p.style.display = p.style.display === 'block' ? 'none' : 'block';
            });
            this.textContent = this.textContent === 'Read more...' ? 'Show less...' : 'Read more...';
        });
    });
});

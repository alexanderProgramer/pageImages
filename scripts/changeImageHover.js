document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-hover-src]');

    const addHoverEffect = (img) => {
        const originalSrc = img.src;
        const hoverSrc = img.getAttribute('data-hover-src');

        const onMouseOver = () => img.src = hoverSrc;
        const onMouseOut = () => img.src = originalSrc;

        img.addEventListener('mouseover', onMouseOver);
        img.addEventListener('mouseout', onMouseOut);
    };

    images.forEach(img => addHoverEffect(img));
});
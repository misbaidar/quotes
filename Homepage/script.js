document.addEventListener('DOMContentLoaded', () => {
    const cursorTrail = document.querySelector('.cursor-trail');
    const quoteContainer = document.querySelector('.quote-container');
    
    // Cursor trail effect
    document.addEventListener('mousemove', (e) => {
        cursorTrail.style.left = e.clientX + 'px';
        cursorTrail.style.top = e.clientY + 'px';
        
        // Parallax effect on quote container
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        quoteContainer.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
    });
    
    // Hide default cursor and show custom trail
    document.body.style.cursor = 'none';
    
    // Interactive effect when clicking
    document.addEventListener('click', () => {
        cursorTrail.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorTrail.style.background = 'rgba(255, 255, 255, 0.5)';
        
        setTimeout(() => {
            cursorTrail.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorTrail.style.background = 'rgba(255, 255, 255, 0.2)';
        }, 300);
    });
});
// When mouse move trigger the event.
document.addEventListener("mousemove", ParallaxEffect);

function ParallaxEffect(e) {
    // For each particle, calculate the fields;
    this.querySelectorAll('.layer').forEach(layer => {
        // Get speed of particle
        const speed = layer.getAttribute('data-speed');
        // (Inner width of window) - (Mouse position) * (Speed of particle) / 100
        const x = (window.innerWidth  - e.pageX*speed)/100;
        const y = (window.innerHeight - e.pageY*speed)/100;
        // Transform particles for parallax effect
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}
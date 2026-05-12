gsap.registerPlugin(ScrollTrigger);

// 1. Navbar Scroll Effect
window.addEventListener("scroll", function() {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// 2. Hero Reveal Animations
gsap.from(".reveal-text", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out"
});

// 3. Scroll Reveal for Sections
const animateScroll = document.querySelectorAll(".animate-scroll");
animateScroll.forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// 4. Number Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 200; 
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target + "+";
        }
    };

    ScrollTrigger.create({
        trigger: counter,
        onEnter: updateCount
    });
});

CSSPlugin.defaultTransformPerspective = 400;

gsap.to(".green", { duration: 3, rotationX: 360 });
gsap.to(".orange", { duration: 3, rotationY: 360 });
gsap.to(".grey", { duration: 3, x: 100, y: 100, scale: 2, skewX: 25, rotation: 180 });

// gsap.to(".title", { duration: 1.5, fontSize: 100 });
// gsap.from(".title", { duration: 3, x: 300, opacity: 0, scale: 0.5 });
gsap.fromTo(".title2", { x:0 ,opacity: 0, scale: 0.5 }, { opacity: 1, duration: 3 });
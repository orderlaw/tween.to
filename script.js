let nav = document.querySelector('.nav')

let tween = gsap.to(".circle", {
    duration: 4,
    x: () => nav.offsetWidth, 
    xPercent: -100,
    ease: "none", 
    paused: true
})

document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();
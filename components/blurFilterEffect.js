window.addEventListener("DOMContentLoaded", () => {
  VANTA.NET({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0xff3f81,
    backgroundColor: 0x23153c,
    maxDistance: 20.0,
    spacing: 20.0,
  });

  setTimeout(() => {
    const main = document.querySelector("main");
    main.style.opacity = 1;
    main.style.filter = "blur(0px)";
  }, 1000);
});

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
    console.log(navbar.classList);
    navbar.classList.toggle("active");
};

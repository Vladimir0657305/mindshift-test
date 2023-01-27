let ultimoElemento;
const heightArr = [757, 292, 521, 237, 337, 181, 225, 151, 208, 358, 401, 430, 241, 154, 209, 801, 431, 207, 268, 224, 259, 265, 176, 330, 228, 344, 266, 383, 196, 181];

const rngColor = () => `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
let count = 1;

const observador = new IntersectionObserver(
    (entries) => {
        entries.forEach((entries) => {
            if (entries.isIntersecting) { appendElement(); }
        });
    },
    {
        rootMargin: "-200px 0px 0px 0px",
        threshold: 1.0
    }
);

function createNewElement() {
    if (count < 30) {
        const elem = document.createElement("div");
        elem.style.height = `${heightArr[count - 1]}px`;
        // elem.className = "grid-item my-3 col-xl-4 col-md-6 col-sm-12 ";
        elem.className = "grid-item col-sm-6 col-lg-4 mb-4";
        elem.innerHTML = `<div class="card rounded overflow-hidden box-img" style="height: '100%'; ">
            <img src="https://mind-shift.co/smokefree/img/wh_testimonials/wh_testimonial_${count}.jpeg">
        </div>`;
        count === 15 ? count += 2 : count++;
        return elem;
    }
    else {
        return null;
    }
}

(function () {
    const masonry = document.getElementById("masonry");
    for (let i = 1; i < 9; i++) {
        const element = createNewElement();
        masonry.appendChild(element);
    }
    getLastChild();
})();

var grid = document.querySelector(".grid");
var msnry = new Masonry(grid, {
    itemSelector: ".grid-item",
    isResizable: true,
    isFitWidth: true,
});

function appendElement() {
    var elems = [];
    var fragment = document.createDocumentFragment();
    var elem = createNewElement();
    fragment.appendChild(elem);
    elems.push(elem);
    grid.appendChild(fragment);
    msnry.appended(elem);
    getLastChild();
}

function getLastChild() {
    if (ultimoElemento) observador.unobserve(ultimoElemento);
    const elements = document.querySelectorAll(".grid-item");
    ultimoElemento = elements[elements.length - 1];
    observador.observe(ultimoElemento);
}
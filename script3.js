const rngColor = () => `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
let count = 9;

const imageObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) appendElement();
            observer.unobserve(entry);
        } )
    },
    {}
);
document.querySelectorAll('.card').forEach(img => imageObserver.observe(img));
var cardBody = document.getElementById("masonry");
// var msnry = new Masonry(cardBody, {
//     itemSelector: ".grid-item"
// });

function appendElement() {
    var fragment = document.createDocumentFragment();
    var elem = createNewElement();
    fragment.appendChild(elem);
    cardBody.appendChild(fragment);
    // fragment.insertAdjacentElement("beforeend", elem);
    // cardBody.insertAdjacentElement("beforeend", fragment);



    // var elems = [];
    // var fragment = document.createDocumentFragment();
    // for (var i = 0; i < 9; i++) {
    //     var elem = createNewElement();
    //     fragment.appendChild(elem);
    //     elems.push(elem);
    // }
    
    // grid.appendChild(fragment);
    
    // msnry.appended(elems);

    // getLastChild();
}

function createNewElement() {
    const elem = document.createElement("div");
    // const height = rngInteger(200, 400);

    // elem.style.height = `${height}px`;
    // elem.style.height = `auto`;
    // elem.className = "grid-item my-3 col-xl-4 col-md-6 col-sm-12 ";
    elem.className = "col-sm-6 col-lg-4 mb-4";
    elem.setAttribute("data-masonry", '{"percentPosition": true }');
    elem.innerHTML = `<div class="card box-img" style="height=100% background-color: ${rngColor()};">
                            
                                <img src="https://mind-shift.co/smokefree/img/wh_testimonials/wh_testimonial_${count}.jpeg">
                            
                        </div>`;
    count++;
    console.log(count, elem);
    return elem;
}
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function shad(el) {
	if (isInViewport(document.querySelector(el))) {
	    document.querySelector(el).classList.add("shad");
	} else {
	    document.querySelector(el).classList.remove("shad")
	}
}

function view(el) {
	if (isInViewport(document.querySelector(el))) {
	    document.querySelector(el).classList.add("v");
	} else {
	    document.querySelector(el).classList.remove("v")
	}
}

function checkAll() {
    shad('pre');
    view('p');
}
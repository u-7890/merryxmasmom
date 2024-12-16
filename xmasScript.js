let current = 0;
const contents = document.querySelectorAll('.content');

console.log(contents);

function show(index) { 
    contents.forEach((content, i) => { 
        content.classList.toggle('active', i === index);
    }); 
}

function next() {
    current = (current +1)% contents.length;
    show(current);
}

function back() {
    current = (current -1 +contents.length) % contents.length;
    show(current);
}

// initialize
show(current);
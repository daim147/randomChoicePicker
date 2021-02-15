const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");


textarea.focus();

textarea.addEventListener("keyup", (e) => {

    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(input) {

    // console.log(input +"   first-input") 
    // console.log(tagsEl.innerHTML +" first-html")
    tagsEl.innerHTML = ""
    //     console.log(input +"    second-input")
    // console.log(tagsEl.innerHTML +"   second-html")


    const tags = input.split(",").filter(tag => tag.trim() !== '');
    // console.log(tags+" tags")
    tags.forEach(element => {
        const span = document.createElement("span");
        span.innerHTML = element;
        // console.log(span.textContent +"  first-span")
        span.classList.add("tag");

        tagsEl.appendChild(span);
        //  console.log(span.textContent +"  second-span") 
        // console.log(tagsEl.innerHTML)
    });

}


function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlight(randomTag)
        setTimeout(() => {
            unhighlight(randomTag)
        }, 100);


    }, 100);

    setTimeout(() => {
        clearInterval(interval)
    }, times * 100);

    
    setTimeout(() => {
        const random = pickRandomTag()
        highlight(random)
    }, times * 100 + 100);

}


function pickRandomTag() {
    const tags = document.querySelectorAll(".tag")

    return tags[Math.floor(Math.random() * tags.length)]

}

function highlight(input) {
    input.classList.add("highlight");
}
function unhighlight(input) {
    input.classList.remove("highlight");
}

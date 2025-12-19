const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(
    (entries) =>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },{
        threshold: 0.2
    }
);
sections.forEach(section => observer.observe(section));


const intro_text = ["I guess I got your attention — welcome! This website introduces who I am, my achievements, and the goals I’m working toward",
    "as I put myself out there in the tech world.",
    "I believe code is like humour: if you have to explain it, it’s probably not great (okay, I know that’s a bad joke).",
    "Feel free to use the navigation icons to find the information you want."];

const para1 = document.getElementById("para1");
let line_index = 0;
let char_index = 0;
const observer2 = new IntersectionObserver((entries, obs) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            typeWriter();
            obs.unobserve(entry.target);
        }
    });
}, {threshold:0.5});
observer2.observe(para1);

function typeWriter(){
    if(line_index < intro_text.length){
    const currentline = intro_text[line_index];
    if(char_index < currentline.length){
        para1.innerHTML += currentline.charAt(char_index);
        char_index++;
        setTimeout(typeWriter, 35);
    }else{
        para1.innerHTML += "<br><br>";
        line_index++;
        char_index = 0;
        setTimeout(typeWriter, 200);
    }
    }
}
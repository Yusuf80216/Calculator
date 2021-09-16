function insert(num) {
    document.form.display.value = document.form.display.value+num;
}

function equal() {
    var exp = document.form.display.value;
   if(exp){ 
    document.form.display.value = eval(exp);
   }
}

function clean(){
    document.form.display.value = "";
}

function back(){
    var exp = document.form.display.value;
    document.form.display.value = exp.substring(0,exp.length-1)
}

const ballToggle = document.querySelector("#ball-toggle")
const body = document.querySelector("body")
    const themeChanger = document.querySelector(".theme-changer")
    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }
    function toggleTheme() {
       if (localStorage.getItem('theme') === 'theme-1'){
           setTheme('theme-2');
       } 
       else if(localStorage.getItem('theme') === 'theme-2') {
           setTheme('theme-3');
       }
       else {
           setTheme('theme-1');
       }
    }
    (function () {
        switch(localStorage.getItem('theme')) {
            case "theme-2":
                setTheme("theme-2");
                break;
            case "theme-3":
                setTheme("theme-3");
                break;
            default:
                setTheme("theme-1");
        }
    })();

    themeChanger.addEventListener("click", toggleTheme)



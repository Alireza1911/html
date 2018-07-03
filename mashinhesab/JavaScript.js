//کلیک بر روی off
var off = document.getElementById("off");
off.onclick = function () {
    debugger;
    var main = document.getElementById("main");
    var heith = 0;
    setInterval(fram, 1);
    function fram() {
        main.style.top = heith + 'px';
        heith = heith - 4;
    }
}
//تابع وارد کردن اعداد در مانیتور در هنگام کلیک بر روی انها
function seven(a) {
    var nom = a.innerHTML;
    var monitor = document.getElementById("monitor").innerHTML;
    document.getElementById("monitor").innerHTML = monitor + nom;
}
//کلیک بر روی اعداد
document.getElementById("7").onclick = function () {
    debugger;
    var a = document.getElementById("7");
    seven(a);
}

document.getElementById("4").onclick = function () {
    var a = document.getElementById("4");
    seven(a);
}
document.getElementById("1").onclick = function () {
    var a = document.getElementById("1");
    seven(a);
}
document.getElementById("2").onclick = function () {
    var a = document.getElementById("2");
    seven(a);
}
document.getElementById("3").onclick = function () {
    var a = document.getElementById("3");
    seven(a);
}
document.getElementById("5").onclick = function () {
    var a = document.getElementById("5");
    seven(a);
}
document.getElementById("6").onclick = function () {
    var a = document.getElementById("6");
    seven(a);
}
document.getElementById("8").onclick = function () {
    var a = document.getElementById("8");
    seven(a);
}
document.getElementById("9").onclick = function () {
    var a = document.getElementById("9");
    seven(a);
}
document.getElementById("0").onclick = zero;
    function zero() {
    var nom = document.getElementById("0").innerHTML;
    var monitor = document.getElementById("monitor").innerHTML;
    if (monitor == 0) {
        document.getElementById("monitor").innerHTML = '';
    }
    else {
        document.getElementById("monitor").innerHTML = monitor + nom;
    }
}
//توان
document.getElementById("pow").onclick = function () {
    var monitor = document.getElementById("monitor").innerHTML;
    document.getElementById("monitor").innerHTML = monitor * monitor;
}
//ریست
document.getElementById("c").onclick = function c() {
    document.getElementById("monitor").innerHTML = '';
}
//dot
document.getElementById("dot").onclick = function () {
    var nom = document.getElementById("dot").innerHTML;
    var monitor = document.getElementById("monitor").innerHTML;
    document.getElementById("monitor").innerHTML = monitor + nom;
}
//تقسیم
document.getElementById("division").onclick = function () {
    var nom = document.getElementById("division").innerHTML;
    var monitor = document.getElementById("monitor").innerHTML;
    chap(nom, monitor);
}
//مساوی
document.getElementById("equal").onclick = equal;
function equal() {
    debugger;
    var monitor = document.getElementById("monitor").innerHTML;
    var i = monitor.length;
    for (var j = 0; j < i; j++) {
        monitor = monitor.replace('×', '*');
    }
    monitor = eval(monitor);
    document.getElementById("monitor").innerHTML = monitor;
}
//ضرب
document.getElementById("multiplication").onclick = function () {
    var nom = document.getElementById("multiplication").innerHTML;
    var monitor = document.getElementById("monitor").innerHTML;
    chap(nom, monitor);
}
//تفریق
document.getElementById("min").onclick = function () {
    var nom = document.getElementById("min").innerHTML;
    var monitor = document.getElementById("monitor").innerHTML;
    chap(nom, monitor);
}
//جمع
document.getElementById("plus").onclick = function () {
    var nom = document.getElementById("plus").innerHTML;
    var monitor = document.getElementById("monitor").innerHTML;
    chap(nom, monitor);
}
//تابع چاپ مقادیر در مانیتور
function chap(nom, monitor) {
    var i = monitor.length;
    if (i == 9) {
        if (nom == '×' || nom == '/' || nom == '+') {
            monitor = document.getElementById("monitor").innerHTML;
            document.getElementById("monitor").innerHTML = monitor;
        }
        else {
            document.getElementById("monitor").innerHTML = monitor + nom;   
        }

    }
    else {
        if (nom!='-'&& (monitor[i - 1] == '×' || monitor[i - 1] == '/' || monitor[i - 1] == '+' || monitor[i - 1] == '-')) {
            document.getElementById("monitor").innerHTML = monitor;
        }
        else {
            document.getElementById("monitor").innerHTML = monitor + nom;
        }
    }
}

//کار با کیبورد
document.onkeypress = function (event) {
    var keycode = event.keyCode;
    var monitor = document.getElementById("monitor").innerHTML;
    var nom = String.fromCharCode(event.keyCode);
    //1-9
    if (keycode >= 49 && keycode <= 57) {
        document.getElementById("monitor").innerHTML = monitor+ String.fromCharCode(event.keyCode);
    }
    //0
    else if (keycode == 48) {
        zero();
    }
        //+
    else if (keycode == 43) {
        chap(nom, monitor);
    }
        //-
    else if (keycode == 45) {
        chap(nom, monitor);
    }
        //*
    else if (keycode == 42) {
        nom = '×';
        chap(nom, monitor);
    }
        //تقسیم
    else if (keycode == 47) {
        chap(nom, monitor);
    }
    else if (keycode == 61 || keycode==13) {
        equal();
    }
}

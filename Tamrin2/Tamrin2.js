
//رفتار دانشجو جدید
var newst = document.getElementById("creat");
var modal = document.getElementById("bmodal");
var zakhire = document.getElementById("zakhire");
newst.onclick = function () {
    modal.style.display = "block";
    zakhire.style.display = "inline";
    document.getElementById('virayesh').style.display = 'none'
}
// ساخت ارایه جهت ذخیره سازی اطلاعات
var formin = document.forms['formaraye'];
//بستن modal
function closemodal() {
    formin[0].value = "";
    formin[1].value = "";
    modal.style.display = "none";
}
document.getElementById("close1").onclick = closemodal;
//ساخت کلاس دانشجو
var student = [];
var num = 1;
function studentpro(num, fname, lname) {
    this.id = num;
    this.fname = fname;
    this.lname = lname;
}
//ذخیره اطلاعات مودال
document.getElementById("zakhire").onclick =
    function () {
        debugger;
        var objstu = new studentpro(num, formin[0].value, formin[1].value);
        student.push(objstu);
        localStorage.setItem("lastnum", num + 1);
        save_loc();
        tbody();
        closemodal();
    }
//ذخیره اطلاعات در لوکال استوریج
function save_loc() {
    debugger;
    if (Storage !== 'undefinded') {
        if (localStorage.student) {
            localStorage.removeItem('student');
            localStorage.setItem('student', JSON.stringify(student));
        }
        else {
            localStorage.setItem('student', JSON.stringify(student));
            localStorage.setItem('lastnum', num + 1);
        }
        get_loc();
    }
}
//استخراج اطلاعات از لوکال استوریج
function get_loc() {
    if (localStorage.student) {
        student = JSON.parse(localStorage.getItem('student'));
        num = Number(localStorage.getItem("lastnum"));
    }
}
//ساخت بدنه جدول
function tbody() {
    var tablebody = document.getElementById("modal_tbody");
    while (tablebody.childNodes.length > 0) {
        tablebody.removeChild(tablebody.firstChild);
    }
    var i = 0;
    student.forEach(function (stu_rec) {
        var satr = tablebody.insertRow(i++);
        var sot1 = satr.insertCell(0);
        var sot2 = satr.insertCell(1);
        var sot3 = satr.insertCell(2);
        var sot4 = satr.insertCell(3);
        sot1.innerHTML = stu_rec.id;
        sot2.innerHTML = stu_rec.fname;
        sot3.innerHTML = stu_rec.lname;
        sot4.id = "vira";
        var btn = document.createElement("button");
        btn.className = "info";
        btn.innerHTML = "حذف";
        btn.onclick = (function () { del_satr(stu_rec.id); });
        sot4.appendChild(btn);
        var btn1 = document.createElement("button");
        btn1.className = "info";
        btn1.innerHTML = 'ویرایش'
        btn1.onclick = (function () { edit_satr(stu_rec); });
        sot4.appendChild(btn1);
    })
}
//حذف سطر
function del_satr(id) {
    for (var i = 0; i < student.length; i++) {
        if (student[i].id == id) {
            student.splice(i, 1);
        }
    }
    save_loc();
    tbody();
}
//ویرایش سطر
var ed_id;
function edit_satr(stu_rec) {
    modal.style.display = "block";
    ed_id = stu_rec.id;
    formin[0].value = stu_rec.fname;
    formin[1].value = stu_rec.lname;
    zakhire.style.display = "none";
    document.getElementById('virayesh').style.display = "inline";
}
document.getElementById("virayesh").onclick = function () {
    student.forEach(function (item) {
        if (item.id == ed_id) {
            item.fname = formin[0].value;
            item.lname = formin[1].value;
            save_loc();
            tbody();
            closemodal();
        }
    })
}
//برگرداندن اطلاعات جدول به هنگام لود صفحه
window.onload = function () {
    get_loc();
    tbody();
}
//پاک کردن اطلاعات
document.getElementById("clinfo").onclick = function () {
    if (localStorage.student) {
        localStorage.removeItem("student");
        localStorage.removeItem("lastnum");
    }
    student = [];
    num = 1;
    tbody();
}
//مرتب سازی 
function sort(prop) {
    debugger;
    switch (prop) {
        case 'idso':
            for (var x = student.length; x > 1; x--) {
                for (var j = 0; j < x-1 ; j++) {
                    if (student[j].id > student[j + 1].id) {
                        var temp = student[j];
                        student[j] = student[j + 1];
                        student[j + 1] = temp;
                    }
                }

            }
            save_loc();
            tbody();
            break;
        case 'idno':
            for (var x = student.length; x > 1; x--) {
                for (var j = 0; j < x-1 ; j++) {
                    if (student[j].id < student[j + 1].id) {
                        var temp = student[j];
                        student[j]= student[j + 1];
                        student[j + 1] = temp;
                    }
                }

            }
            save_loc();
            tbody();
            break;
        case 'nameso':
            for (var x = student.length; x > 1; x--) {
                for (var j = 0; j < x-1 ; j++) {
                    if (student[j].fname > student[j + 1].fname) {
                        var temp = student[j];
                        student[j] = student[j + 1];
                        student[j + 1] = temp;
                    }
                }

            }
            save_loc();
            tbody();
            break;
        case 'nameno':
            for (var x = student.length; x >1; x--) {
                for (var j = 0; j < x-1 ; j++) {
                    if (student[j].fname < student[j + 1].fname) {
                        var temp = student[j];
                        student[j] = student[j + 1];
                        student[j + 1] = temp;
                    }
                }

            }
            save_loc();
            tbody();
            break;
        case 'lnameso':
            for (var x = student.length; x > 1; x--) {
                for (var j = 0; j < x-1 ; j++) {
                    if (student[j].lname > student[j + 1].lname) {
                        var temp = student[j];
                        student[j] = student[j + 1];
                        student[j + 1] = temp;
                    }
                }

            }
            save_loc();
            tbody();
            break;
        case 'lnameno':
            for (var x = student.length; x > 1; x--) {
                for (var j = 0; j < x-1 ; j++) {
                    if (student[j].lname < student[j + 1].lname) {
                        var temp = student[j];
                        student[j] = student[j + 1];
                        student[j + 1] = temp;
                    }
                }

            }
            save_loc();
            tbody();
            break;
}
}

//کلیک روی عکس اول
document.getElementById("image1").onclick = image1;
    function image1() {
    openmodal();
    document.getElementById("imageslide").src = "image/img_fjords_wide.jpg";
    document.getElementById("lab").innerHTML = 'Trolltunga, Norway';
    document.getElementById("image-modal-1").style.opacity = '1';
    document.getElementById("p").innerHTML = '1/4';
}
//کلیک روی عکس دوم
document.getElementById("image2").onclick = image2;
    function image2() {
    openmodal();
    document.getElementById("imageslide").src = "image/img_lights_wide.jpg";
    document.getElementById("lab").innerHTML = 'Northern Lights';
    document.getElementById("image-modal-2").style.opacity = '1';
    document.getElementById("p").innerHTML = '2/4';
}
    //کلیک روی عکس سوم
    document.getElementById("image3").onclick = image3;
    function image3() {
    openmodal();
    document.getElementById("imageslide").src = "image/img_mountains_wide.jpg";
    document.getElementById("lab").innerHTML = 'Mountains and fjords';
    document.getElementById("image-modal-3").style.opacity = '1';
    document.getElementById("p").innerHTML = '3/4';
}
    //کلیک روی عکس چهارم
    document.getElementById("image4").onclick = image4;
    function image4() {
    openmodal();
    document.getElementById("imageslide").src = "image/img_nature_wide.jpg";
    document.getElementById("lab").innerHTML = 'Nature and sunrise';
    document.getElementById("image-modal-4").style.opacity = '1';
    document.getElementById("p").innerHTML = '4/4';
}
//رفتار ایکون بستن مودال
document.getElementById("close").onclick = closemodal;
//باز کردن مودال در هنگام کلیک بر روی عکسها
function openmodal() {
    document.getElementById("basemodal").style.display = 'block';
}
//تابع بستن مودال
function closemodal() {
    document.getElementById("basemodal").style.display = 'none';
    document.getElementById("image-modal-1").style.opacity = '0.2';
    document.getElementById("image-modal-2").style.opacity = '0.2';
    document.getElementById("image-modal-3").style.opacity = '0.2';
    document.getElementById("image-modal-4").style.opacity = '0.2';
}
//رفتار تصاویر اخر مودال
document.getElementById("image-modal-1").onclick = image1;
document.getElementById("image-modal-2").onclick = image2;
document.getElementById("image-modal-3").onclick = image3;
document.getElementById("image-modal-4").onclick = image4;
//رفتار کلیک بر روی ایکون راست رو
document.getElementById("right").onclick = function () {
    switch (document.getElementById('p').innerHTML ) {
        case '1/4':
            image2();
            break;
        case '2/4':
            image3();
            break;
        case '3/4':
            image4();
            break;
        case '4/4':
            image1();
            break;
    }
}
document.getElementById("left").onclick = function () {
    switch (document.getElementById('p').innerHTML) {
        case '1/4':
            image4();
            break;
        case '2/4':
            image1();
            break;
        case '3/4':
            image2();
            break;
        case '4/4':
            image3();
            break;
    }
}

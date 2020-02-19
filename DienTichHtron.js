function SC () {
    let bkinh = parseInt(document.getElementById("bankinh").value)
    let pi=3.14;
    let S=bkinh*bkinh*pi;
    let C=2*pi*bkinh;
    document.getElementById("SC1").innerHTML = "Dien Tich Hinh Tron la: "+S+"<br> CHU VI HINH TRON LA: "+C;

}
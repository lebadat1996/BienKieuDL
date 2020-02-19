function TinhNhietDof() {
    let Doc =parseInt(document.getElementById("nhietdo").value);
    let doF =(9/5)*Doc + 32;
    document.getElementById("nhietdoF").innerHTML = "nhiet do f la: "+ doF;
}
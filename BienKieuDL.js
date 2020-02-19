function tongdiem() {
    let Dtoan = parseInt(document.getElementById("Toan").value);
    let Dly = parseInt(document.getElementById("Ly").value);
    let DHoa = parseInt(document.getElementById("Hoa").value);
    let DSinh = parseInt(document.getElementById("Sinh").value);
    let sum = Dtoan + Dly + DHoa + DSinh;
    let resulet = sum / 4 ;
    document.getElementById("resulet").innerHTML="Diem cua ban la " + sum + " <br>Diem trung binh cua ban la: "+ resulet;
}
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
     }else if(35<=bmi){
    result = 'Extremely obese';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}





// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function hitungBMI(berat, tinggi) {
  // Konversi tinggi dalam meter
  tinggi = tinggi / 100;

  // Hitung BMI
  var bmi = berat / (tinggi * tinggi);

  // Menentukan kategori
  var kategori = "";
  if (bmi < 18.5) {
    kategori = "Kurus";
  } else if (bmi >= 18.5 && bmi < 25) {
    kategori = "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    kategori = "Gemuk";
  } else {
    kategori = "Obesitas";
  }

  // Mengembalikan hasil BMI dan kategori
  return {
    bmi: bmi.toFixed(2),
    kategori: kategori,
  };
}

// Contoh penggunaan fungsi hitungBMI
var beratBadan = 80; // dalam kilogram
var tinggiBadan = 170; // dalam centimeter

var hasil = hitungBMI(beratBadan, tinggiBadan);

console.log("BMI:", hasil.bmi);
console.log("Kategori:", hasil.kategori);

// Pernyataan dan tindakan berdasarkan kategori BMI
if (hasil.kategori === "Gemuk" || hasil.kategori === "Obesitas") {
  console.log("Anda dianjurkan untuk menurunkan berat badan hingga batas normal.");
}

if (hasil.kategori === "Obesitas") {
  console.log("Anda dianjurkan untuk berkonsultasi dengan ahli gizi.");
}

if (hasil.kategori === "Obesitas") {
  console.log("Anda dianjurkan untuk melakukan registrasi pada ahli gizi.");
}

if (hasil.kategori === "Kurus") {
  console.log("Anda dianjurkan untuk berkonsultasi dengan dokter untuk penanganan lebih lanjut.");
}
// Fungsi untuk menghitung BMI
function calculateBMI() {
  // Mendapatkan nilai input tinggi dan berat badan
  var tinggiBadan = parseFloat(document.getElementById('tinggi').value);
  var beratBadan = parseFloat(document.getElementById('berat').value);

  // Menghitung BMI
  var bmi = beratBadan / Math.pow(tinggiBadan, 2);

  // Menampilkan hasil BMI
  document.getElementById('hasilBMI').innerHTML = 'BMI Anda: ' + bmi.toFixed(2);

  // Memberikan saran konsultasi berdasarkan BMI
  var saran = '';

  if (bmi < 18.5) {
    saran = 'Anda memiliki berat badan kurang.';
  } else if (bmi >= 18.5 && bmi < 25) {
    saran = 'Berat badan Anda normal.';
  } else if (bmi >= 25 && bmi < 30) {
    saran = 'Anda memiliki berat badan berlebih (kegemukan).';
  } else {
    saran = 'Anda menderita obesitas.';
  }

  // Menampilkan saran konsultasi
  document.getElementById('saranKonsultasi').innerHTML = saran;
}

// Memanggil fungsi calculateBMI saat tombol diklik
document.getElementById('tombolHitung').addEventListener('click', calculateBMI);

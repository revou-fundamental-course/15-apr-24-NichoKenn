// Ini File js

// Ini Untuk Validasi Hanya Angka (C dan F)
function convert() {
    let celcius = document.getElementById("c-to-f-input").value;
    let fahrenheit = document.getElementById("c-to-f-output").value;
    if (isNaN(celcius)) {
        alert("Tolong Input Nomor Saja!");
    } else {
        if (isNaN(fahrenheit)) {
            alert ("Tolong Input Nomor Saja!");
        }
    }
    console.log(celcius, fahrenheit);
} 

document.getElementById("button-convert").addEventListener('click', () => convert());


// Ini Untuk Konversi Suhu Celsius ke Fahrenheit
document.getElementById('button-convert').onclick = convertTemperature;
document.getElementById('button-reset').onclick = clearTextarea;

function convertTemperature() {
    
    let celcius = document.getElementById("c-to-f-input").value;
    let fahrenheit = document.getElementById("c-to-f-output").value;

    if (celcius != '') {
        fahrenheit = (parseFloat(celcius) * 1.8) + 32;

    document.getElementById('c-to-f-input').value = parseFloat(celcius).toFixed(1);
    document.getElementById('c-to-f-output').value = parseFloat(fahrenheit).toFixed(1);

    let resultText = "°Fahrenheit = (°Celcius × 9/5) + 32\r\n= (" + celcius + " × 9/5) + 32\r\n = " + fahrenheit.toFixed(1) + " °F";
    document.getElementById("Temp-Calculation").textContent = resultText;

    } else {
        celcius = (parseFloat (fahrenheit) - 32) / 1.8;
    
    document.getElementById('c-to-f-input').value = parseFloat(celcius).toFixed(1);
    document.getElementById('c-to-f-output').value = parseFloat(fahrenheit).toFixed(1);
    
    let resultText = "°Celcius = (°Fahrenheit - 32) × 5/9\r\n= (" + fahrenheit + " - 32) × 5/9\r\n = " + celcius.toFixed(1) + " °C";
    document.getElementById("Temp-Calculation").textContent = resultText;
    }

}   

// Ini Untuk Reset Suhu Celsius ke Fahrenheit
function clearTextarea() {
    document.getElementsById('c-to-f-input').value = '';
    document.getElementsById('c-to-f-output').value = '';
    document.getElementById('Temp-Calculation').textContent = '';
}

// Ini Tombol Reverse Untuk Menukar Posisi
let isReverse = true;

function reverse1() {
    let cToF = document.getElementById('c-to-f');
    let fToC = document.getElementById('f-to-c');

        console.log(isReverse)
        fToC.style.display = "block";
        cToF.style.display = "none";
        alert("Tombol Ini Sedang Dalam Perbaikan. Klik Tombol Reset Lalu Isi Langsung Pada Kolom Fahrenheit Untuk Konversi")

}

function reverse2() {
    let cToF = document.getElementById('c-to-f');
    let fToC = document.getElementById('f-to-c');

        console.log(isReverse)
        fToC.style.display = "none";
        cToF.style.display = "block";  
    } 
    
// Langkah 1: Buat array dengan 100 nilai acak
let randomNumbers = [];
for (let i = 0; i < 100; i++) {
    randomNumbers.push(Math.floor(Math.random() * 50) + 1);
}

// Langkah 2: Pisahkan menjadi array genap dan ganjil
let evenArray = [];
let oddArray = [];
for (let i = 0; i < randomNumbers.length; i++) {
    if (i % 2 === 0) {
        evenArray.push(randomNumbers[i]);
    } else {
        oddArray.push(randomNumbers[i]);
    }
}

// Fungsi untuk menghitung Min
function findMin(arr) {
    let min = arr[0];
    for (let num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

// Fungsi untuk menghitung Max
function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

// Fungsi untuk menghitung Total
function calculateTotal(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}

// Fungsi untuk menghitung Rata-rata
function calculateAverage(arr) {
    return calculateTotal(arr) / arr.length;
}

// Langkah 3: Hitung Min, Max, Total, dan Rata-rata
let evenMin = findMin(evenArray);
let evenMax = findMax(evenArray);
let evenTotal = calculateTotal(evenArray);
let evenAverage = calculateAverage(evenArray);

let oddMin = findMin(oddArray);
let oddMax = findMax(oddArray);
let oddTotal = calculateTotal(oddArray);
let oddAverage = calculateAverage(oddArray);

// Langkah 4: Bandingkan kedua array
console.log("Even Array Min:", evenMin, "Odd Array Min:", oddMin);
console.log("Even Array Max:", evenMax, "Odd Array Max:", oddMax);
console.log("Even Array Total:", evenTotal, "Odd Array Total:", oddTotal);
console.log("Even Array Average:", evenAverage, "Odd Array Average:", oddAverage);

// Logika Perbandingan
if (evenMin > oddMin) {
    console.log("Min array genap lebih besar dari min array ganjil");
} else {
    console.log("Min array ganjil lebih besar dari min array genap");
}

if (evenMax > oddMax) {
    console.log("Max array genap lebih besar dari max array ganjil");
} else {
    console.log("Max array ganjil lebih besar dari max array genap");
}

if (evenTotal === oddTotal) {
    console.log("Kedua array memiliki Total yang sama");
} else {
    console.log("Total kedua array berbeda");
}

if (evenAverage > oddAverage) {
    console.log("Rata-rata array genap lebih besar dari rata-rata array ganjil");
} else {
    console.log("Rata-rata array ganjil lebih besar dari rata-rata array genap");
}

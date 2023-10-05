window.onload = () => {
    const button = document.querySelector('#calculate');
    button.addEventListener('click', hitung)
}

function hitung() {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height < 0) {
        result.innerText = "Fill the empty form!";
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = "Fill the empty form!";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
        result.innerText = `Under Weight: ${bmi}`; 
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal: ${bmi}`;
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `Over Weight: ${bmi}`;
    } else {
        result.innerText = `Obesity: ${bmi}`;
    }
}
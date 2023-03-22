window.onload = () => {
    let button = document.querySelector('#btn');
    button.addEventListener('click', BMI);
}

function BMI() {
    let h = parseInt(document.querySelector('#h').value);
    let w = parseInt(document.querySelector('#w').value);
    let result = document.querySelector('#result');
    // console.log(h);
    if ((h == '' || isNaN(h) || h < 0) && (w == '' || isNaN(w) || w < 0))
        result.innerHTML = 'Please provide a valid height and weight';
    if (h == '' || isNaN(h) || h < 0)
        result.innerHTML = 'Please provide a valid height';
    else if (w == '' || isNaN(w) || w < 0)
        result.innerHTML = 'Please provide a valid weight';
    else {
        let bmi = (w / ((h * h) / 10000)).toFixed(2);

        if (bmi < 18.5)
            result.innerHTML = `Under weight : <span>${bmi}</span>`;
        else if (bmi >= 18.5 && bmi < 25)
            result.innerHTML = `Normal : <span>${bmi}</span>`;
        else if (bmi >= 25 && bmi < 30)
            result.innerHTML = `Over weight : <span>${bmi}</span>`;
        else if (bmi >= 30 && bmi < 35)
            result.innerHTML = `Obese : <span>${bmi}</span>`;
        else
            result.innerHTML = `Extremely Obese : <span>${bmi}</span>;`
    }

}
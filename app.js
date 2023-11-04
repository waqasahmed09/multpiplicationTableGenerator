function generateTable() {
    const inputNumber = document.getElementById('inputNumber').value;
    let result = '';

    if (inputNumber !== '') {
      for (let i = 1; i <= 10; i++) {
        result += `${inputNumber} x ${i} = ${inputNumber * i}<br>`;
      }

      document.getElementById('tableContainer').innerHTML = result;
    }

    document.getElementById('inputNumber').value = '';
  }

let subjectCount = 0;

const addYearBtnElement = document.getElementById('add-year-btn');
const CGPAFormElement = document.getElementById("cgpaForm");

const modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function addYear() {
  subjectCount++;
  const subjectInputs = document.getElementById('subjectInputs');
  const newSubjectInput = document.createElement('div');
  newSubjectInput.classList.add('subjectInput');
  newSubjectInput.innerHTML = `
    <h2>${toYears(subjectCount)}</h2>
    <label for="yearCreditHours">Total Credit Hours of the year:</label>
    <input type="number" id="yearCreditHours" name="creditHours" min='0' required>
    <label for="grade">GPA:</label>
    <input type="number" id="grade" name="grade" min="0" max="4" required>
      `;
  subjectInputs.appendChild(newSubjectInput);
  if (subjectCount === 4) {
    addYearBtnElement.style.display = 'none';
}
}

function toYears(i){
    switch (i) {
        case 1:
            return 'Second Year';
        case 2:
            return 'Third Year';
        case 3:
            return 'Fourth Year';
        case 4:
            return 'Fifth Year';
        default:
            return 0;
    }
    
}

function calculateCGPA(event) {
    event.preventDefault();
    // get form data from event
    var data = new FormData(event.target);
    data = data.entries();
    var obj = data.next();
    var retrieved = {};
    while (undefined !== obj.value) {
      // append value to array of values
      retrieved[obj.value[0]] = [
        ...(retrieved[obj.value[0]] || []),
        obj.value[1],
      ];
      obj = data.next();
    }
    const { creditHours, grade } = retrieved;
  
    let sum = 0;
    let totalCreditHours = 0;
    for (let i = 0; i < creditHours.length; i++) {
      sum += parseFloat(creditHours[i]) * parseFloat(grade[i]);
      totalCreditHours += parseFloat(creditHours[i]);
    }
    let gpa = sum / totalCreditHours;
  
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = gpa.toFixed(2);
    modal.style.display = "block";
  }
  

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

span.onclick = function () {
  modal.style.display = 'none';
};

addYearBtnElement.addEventListener('click', addYear);
CGPAFormElement.addEventListener('submit', calculateCGPA);

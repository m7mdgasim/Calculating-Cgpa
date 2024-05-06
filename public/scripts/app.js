let subjectCount = 1;

const addSubjectBtnElement = document.getElementById("add-subject-btn");
const calculateGPABtnElement = document.getElementById("calculate-subject-btn");
const formElement = document.getElementById("gpaForm");
const modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function addSubject() {
  subjectCount++;
  const subjectInputs = document.getElementById("subjectInputs");
  const newSubjectInput = document.createElement("div");
  newSubjectInput.classList.add("subjectInput");
  newSubjectInput.innerHTML = `
        <label for="creditHours${subjectCount}">Credit Hours:</label>
        <input type="number" id="creditHours${subjectCount}" name="creditHours" min="1" max="6" required>
        <label for="grade${subjectCount}">Grade:</label>
        <select id="grade${subjectCount}" name="grade" required>
            <option value=4.00>A+</option>
            <option value=3.60>A</option>
            <option value=3.00>B+</option>
            <option value=2.60>B</option>
            <option value=2.00>C</option>
        </select>
    `;
  subjectInputs.appendChild(newSubjectInput);
}

function calculateGPA(event) {
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
    modal.style.display = "none";
  }
};

span.onclick = function () {
  modal.style.display = "none";
};

addSubjectBtnElement.addEventListener("click", addSubject);
formElement.addEventListener("submit", calculateGPA);




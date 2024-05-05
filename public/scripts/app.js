let subjectCount = 1;

const addSubjectBtnElement = document.getElementById("add-subject-btn");
const calculateGPABtnElement = document.getElementById("calculate-subject-btn");

function addSubject() {
    subjectCount++;
    const subjectInputs = document.getElementById('subjectInputs');
    const newSubjectInput = document.createElement('div');
    newSubjectInput.classList.add('subjectInput');
    newSubjectInput.innerHTML = `
        <label for="creditHours${subjectCount}">Credit Hours:</label>
        <input type="number" id="creditHours${subjectCount}" name="creditHours" min="1" max="6" required>
        <label for="grade${subjectCount}">Grade:</label>
        <select id="grade${subjectCount}" name="grade" required>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
    `;
    subjectInputs.appendChild(newSubjectInput);
}

function calculateGPA(event) {
    let gpa = 0;

    event.preventDefault();
    const fromData = new FormData(event.target);
    console.log(formData)

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your GPA: ${gpa}`;
}

function getGradePoints(grade) {
    switch (grade) {
        case 'A+':
            return 4.00;
        case 'A':
            return 3.60;
        case 'B+':
            return 3.00;
        case 'B':
            return 2.60;
        case 'C':
            return 2.00;
        default:
            return 0;
    }
}

addSubjectBtnElement.addEventListener("click", addSubject);
calculateGPABtnElement.addEventListener("click", calculateGPA);

function generateResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var company = document.getElementById('company').value;
    var role = document.getElementById('role').value;
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p>Email: ").concat(email, "</p>\n        <p>Role: ").concat(role, "</p>\n        ");
        resumeOutput.style.display = 'block';
    }
}

function generateResume () {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLInputElement).value;

    const resumeOutput = document.getElementById ('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Role: ${role}</p>
        `;
        resumeOutput.style.display = 'block';

    }

}

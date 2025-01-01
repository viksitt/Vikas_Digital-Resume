
document.getElementById('generateResume').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value;
    const projects = document.getElementById('projects').value;

    document.getElementById('displayName').innerText = name;
    document.getElementById('displayEmail').innerText = email;
    document.getElementById('displayLinkedIn').innerText = linkedin;
    document.getElementById('displayLinkedIn').href = linkedin;
    document.getElementById('displaySummary').innerText = summary;
    document.getElementById('displaySkills').innerText = skills;
    document.getElementById('displayProjects').innerText = projects;

    document.getElementById('resume').classList.remove('hidden');
});

document.getElementById('downloadResume').addEventListener('click', function () {
    const resume = document.getElementById('resume').innerHTML;
    const blob = new Blob([resume], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.html';
    link.click();
});

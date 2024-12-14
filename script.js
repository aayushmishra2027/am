const roles = ["Web Developer", "Designer", "Content Creator", "Tech Enthusiast"];
let index = 0;
let currentRole = '';
let letterIndex = 0;

function type() {
    if (letterIndex < roles[index].length) {
        currentRole += roles[index].charAt(letterIndex);
        document.querySelector('.typing-animation').textContent = currentRole;
        letterIndex++;
        setTimeout(type, 150); // Adjust typing speed here
    } else {
        setTimeout(deleteRole, 2000); // Wait before deleting
    }
}

function deleteRole() {
    if (letterIndex > 0) {
        currentRole = currentRole.slice(0, -1);
        document.querySelector('.typing-animation').textContent = currentRole;
        letterIndex--;
        setTimeout(deleteRole, 100); // Adjust deleting speed here
    } else {
        index = (index + 1) % roles.length; // Move to the next role
        setTimeout(type, 500); // Wait before typing the next role
    }
}

// Start the typing effect
type();

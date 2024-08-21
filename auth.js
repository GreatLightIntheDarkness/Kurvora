function initAuth() {
    // Initialize Google Sign-In
    gapi.load('auth2', function() {
        gapi.auth2.init();
    });

    document.getElementById('signInButton').onclick = () => {
        gapi.auth2.getAuthInstance().signIn().then((user) => {
            console.log("User signed in: " + user.getBasicProfile().getName());
            // Additional user sign-in logic
        });
    };

    // Username check
    document.getElementById('username').oninput = (e) => {
        const username = e.target.value;
        if (isInappropriate(username)) {
            alert("Inappropriate username detected.");
        }
    };

    // Password policy
    document.getElementById('password').oninput = (e) => {
        const password = e.target.value;
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
        }
    };
}

function isInappropriate(username) {
    // Basic check against a list of banned words
    const bannedWords = ["badword1", "badword2"];
    return bannedWords.some(word => username.includes(word));
}

initAuth();

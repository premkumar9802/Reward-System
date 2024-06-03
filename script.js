let user = {
    username: 'Premkumar',
    points: 0,
    badges: []
};

function updateProfile() {
    document.getElementById('username').textContent = user.username;
    document.getElementById('points').textContent = user.points;
    document.getElementById('badges').textContent = user.badges.length > 0 ? user.badges.join(', ') : 'None';
}

function postQuestion() {
    user.points += 5; 
    checkForBadges();
    updateProfile();
}

function postAnswer() {
    user.points += 10; 
    checkForBadges();
    updateProfile();
}

function receiveUpvote() {
    user.points += 2;
    checkForBadges();
    updateProfile();
}

function checkForBadges() {
    if (user.points >= 50 && !user.badges.includes('Contributor')) {
        user.badges.push('Contributor');
        alert('Congratulations! You earned the Contributor badge!');
    }
    if (user.points >= 100 && !user.badges.includes('Expert')) {
        user.badges.push('Expert');
        alert('Congratulations! You earned the Expert badge!');
    }
}

updateProfile();

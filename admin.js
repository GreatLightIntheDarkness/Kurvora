function initAdminPanel() {
    // Admin functions for managing users, items, etc.
    document.getElementById('banUserButton').onclick = () => {
        const username = document.getElementById('banUsername').value;
        banUser(username);
    };

    document.getElementById('createItemButton').onclick = () => {
        const itemName = document.getElementById('itemName').value;
        createItem(itemName);
    };
}

function banUser(username) {
    console.log(`User ${username} has been banned.`);
    // Actual ban logic
}

function createItem(itemName) {
    console.log(`Item ${itemName} has been created.`);
    // Item creation logic
}

initAdminPanel();

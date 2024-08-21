function showMenu(menuId) {
    const menu = document.getElementById(menuId);
    menu.style.display = 'block';
}

function hideMenu(menuId) {
    const menu = document.getElementById(menuId);
    menu.style.display = 'none';
}

// Show FPS, ping, etc.
function updateHUD() {
    const fpsDisplay = document.getElementById('fps');
    const pingDisplay = document.getElementById('ping');

    // Get current FPS, ping, etc.
    fpsDisplay.textContent = `FPS: ${getFPS()}`;
    pingDisplay.textContent = `Ping: ${getPing()}ms`;
}

setInterval(updateHUD, 1000);

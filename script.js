// Menu Navigation State
let currentMenuIndex = 0;
let currentScreen = 'home';
const menuItems = document.querySelectorAll('.menu-item');

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 Game Portfolio Initialized');
    updateMenuSelection();
    addKeyboardControls();
    playStartupSound();
});

// Update menu selection visual
function updateMenuSelection() {
    menuItems.forEach((item, index) => {
        if (index === currentMenuIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Navigate menu with up/down
function navigateMenu(direction) {
    if (currentScreen !== 'home') return;
    
    currentMenuIndex += direction;
    
    // Wrap around
    if (currentMenuIndex < 0) {
        currentMenuIndex = menuItems.length - 1;
    } else if (currentMenuIndex >= menuItems.length) {
        currentMenuIndex = 0;
    }
    
    updateMenuSelection();
    playBeep();
}

// Select menu item (Enter or A button)
function selectMenuItem() {
    if (currentScreen !== 'home') return;
    
    const selectedItem = menuItems[currentMenuIndex];
    const screenName = selectedItem.getAttribute('data-screen');
    
    if (screenName) {
        navigateToScreen(screenName);
    }
}

// Navigate to a specific screen
function navigateToScreen(screenName) {
    const homeScreen = document.getElementById('home-screen');
    const targetScreen = document.getElementById(`${screenName}-screen`);
    
    if (!targetScreen) return;
    
    // Hide current screen
    homeScreen.classList.remove('active');
    
    // Show target screen with animation
    setTimeout(() => {
        targetScreen.classList.add('active');
        currentScreen = screenName;
        playSelect();
    }, 100);
}

// Go back to home screen (B button)
function goBack() {
    if (currentScreen === 'home') return;
    
    const currentScreenElement = document.getElementById(`${currentScreen}-screen`);
    const homeScreen = document.getElementById('home-screen');
    
    // Hide current screen
    if (currentScreenElement) {
        currentScreenElement.classList.remove('active');
    }
    
    // Show home screen
    setTimeout(() => {
        homeScreen.classList.add('active');
        currentScreen = 'home';
        playBeep();
    }, 100);
}

// Keyboard Controls
function addKeyboardControls() {
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowUp':
                e.preventDefault();
                navigateMenu(-1);
                break;
            case 'ArrowDown':
                e.preventDefault();
                navigateMenu(1);
                break;
            case 'Enter':
                e.preventDefault();
                if (currentScreen === 'home') {
                    selectMenuItem();
                }
                break;
            case 'Escape':
            case 'Backspace':
                e.preventDefault();
                goBack();
                break;
            case 'a':
            case 'A':
                selectMenuItem();
                break;
            case 'b':
            case 'B':
                goBack();
                break;
        }
    });
}

// Sound Effects (using Web Audio API)
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let soundEnabled = true;

function playBeep() {
    if (!soundEnabled) return;
    
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 400;
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        console.log('Audio not available');
    }
}

function playSelect() {
    if (!soundEnabled) return;
    
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.1);
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
    } catch (e) {
        console.log('Audio not available');
    }
}

function playStartupSound() {
    if (!soundEnabled) return;
    
    try {
        const notes = [523.25, 659.25, 783.99]; // C, E, G
        let delay = 0;
        
        notes.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = freq;
                oscillator.type = 'square';
                
                gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.2);
            }, delay);
            
            delay += 150;
        });
    } catch (e) {
        console.log('Audio not available');
    }
}

// Click handlers for menu items (mouse support)
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentMenuIndex = index;
        updateMenuSelection();
        selectMenuItem();
    });
    
    item.addEventListener('mouseenter', () => {
        if (currentScreen === 'home') {
            currentMenuIndex = index;
            updateMenuSelection();
        }
    });
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    const device = document.querySelector('.device-body');
    device.style.animation = 'rainbow 2s linear infinite';
    
    // Add rainbow animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Play victory sound
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        const notes = [523, 587, 659, 784, 880, 988];
        let time = audioContext.currentTime;
        
        notes.forEach(freq => {
            oscillator.frequency.setValueAtTime(freq, time);
            time += 0.1;
        });
        
        oscillator.type = 'square';
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.6);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.6);
    } catch (e) {
        console.log('Audio not available');
    }
    
    console.log('🎉 Konami Code Activated! You found the secret!');
    
    // Reset after 5 seconds
    setTimeout(() => {
        device.style.animation = 'floatDevice 6s ease-in-out infinite';
    }, 5000);
}

// Prevent default behavior for arrow keys to avoid page scrolling
window.addEventListener('keydown', (e) => {
    if(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up
            navigateMenu(1);
        } else {
            // Swipe down
            navigateMenu(-1);
        }
    }
}

// Log controls info
console.log(`
╔═══════════════════════════════════════╗
║   🎮 GAME PORTFOLIO CONTROLS 🎮      ║
╠═══════════════════════════════════════╣
║ ↑ / ↓  - Navigate menu               ║
║ Enter  - Select menu item             ║
║ Escape - Go back to home              ║
║ A      - Select (alternative)         ║
║ B      - Back (alternative)           ║
║                                        ║
║ Try the Konami Code for a surprise!   ║
║ ↑↑↓↓←→←→BA                            ║
╚═══════════════════════════════════════╝
`);

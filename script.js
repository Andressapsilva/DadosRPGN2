// script.js
document.addEventListener('DOMContentLoaded', () => {
    const diceSelect = document.getElementById('diceSelect');
    const diceContainer = document.querySelector('.dice-container');
  
    diceSelect.addEventListener('change', (event) => {
      const selectedDice = event.target.value;
      updateDice(selectedDice);
    });
  
    document.getElementById('rollButton').addEventListener('click', () => {
      rollDice();
    });
  
    function updateDice(diceType) {
      const dice = document.querySelector('.dice');
      dice.className = 'dice';  // Reset class
      dice.classList.add(diceType);
      updateDiceFaces(diceType);
    }
  
    function updateDiceFaces(diceType) {
      const dice = document.querySelector('.dice');
      dice.innerHTML = '';  // Clear existing faces
  
      let numberOfSides = 6;
      if (diceType === 'd4') numberOfSides = 4;
      else if (diceType === 'd6') numberOfSides = 6;
      else if (diceType === 'd8') numberOfSides = 8;
      else if (diceType === 'd10') numberOfSides = 10;
      else if (diceType === 'd12') numberOfSides = 12;
      else if (diceType === 'd20') numberOfSides = 20;
      else if (diceType === 'd30') numberOfSides = 30;
  
      for (let i = 1; i <= numberOfSides; i++) {
        const side = document.createElement('div');
        side.classList.add('side');
        side.innerText = i;
        dice.appendChild(side);
      }
    }
  
    function rollDice() {
      const dice = document.querySelector('.dice');
      const numberOfSides = dice.children.length;
      const randomSide = Math.floor(Math.random() * numberOfSides);
      dice.style.transform = `rotateX(${360 * Math.random()}deg) rotateY(${360 * Math.random()}deg)`;
      setTimeout(() => {
        alert(`Você rolou um ${randomSide + 1}`);
      }, 1000);  // Adjust time to match transition
    }
  
    // Initialize with default dice
    updateDice('d6');
  });
  
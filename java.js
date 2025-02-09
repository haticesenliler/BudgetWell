let savings = []; 
let dailyEntries = []; 


function addSavings() {
    const amountInput = document.getElementById('amount-input');
    const amount = parseFloat(amountInput.value);

    if (!isNaN(amount) && amount > 0) {
        savings.push(amount); 
        updateSavingsDisplay(); 
        amountInput.value = ''; 
        saveData(); 
    }
}

function updateSavingsDisplay() {
    const savingsList = document.getElementById('savings-list');
    const totalSavingsDisplay = document.getElementById('total-savings');

    savingsList.innerHTML = ''; 
    let total = 0;

    for (let i = 0; i < savings.length; i++) {
        const amount = savings[i];
        total += amount;

        const listItem = document.createElement('li');
        listItem.className = 'savings-item';
        listItem.textContent = `+$${amount.toFixed(2)}`;
        savingsList.appendChild(listItem);
    }

    totalSavingsDisplay.textContent = `Total Saved: $${total.toFixed(2)}`;
}


function resetBudget() {
    savings = []; 
    updateSavingsDisplay(); 
    saveData(); 
}


function addTask() {
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('reminder-date');
    const taskList = document.getElementById('task-list');

    if (taskInput.value && dateInput.value) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${taskInput.value}</span>
            <div>
                <span class="entry-date">${new Date(dateInput.value).toLocaleDateString()}</span>
                <button class="delete-btn" onclick="deleteTask(this)">×</button>
            </div>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}


function deleteTask(button) {
    button.closest('li').remove();
}

function resetReminders() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
}


function saveDailyEntry() {
    const dailyInput = document.getElementById('daily-input');
    const entryText = dailyInput.value;

    if (entryText.trim() !== '') {
        dailyEntries.push(entryText);
        updateDailyDisplay();
        dailyInput.value = '';
        saveData();
    }
}

function updateDailyDisplay() {
    const dailyEntriesDiv = document.getElementById('daily-entries');
    dailyEntriesDiv.innerHTML = ''; 

    for (let i = 0; i < dailyEntries.length; i++) {
        const entry = dailyEntries[i];
        const entryElement = document.createElement('p');
        entryElement.textContent = entry;
        dailyEntriesDiv.appendChild(entryElement);
    }
}


function resetDaily() {
    dailyEntries = [];
    updateDailyDisplay();
    saveData();
}

 
function saveData() {
    localStorage.setItem('savings', JSON.stringify(savings));
    localStorage.setItem('dailyEntries', JSON.stringify(dailyEntries));
}


function loadData() {
    const savedSavings = localStorage.getItem('savings');
    if (savedSavings) {
        savings = JSON.parse(savedSavings);
    }

    const savedDailyEntries = localStorage.getItem('dailyEntries');
    if (savedDailyEntries) {
        dailyEntries = JSON.parse(savedDailyEntries);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadData(); 
    updateSavingsDisplay(); 
    updateDailyDisplay(); 
});

document.addEventListener("DOMContentLoaded", loadReminders);

document.getElementById("reminderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;
    let hour = document.getElementById("hour").value;

    let reminder = { title, month, day, hour };
    saveReminder(reminder);
    displayReminder(reminder);
});

function saveReminder(reminder) {
    let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    reminders.push(reminder);
    localStorage.setItem("reminders", JSON.stringify(reminders));
}

function loadReminders() {
    let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    reminders.forEach(displayReminder);
}

function displayReminder(reminder) {
    let list = document.getElementById("reminderList");
    let listItem = document.createElement("li");
    listItem.textContent = `${reminder.title} - ${reminder.month}/${reminder.day} at ${reminder.hour}:00`;
    list.appendChild(listItem);
}

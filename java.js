document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class 'column'
    const columns = document.querySelectorAll(".column");

    // Add a click event listener to each column
    columns.forEach(column => {
        column.addEventListener("click", function () {
            // Check if an info box already exists under this column
            let existingBox = this.querySelector(".info-box");

            if (existingBox) {
                // If the box exists, remove it (toggle effect)
                existingBox.remove();
            } else {
                // If the box doesn't exist, create it
                const infoBox = document.createElement("div");
                infoBox.classList.add("info-box");

                // Get the title of the clicked column
                const columnTitle = this.querySelector("h2").textContent;

                // Set the content of the info box based on the column title
                let content = "";
                if (columnTitle === "Bill Payments") {
                    content = `<p>Set reminders for bills like electricity, water, and internet. Stay on top of your payments!</p>`;
                } else if (columnTitle === "Debt Repayment") {
                    content = `<p>Track and manage your debts, including loans and money owed to friends or family.</p>`;
                } else if (columnTitle === "Other Notifications") {
                    content = `<p>Get reminders for important deadlines, meetings, or personal tasks.</p>`;
                }

                // Add the content to the info box
                infoBox.innerHTML = content;

                // Append the info box to the clicked column
                this.appendChild(infoBox);
            }
        });
    });
});
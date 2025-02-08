document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class 'column'
    const columns = document.querySelectorAll(".column");

    columns.forEach(column => {
        column.addEventListener("click", function () {
            // Check if a box already exists under this column
            let existingBox = this.querySelector(".info-box");

            if (existingBox) {
                // If box exists, remove it (toggle effect)
                existingBox.remove();
            } else {
                // Otherwise, create a new info box
                const infoBox = document.createElement("div");
                infoBox.classList.add("info-box");
                infoBox.innerHTML = `<p>More details about ${this.querySelector("h2").textContent}</p>`;
                
                // Insert the box after the clicked column
                this.appendChild(infoBox);
            }
        });
    });
});

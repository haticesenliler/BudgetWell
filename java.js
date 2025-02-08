document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class 'column'
    const columns = document.querySelectorAll(".column");

    // Loop through each column and add a click event listener
    columns.forEach(column => {
        column.addEventListener("click", function () {
            const containerText = this.querySelector("h2").textContent;
            alert("You clicked: " + containerText);
        });
    });
});

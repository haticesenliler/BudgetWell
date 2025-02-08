// JavaScript to handle box clicks
function showBox(boxName) {
    const bigBox = document.getElementById('bigBox');
    const bigBoxContent = document.getElementById('bigBoxContent');
  
    // Update the content of the big box
    bigBoxContent.textContent = `You clicked ${boxName}`;
  
    // Show the big box
    bigBox.style.display = 'block';
  }
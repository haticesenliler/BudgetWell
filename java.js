function showBox(boxName) {
  const bigBox = document.getElementById('bigBox');
  const bigBoxContent = document.getElementById('bigBoxContent');

  // Update content
  bigBoxContent.textContent = `${boxName} content goes here`;
  
  // Position big box below clicked element
  const clickedBox = event.target;
  const rect = clickedBox.getBoundingClientRect();
  
  bigBox.style.top = `${rect.bottom + 20}px`;
  bigBox.style.left = `${rect.left}px`;
  bigBox.style.display = 'block';
}
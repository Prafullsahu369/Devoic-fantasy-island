// When the Explore button is clicked, show the Explore section
document.getElementById('explore-btn').addEventListener('click', function() {
    const exploreSection = document.getElementById('explore-section');
    exploreSection.classList.remove('hidden'); // Show the section
    exploreSection.style.display = 'block'; // Ensure it is visible
  });
  
  // Show More Details Toggle Logic
  const detailButtons = document.querySelectorAll('.details-btn');
  
  detailButtons.forEach(button => {
    button.addEventListener('click', function() {
      const eventId = this.getAttribute('data-event');
      const details = this.nextElementSibling; // The next <p> element (event-details)
  
      // Toggle the visibility of the details
      if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        details.style.display = 'block'; // Show details
        this.textContent = 'Hide Details';
      } else {
        details.classList.add('hidden');
        details.style.display = 'none'; // Hide details
        this.textContent = 'Show More Details';
      }
    });
  });
  
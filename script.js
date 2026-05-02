// Fetch repos from GitHub API and display them as cards
fetch("https://api.github.com/users/RohanPenme/repos?sort=updated&per_page=6")
  .then(response => response.json())
  .then(repos => {
    // Get the container where cards will be injected
    const container = document.getElementById("projects-container");

    // Loop through each repo and create a card
    repos.forEach(repo => {
      // Create the card element
      const card = document.createElement("div");
      card.className = "repo-card";

      // Fill the card with repo data
      card.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "No description provided."}</p>
        <div class="repo-meta">
          <span>
            <span class="lang-dot"></span>
            ${repo.language || "N/A"}
          </span>
          <span>★ ${repo.stargazers_count}</span>
        </div>
      `;

      // Add the card to the page
      container.appendChild(card);
    });
  })
  .catch(error => {
    // Show an error message if the API call fails
    console.error("Error fetching repos:", error);
  });

  // Add click interaction to course cards
// Shows a description when a card is clicked, hides it when clicked again
document.querySelectorAll('.course-card').forEach(card => {
  card.addEventListener('click', () => {
    const desc = card.getAttribute('data-desc');

    // Check if description is already showing
    let existing = card.querySelector('.course-desc');
    if (existing) {
      // Hide it if already visible
      existing.remove();
    } else {
      // Create and show the description
      const p = document.createElement('p');
      p.className = 'course-desc';
      p.textContent = desc;
      card.appendChild(p);
    }
  });
});
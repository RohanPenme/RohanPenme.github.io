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
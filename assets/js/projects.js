const projectObj = [
  {
    title: "GitHub Business Card Generator",
    image: "https://github.com/paulmagadi/digital-clock/blob/main/digital-clock.png?raw=true",
    description: "A web app that takes a GitHub profile URL and generates a business card with profile photo, bio, and repository stats. Features client-server architecture and responsive design.",
    tech: ["Django REST Framework", "React", "CSS Grid", "GitHub API"],
    liveLink: "https://github-card-demo.com",
    githubLink: "https://github.com/paulmagadi/github-card",
    category: "featured"
  },
  {
    title: "GitHub Business Card Generator",
    image: "https://github.com/paulmagadi/digital-clock/blob/main/digital-clock.png?raw=true",
    description: "A web app that takes a GitHub profile URL and generates a business card with profile photo, bio, and repository stats. Features client-server architecture and responsive design.",
    tech: ["Django REST Framework", "React", "CSS Grid", "GitHub API"],
    liveLink: "https://github-card-demo.com",
    githubLink: "https://github.com/paulmagadi/github-card",
    category: "web"
  },
  {
    title: "GitHub Business Card Generator",
    image: "https://github.com/paulmagadi/digital-clock/blob/main/digital-clock.png?raw=true",
    description: "A web app that takes a GitHub profile URL and generates a business card with profile photo, bio, and repository stats. Features client-server architecture and responsive design.",
    tech: ["Django REST Framework", "React", "CSS Grid", "GitHub API"],
    liveLink: "https://github-card-demo.com",
    githubLink: "https://github.com/paulmagadi/github-card",
    category: "mobile"
  },
  {
    title: "GitHub Business Card Generator",
    image: "https://github.com/paulmagadi/digital-clock/blob/main/digital-clock.png?raw=true",
    description: "A web app that takes a GitHub profile URL and generates a business card with profile photo, bio, and repository stats. Features client-server architecture and responsive design.",
    tech: ["Django REST Framework", "React", "CSS Grid", "GitHub API"],
    liveLink: "https://github-card-demo.com",
    githubLink: "https://github.com/paulmagadi/github-card",
    youtubeLink: "https://github.com/paulmagadi/github-card",
    category: "design"
  },
  {
    title: "GitHub Business Card Generator",
    image: "https://github.com/paulmagadi/digital-clock/blob/main/digital-clock.png?raw=true",
    description: "A web app that takes a GitHub profile URL and generates a business card with profile photo, bio, and repository stats. Features client-server architecture and responsive design.",
    tech: ["Django REST Framework", "React", "CSS Grid", "GitHub API"],
    liveLink: "https://github-card-demo.com",
    githubLink: "https://github.com/paulmagadi/github-card",
    category: "ai"
  },

];

// Render projects
const projectContainer = document.querySelector(".project-grid");

projectObj.forEach(project => {
  const techList = project.tech.map(tech => `<li>${tech}</li>`).join("");

  const projectCard = `
    <div class="project-card" data-category="${project.category}">
      <div class="project-image fade-in">
        <img src="${project.image}" alt="${project.title} Screenshot">
      </div>
      <div class="project-content fade-in">
        <h3 class="project-title fade-in">${project.title}</h3>
        <p class="project-description fade-in">${project.description}</p>
        <ul class="project-tech fade-in">${techList}</ul>
        <div class="project-links fade-in">
          <a href="${project.liveLink}" class="btn-live btn-primary fade-in" target="_blank">Live Demo</a>
          <a href="${project.githubLink}" class="btn-github btn-outline fade-in" target="_blank">GitHub</a>
          ${project.youtubeLink ? `<a href="${project.youtubeLink}" class="btn-youtube btn-outline fade-in" target="_blank">YouTube</a>` : ''}
        </div>
      </div>
    </div>
  `;

  projectContainer.insertAdjacentHTML("beforeend", projectCard);
});

// Filter logic 
const filterButtons = document.querySelectorAll('.filter-btn');

// Function to apply filter
function applyFilter(filter) {
  const allProjects = document.querySelectorAll('.project-card');
  
  allProjects.forEach(project => {
    const category = project.getAttribute('data-category');
    if (filter === 'all' || category === filter) {
      project.classList.add('show');
    } else {
      project.classList.remove('show');
    }
  });
  
  document.querySelector('.filter-btn.active')?.classList.remove('active');
  document.querySelector(`.filter-btn[data-filter="${filter}"]`)?.classList.add('active');
  
  localStorage.setItem('projectFilter', filter);
}

// Event listeners for filter buttons
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    applyFilter(filter);
  });
});

// Check localStorage on page load
function initializeFilter() {
  const savedFilter = localStorage.getItem('projectFilter');
  
  // Use saved filter if available, otherwise default to 'featured'
  const initialFilter = savedFilter || 'featured';
  applyFilter(initialFilter);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializeFilter);


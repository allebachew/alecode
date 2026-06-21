// Data store for your portfolio projects
const myProjects = [
    {
        title: "Travel Agency Page",
        description: "A gorgeous responsive landing page built with HTML layouts and fluid CSS styling.",
        tag: "HTML & CSS",
        url: "agency.html" 
    },
    {
        title: "Cat Photo App",
        description: "An interactive application practicing structure, image nesting, and form inputs.",
        tag: "HTML Basics",
        url: "https://allebachew.github.io/alecode/cat.html"
    },
    {
        title: "Survey Form",
        description: "A beautiful, accessible form designed to securely capture and validate user feedback.",
        tag: "CSS Responsive",
        url: "form.html" 
    }
];

// Select the empty grid container in HTML
const gridContainer = document.getElementById("portfolio-grid");

// Generate cards dynamically
myProjects.forEach(project => {
    const cardHTML = `
        <div class="card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="card-footer">
                <span class="badge">${project.tag}</span>
                <a href="${project.url}" class="project-btn">View Project &rarr;</a>
            </div>
        </div>
    `;
    gridContainer.innerHTML += cardHTML;
});


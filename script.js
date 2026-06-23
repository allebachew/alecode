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

// 1. Create a function to check the time and display a greeting
function displayDynamicGreeting() {
    // Get the HTML container we just created
    const greetingElement = document.getElementById("welcome-greeting");
    
    // Get the current hour on the user's device (0 to 23)
    const currentHour = new Date().getHours();
    
    // Create a variable to hold our message text
    let message = "";

    // 2. Use If/Else logic to determine the greeting
    if (currentHour < 12) {
        message = "☀️ Good Morning! Welcome to my portfolio.";
    } else if (currentHour < 18) {
        message = "🌤️ Good Afternoon! Thanks for stopping by.";
    } else {
        message = "🌙 Good Evening! Take a look at my latest work.";
    }

    // 3. Inject the message text directly into the HTML tag
    greetingElement.innerText = message;
}

// 4. Run the function immediately when the page loads
displayDynamicGreeting();



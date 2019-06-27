const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const projects = [
    {
        title: 'Cool Project0',
        screenshot: "https://via.placeholder.com/250x250",
        description: "This was my first project. Simple project, simple description.", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML & CSS",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: 'Cool Project1',
        screenshot: "https://via.placeholder.com/250x250",
        description: "This was my secons project so I have a medium-lengh description. I did a simple thing and it looks okay.", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: 'Cool Project2',
        screenshot: "https://via.placeholder.com/250x250",
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: 'Cool Project3',
        screenshot: "https://via.placeholder.com/250x250",
        description: "This is my most recent project which was super cool so it has a much longer description. I did lots of cool things and am very happy with it. I really liked how I did the thing with the other thing.", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
];

const createProjectCards = () => {
    let domString = '';
    domString += `<div style="display: flex">`;
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].available === true) {
            domString += `<div class="project">`;
            domString += `<h3>${projects[i].title}</h3>`;
            domString += `<img src="${projects[i].screenshot}">`;
            domString += `<p>${projects[i].description}</p>`;
            domString += `<p>${projects[i].technologiesUsed}</p>`;
            domString += `<p class = "project-links"><a href="${projects[i].url}">Project Link</a> <a href="${projects[i].githubUrl}">GitHub Link</a></p>`;
            domString += `</div>`;
        }
    }
    domString += `</div>`;
    printToDom('projectsPage', domString);
}

const navLinkClick = (e) => {
    const navLinkId = e.target.id;
    if (navLinkId === 'navToBio') {
        if (document.getElementById('bioPage').style.display === 'none') {
            document.getElementById('bioPage').style.display = 'block';
            document.getElementById('technologiesPage').style.display = 'none';
            document.getElementById('projectsPage').style.display = 'none';
        }
    } else if (navLinkId === 'navToTechnologies') {
        if (document.getElementById('technologiesPage').style.display === 'none') {
            document.getElementById('bioPage').style.display = 'none';
            document.getElementById('technologiesPage').style.display = 'block';
            document.getElementById('projectsPage').style.display = 'none';
        }
    } else if (navLinkId === 'navToProjects') {
        if (document.getElementById('projectsPage').style.display === 'none') {
            document.getElementById('bioPage').style.display = 'none';
            document.getElementById('technologiesPage').style.display = 'none';
            document.getElementById('projectsPage').style.display = 'block';
        }
    }
}

const navEvents = () => {
    document.getElementById('navToBio').addEventListener('click', navLinkClick);
    document.getElementById('navToTechnologies').addEventListener('click', navLinkClick);
    document.getElementById('navToProjects').addEventListener('click', navLinkClick);
}




const init = () => {
    navEvents();
    createProjectCards();
};

init();
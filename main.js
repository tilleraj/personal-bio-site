console.log('setup is working');

// {
//     title: "Cool Project", 
//     screenshot: "https://via.placeholder.com/250x250", 
//     description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
//     technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
//     available: true,
//     url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
//     githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
//   }

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const projects = [
    {
        title: 'Cool Project0',
        screenshot: "https://via.placeholder.com/250x250",
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: 'Cool Project1',
        screenshot: "https://via.placeholder.com/250x250",
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: 'Cool Project2',
        screenshot: "https://via.placeholder.com/250x250",
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: 'Cool Project3',
        screenshot: "https://via.placeholder.com/250x250",
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
];

const createProjectCards = () => {
    let domString = '';
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].available === true) {
            domString += `<div class="project">`;
            domString += `<h3>${projects[i].title}</h3>`;
            domString += `<img src="${projects[i].screenshot}">`;
            domString += `<p>${projects[i].description}</p>`;
            domString += `<p>${projects[i].technologiesUsed}</p>`;
            domString += `<p>${projects[i].url}</p>`;
            domString += `<p>${projects[i].githubUrl}</p>`;
            domString += `</div>`;
        }
    }
    printToDom('projectsPage', domString);
}






const init = () => {
    createProjectCards();
};

init();
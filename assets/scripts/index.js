function handleData(){
    fetch("./assets/str/experience-pt-br.json")
    .then(e => e.json())
    .then(retorno => {
        retorno.Jobs.forEach(element => 
            handleExperience(element.Company,element.Position,element.Period,element.Description))
        retorno.Education.forEach(element => 
            handleEducation(element.Institution, element.Course,element.Status, element.Period))
        retorno.About.forEach(element =>
            handleAbout(element.Title, element.Description))
    })
}

function handleAbout(title, description){
    const about = document.querySelector("#sobre");
    const container = document.createElement('div');
    container.innerHTML = `<span>${title}</span>
                        <p>${description}</p>`;
    about.appendChild(container);
}

function handleEducation(institution, course, status, period){
    const education = document.querySelector("#educacao");
    const container = document.createElement('div');
    container.innerHTML = `<h3>${course}</h3>
                        <p>${institution} - ${status} - ${period}</p>`;
    education.appendChild(container);
}

function handleExperience(company, position, period, description){
    const experiencies = document.querySelector("#experiencias-profissionais"); 
    const container = document.createElement('div');
    container.innerHTML = `<h3>${position}@${company}</h3>
                        <h4>${period}</h4>
                        <p>${description}</p>`;
    experiencies.appendChild(container);
}
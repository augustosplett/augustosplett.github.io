function handleData(){
    fetch("./assets/str/experience-pt-br.json")
    .then(e => e.json())
    .then(retorno => {
        retorno.Jobs.forEach(element => 
            handleExperience(element.Company,element.Position,element.Period,element.Description))
        retorno.Education.forEach(element => 
            handleEducation(element.Institution, element.Course,element.Status, element.Period))
    })
}

function handleEducation(institution, course, status, period){

    const education = document.querySelector("#educacao");

    const container = document.createElement('div');
    container.innerHTML = `<h3>${course}</h3>
                            <p>${institution} - ${status} - ${period}</p>`;

    education.appendChild(container);

}

function handleExperience(company, position, period, description){

    const experiencias = document.querySelector("#experiencias-profissionais");

    const title = document.createElement('h3');
    title.innerText = `${position} @${company}`;

    const dates = document.createElement('h4');
    dates.innerText = `${period}`;

    const desc = document.createElement('p');
    desc.innerText = `${description}`;

    const container = document.createElement('div');
    container.appendChild(title);
    container.appendChild(dates);
    container.appendChild(desc);

    experiencias.appendChild(container);

}
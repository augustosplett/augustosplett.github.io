function handleData(){
    //const lang = navigator.language
    //console.log(lang)
    fetch("./assets/str/experience-pt-br.json")
    .then(e => e.json())
    .then(retorno => {
        retorno.Jobs.forEach(element => 
            handleExperience(element.Company,element.Position,element.Period,element.Description))
        retorno.Education.forEach(element => 
            handleEducation(element.Institution, element.Course,element.Status, element.Period))
        retorno.About.forEach(element =>
            handleAbout(element.Title, element.Description))
        handleContacts(retorno.Phone)
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

function handleContacts(phone){
    const contacts = document.querySelector("#contato"); 
    const container = document.createElement('div');
    container.innerHTML = `<a href="tel:+55-51-99101-8587">${phone}</a>
                        <a href="mailto:augusto.splett@gmail.com">e-mail:augusto.splett@gmail.com</a>
                        <a href="https://www.linkedin.com/in/augusto-msplett/" target="_blank" >Linkedin</a>
                        <a href="https://github.com/augustosplett" target="_blank">Github</a>
                        <a href="https://www.instagram.com/augustosplett/" target="_blank">Instagram</a>
                        <a href="https://twitter.com/AugustoSplett" target="_blank">Twitter</a>`
    contacts.appendChild(container);
}
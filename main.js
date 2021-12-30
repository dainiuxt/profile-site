const site = 'https://zany-skitter-caper.glitch.me/';
const xpPage = 'experiences';
const skillsPage = 'skills';
const skillsUrl = site + skillsPage;
const xpUrl = site + xpPage;

async function getExperience() {
  const response = await fetch(xpUrl);
  const xpdata = await response.json();
  useXp(xpdata);
}

async function getSkills() {
  const response = await fetch(skillsUrl);
  const skillsdata = await response.json();
  useSkills(skillsdata);
}

function useXp(xp) {
  // console.log(xp);
  const placeXp = document.querySelector('.xp');
  placeXp.textContent = '';
  xp.forEach(entry => {
    const xpEntry = document.createElement('div');
    xpEntry.classList.add('xp-entry');
    placeXp.appendChild(xpEntry);
    // left side - dates/company
    const xpDates = document.createElement('div');
    xpDates.classList.add('xp-dates');
    xpEntry.appendChild(xpDates);
    const dates = document.createElement('p');
    dates.classList.add('dates');
    dates.textContent = entry.startYear + ' - ' + entry.finishYear;
    xpDates.appendChild(dates);
    const xpCompany = document.createElement('p');
    xpCompany.classList.add('xp-company');
    xpCompany.textContent = entry.companyName;
    xpDates.appendChild(xpCompany);
    // right side - job title, description
    const xpJob = document.createElement('div');
    xpJob.classList.add('xp-job');
    xpEntry.appendChild(xpJob);
    const jobTitle = document.createElement('p');
    jobTitle.classList.add('job-title');
    jobTitle.textContent = entry.position;
    xpJob.appendChild(jobTitle);
    const jobDesc = document.createElement('p');
    jobDesc.classList.add('job-desc');
    jobDesc.textContent = entry.description;
    xpJob.appendChild(jobDesc);
  });
}

function useSkills(skills) {
  const placeSkills = document.querySelector('.skills');
  skills.forEach(entry => {
    const skillEntry = document.createElement('div');
    skillEntry.classList.add('skill-entry');
    placeSkills.appendChild(skillEntry);
    const skillName = document.createElement('div');
    skillName.classList.add('skill-name');
    skillName.textContent = entry.title;
    skillEntry.appendChild(skillName);
    const skillLevel = document.createElement('div');
    skillLevel.classList.add('skill-level');
    skillLevel.textContent = entry.level + '%';
    skillEntry.appendChild(skillLevel);
    const progressDiv = document.createElement('div');
    progressDiv.classList.add('skill-progress');
    skillEntry.appendChild(progressDiv);
    const progressSpan = document.createElement('span');
    progressSpan.classList.add('progress-value');
    progressSpan.style.width = entry.level + '%';
    progressDiv.appendChild(progressSpan); 
  });
}

getExperience();
getSkills();

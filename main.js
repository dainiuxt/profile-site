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

function useXp(xp) {
  console.log(xp);
  const placeXp = document.querySelector('.xp');
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

getExperience();

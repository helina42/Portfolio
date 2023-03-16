const { Action } = require('argparse');

function popmenu() {
  const mobileMenu = document.querySelector('#popup');
  mobileMenu.classList.toggle('hidden');
}
const cards = [
  {
    id: 0,
    name: 'Tonic',
    image: './Work/Tonic.png',
    imaged: './Work/1.png',

    language: {
      Canopy: 'Canopy',
      img1: './Icons/Counter.png',
      BackendDev: 'Backend Dev',
    },
    descriptiond:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies:
    {
      html: 'html',
      css: 'css',
      js: 'JavaScript',
      Github: 'Github',
      Ruby: 'Ruby',
      Bootstrap: 'Bootstrap',
    },
    buttons:
    {
      seelive: '#',
      seesource: '#',
    },
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    image: './Work/Multi-post stories.png',
    imaged: './Work/2.png',

    language: {
      Canopy: 'Canopy',
      img1: './Icons/Counter.png',
      BackendDev: 'Backend Dev',
    },
    descriptiond:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies:
    {
      html: 'html',
      css: 'css',
      js: 'JavaScript',
      Github: 'Github',
      Ruby: 'Ruby',
      Bootstrap: 'Bootstrap',
    },
    buttons:
    {
      seelive: '#',
      seesource: '#',
    },
  },
  {
    id: 2,
    name: 'Tonic',
    image: './Work/Tonic2.png',
    imaged: './Work/3.png',

    language: {
      Canopy: 'Canopy',
      img1: './Icons/Counter.png',
      BackendDev: 'Backend Dev',
    },
    descriptiond:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies:
    {
      html: 'html',
      css: 'css',
      js: 'JavaScript',
      Github: 'Github',
      Ruby: 'Ruby',
      Bootstrap: 'Bootstrap',
    },
    buttons:
    {
      seelive: '#',
      seesource: '#',
    },
  },
  {
    id: 3,
    name: 'Multi-Post Stories',
    image: './Work/Multi-post stories 2.png',
    imaged: './Work/4.png',

    language: {
      Canopy: 'Canopy',
      img1: './Icons/Counter.png',
      BackendDev: 'Backend Dev',
    },
    descriptiond:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies:
    {
      html: 'html',
      css: 'css',
      js: 'JavaScript',
      Github: 'Github',
      Ruby: 'Ruby',
      Bootstrap: 'Bootstrap',
    },
    buttons:
    {
      seelive: '#',
      seesource: '#',
    },
  },
];
function showProject() {
  const projectCards = document.querySelector('#middle-content');

  for (let i = 0; i < cards.length; i++) {
    projectCards.innerHTML += `<div class="card">
    <div class="sidep">
  <img class="tonic-c" alt= " ${cards[i].alt}" src="${cards[i].image}">
</div>

<div class="sidew1">
  <h2 class="proj-header" id="title">${cards[i].name}</h2>
<ul class="details">
  <li>
    <div class="canopy">
      <p>CANOPY</p>
    </div>
  </li>
  <li>
    <div class="counter"><img alt="" src="./Icons/Counter.png"></div>
  </li>
  <li>
    <div class="spec">
      <p>Back End Dev</p>
    </div>
  </li>
  <li>
    <div class="counter"><img alt="" src="./Icons/Counter.png"></div>
  </li>
  <li>
    <div class="spec">
      <p>2015</p>
    </div>
  </li>
</ul>

<div class="info">
  <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
</div>
<ul class="lang">
  <li class="hcj">
    <p>html</p>
  </li>
  <li class="hcj">
    <p>css</p>
  </li>
  <li class="hcj">
    <p>javascript</p>
  </li>
</ul>
<div onclick="popwork(${cards[i].id})" class="see"><button class="button" type="button">
    <p>See Project</p>
  </button></div>
</div>
</div>`;
  }
  projectCards.appendChild();
}

function addBlur() {
  const entireDoc = document.querySelector('.entire');
  entireDoc.classList.add('blur');
}

function removeBlur() {
  const entireDoc = document.querySelector('.entire');
  entireDoc.classList.remove('blur');
}

function togglemobilepopup() {
  const mobilePopup = document.querySelector('.close');
  mobilePopup.classList.toggle('hidden');
  removeBlur();
  window.location.reload();
}

function popwork(id) {
  const mobilePopup = document.querySelector('#card-work');
  mobilePopup.innerHTML = `<div class ="close" >
  <div class="headert">
    <h2 id="titlew">${cards[id].name}</h2>
    <img onclick ='togglemobilepopup() 'src= "./Icons/X.png">
    </div>

    <div>
    <ul class="detailsw">
    <li>
      <div class="canopy">
        <p>CANOPY</p>
      </div>
    </li>
    <li>
      <img class="counter"  alt="" src="./Icons/Counter.png">
    </li>
    <li>
      <div class="spec">
        <p>Back End Dev</p>
      </div>
    </li>
    <li>
      <img alt="" class="counter" src="./Icons/Counter.png">
    </li>
    <li>
      <div class="spec">
        <p>2015</p>
      </div>
    </li>
  </ul>
</div>
  <div class="side-pop">
    <img class="tonic" id ="mob" alt= " ${cards[id].alt}" src="${cards[id].image}">
    <img class="tonic hide" alt= " ${cards[id].alt}" src="${cards[id].imaged}">
  </div>
  <div class ="work-lang">
    <div class="work">
    <p id ="mob">${cards[id].description}</p>
    <p class ="hide">${cards[id].descriptiond}</p>
  </div>
  <div class ="lang-see">
  <ul class="langw">
    <li class="hcj">
      <p>${cards[id].technologies.html}</p>
    </li>
    <li class="hcj">
      <p>${cards[id].technologies.css}</p>
    </li>
    <li class="hcj">
      <p>${cards[id].technologies.js}</p>
    </li>
    <li class="hcj">
      <p class ="hide">${cards[id].technologies.Github}</p>
    </li>
    <li class="hcj">
      <p class ="hide">${cards[id].technologies.Ruby}</p>
    </li>
    <li class="hcj">
      <p class ="hide">${cards[id].technologies.Bootstrap}</p>
    </li>
  </ul>
  <div class= "hr">  </div>
  <div class="see-pop">
  <button class="press" type="button"}>
  <a href='${cards[id].buttons.seelive}'> See Live </a>
  <img src="./Icons/seeLive.png">
  </button>
  <button class="press" type="button"}>
  <a href='${cards[id].buttons.seesource}'>See source</a>
  <img src="./Icons/seeSource.png">
  </button>
  </div>
  </div>
  </div >
  </div>
  `;

  mobilePopup.classList.toggle('hidden');

  addBlur();
}
function ValidateEmail() {
  const form = document.querySelector('#form');
  const userEmail = document.getElementById('email').value;
  const errmsg = document.querySelector('#error');
  const letters = /[A-Z]/;
  form.addEventListener('submit', (event) => {
    if (userEmail.match(letters)) {
      event.preventDefault();
      errmsg.innerHTML = '**You have entered an invalid email address! Please use small letters for the email.**';
    } else if (!userEmail.match(letters)) { document.querySelector('#form').submit(); }
  });
}

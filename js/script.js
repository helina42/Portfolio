// eslint-disable-next-line no-unused-vars
function popmenu() {
  const mobileMenu = document.querySelector('#popup');
  mobileMenu.classList.toggle('hidden');
}
const cards = [
  {
    id: 0,
    name: 'Tonic',
    image: './Work/Tonic.png',

    language: {
      Canopy: 'Canopy',
      img1: './Icons/Counter.png',
      BackendDev: 'Backend Dev',
    },
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies:
        {
          html: 'html',
          css: 'css',
          js: 'JavaScript',
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

    language: {
      Canopy: 'Canopy',
      img1: './Icons/Counter.png',
      BackendDev: 'Backend Dev',
    },
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies:
        {
          html: 'html',
          css: 'css',
          js: 'JavaScript',
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

    language: {
      Canopy: 'Canopy',
      img1: './Icons/Counter.png',
      BackendDev: 'Backend Dev',
    },
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies:
        {
          html: 'html',
          css: 'css',
          js: 'JavaScript',
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

    language: {
      Canopy: 'Canopy',
      img1: './Icons/Counter.png',
      BackendDev: 'Backend Dev',
    },
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies:
        {
          html: 'html',
          css: 'css',
          js: 'JavaScript',
        },
    buttons:
        {
          seelive: '#',
          seesource: '#',
        },
  },
];
function showProject() {
  const projectCards = document.querySelector('#card-work');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < cards.length; i++) {
    projectCards.innerHTML += `<div class="card">
    <div class="sidep">
  <img class="tonic" alt= " ${cards[i].alt}" src="${cards[i].image}">
</div>

<div class="sidew1">
  <h2 class="header" id="title">${cards[i].name}</h2>
<ul class="details">
  <li>
    <div class="canopy">
      <p>CANOPY</p>
    </div>
  </li>
  <li>
    <div class="counter"><img alt="" src="${cards[i].img1}"></div>
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
// eslint-disable-next-line no-unused-vars
function togglemobilepopup() {
  const mobilePopup = document.querySelector('.close');
  // const blur = document.getElementsByClassName('.entire');
  // blur.classList.toggle('blur');
  mobilePopup.classList.toggle('hidden');
  showProject();
}

// eslint-disable-next-line no-unused-vars
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
</div>
  <div>
    <img class="tonic" alt= " ${cards[id].alt}" src="${cards[id].image}">
  </div>
    <div class="work">
    <p>${cards[id].description}</p>
  </div>
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
  </ul>
  <div class="see">
    <button class="button" type="button"}>
    <a href='${cards[id].buttons.seelive}'> See Live</a>
    </button>
    <button class="button" type="button"}>
    <a href='${cards[id].buttons.seesource}'>See source </a>
    </button>
  </div>
  </div>
  `;
  mobilePopup.classList.toggle('hidden');
  mobilePopup.appendChild();
}

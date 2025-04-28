// toogle
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// movies
const categories = {
  "Trending Now": [
    "../assets/images/movies/apocalypto.jpg",
    "../assets/images/movies/apocalypto.jpg",
    "../assets/images/movies/apocalypto.jpg",
    "../assets/images/movies/apocalypto.jpg",
    "../assets/images/movies/apocalypto.jpg",
    "../assets/images/movies/apocalypto.jpg",
    "../assets/images/movies/apocalypto.jpg",
    "../assets/images/movies/apocalypto.jpg",
    "../assets/images/movies/apocalypto.jpg",
  ],
  "Top Rated": [
    "../assets/images/movies/apocalypto.jpg",
    "../assets/images/movies/apocalypto.jpg",
    "../assets/images/movies/apocalypto.jpg",
    "../assets/images/movies/apocalypto.jpg",
    "../assets/images/movies/apocalypto.jpg",
  ],
  "Action Movies": [
    "../assets/images/movies/apocalypto.jpg",
    "../assets/images/movies/apocalypto.jpg",
    "../assets/images/movies/apocalypto.jpg",
    "../assets/images/movies/apocalypto.jpg",
    "../assets/images/movies/apocalypto.jpg",
  ],
  "Comdey Movies": [
    
  ]
};

const rowsContainer = document.getElementById('rowsContainer');

for (const [category, images] of Object.entries(categories)) {
  // console.log(category, images)
  const row = document.createElement('section');
  row.className = 'movie-row';

  const title = document.createElement('h2');
  title.textContent = category;

  const wrapper = document.createElement('div');
  wrapper.className = 'movie-posters';

  images.forEach(url => {
    console.log(url)
    const img = document.createElement('img');
    img.src = url;
    wrapper.appendChild(img)
  })

  row.appendChild(title);
  row.appendChild(wrapper);
  rowsContainer.appendChild(row)
}
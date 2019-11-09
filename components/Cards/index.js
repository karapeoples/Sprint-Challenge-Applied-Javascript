// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
let artArr = [];





const createArticle = (array) => {
    const card = document.createElement('div');
    const headline1 = document.createElement('div')
    const author = document.createElement('div');
    const imgHold = document.createElement('div');
    const aImg = document.createElement('img');
    const aName = document.createElement('span');

    card.classList.add('card');
    headline1.classList.add('headline');
    author.classList.add('author');
    imgHold.classList.add('img-container');

    card.append(headline1);
    headline1.append(author);
    author.append(imgHold);
    imgHold.append(aImg, aName);

    headline1.textContent = `${array.headline}` 
   

    return card;
}

const ep = document.querySelector('.cards-container')
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log(response.data.articles.bootstrap);
    const newCard1 = createArticle(response.data.articles.bootstrap);
    ep.append(newCard1);
  })
  .catch(err => {
    console.log('Sorry No Info!', err)
  }); 
  /*  const newArray = (response.data.articles).map( abc => {
      artArr.push(abc.forEach())
console.log (artArr)
  }) */
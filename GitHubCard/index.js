import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const gHUser = 'MABYY'
const axiosPromise = axios.get(`https://api.github.com/users/${gHUser}`)
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
axiosPromise
.then((successResponse) => {
 console.log('success Response',successResponse);
})
.catch((errorResponse) =>{
  console.log('error Response',errorResponse);

})
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


const createPanel = (gHUser) => {  

  // create HTML structure by creating parent elements and their children.

  const card = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('h3');
  const cardinfo = document.createElement('div');

  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');

  const getAddress = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.appendChild(image)
  card.appendChild(cardinfo)

  cardinfo.appendChild(name)
  cardinfo.appendChild(username)
  cardinfo.appendChild(location)
  cardinfo.appendChild(profile)
  cardinfo.appendChild(following)
  cardinfo.appendChild(followers)
  cardinfo.appendChild(bio)

  profile.appendChild(getAddress)

  // add classes to style your component
  card.classList.add('card')
  cardinfo.classList.add('card-info')
  username.classList.add('username')

  // add content 
  name.textContent = gHUser.data.name
  username.textContent =  gHUser.data.login 
  location.textContent =  gHUser.data.location 
  following.textContent =  gHUser.data.followers 
  followers.textContent =  gHUser.data.following 
  getAddress.textContent =  gHUser.data.html_url 
  image.src =  gHUser.data.avatar_url

  return card; 

  }

  
const infoGiiHub = axiosPromise.then((gHUser) => {
  const newUser = createPanel(gHUser)
  document.querySelector('.cards').append(newUser)
  axios.get(gHUser.data.followers_url)
})
.catch((err) =>{
 console.log('This is not working', err)
});



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser 
    https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the 
    list found at the
    bottom of the page. Get at least 5 different Github usernames 
    and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, 
    creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan', 'dustinmyers', 'justsml',
  'luishrd', 'bigknell']

  followersArray.forEach(name =>{
    const axiosPromise2 = axios.get(`https://api.github.com/users/${name}`)
    const infoGiiHub2 = axiosPromise2.then((gHUser) => {
      const newUser2 = createPanel(gHUser)
      document.querySelector('.cards').append(newUser2)
      console.log(gHUser.data)
    axios.get(gHUser.data.followers_url)
   })
   .catch((err) =>{
    console.log('This is not working', err)
   });

})

/*
  STEP 3: Create a function that accepts a single object as 
  its only argument.
    Using DOM methods and properties, create and return the 
    following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>


/*
  List of LS Instructors Github username's:
  */





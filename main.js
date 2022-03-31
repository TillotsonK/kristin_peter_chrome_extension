let searchTerm;

function createSlots(myJson, i) {
    const holder = document.createElement('div')
    holder.setAttribute('class', 'holder');
    document.querySelector('body').appendChild(holder);

    const title = document.createElement('p');
    // message.setAttribute('id', 'message');
    title.innerHTML = myJson['documents'][i]['title'];
    holder.appendChild(title);

    const summary = document.createElement('p');
    // createdAt.setAttribute('id', 'createdAt');
    summary.innerHTML = myJson['documents'][i]['summary'];
    holder.appendChild(summary);

    const url = document.createElement('a');
    // createdAt.setAttribute('id', 'createdAt');
    let target = `https://developer.mozilla.org${myJson['documents'][i]['mdn_url']}`
    url.setAttribute(`href`, target)
    url.innerHTML = target;
    holder.appendChild(url);
  }
//
const input = document.querySelector('#text')
const button = document.querySelector('#submit')

button.addEventListener('click',()=>{
    searchTerm = input.value
    const mdnUrl = `https://developer.mozilla.org/api/v1/search?q=[${searchTerm}]&locale=en-us`

fetch(mdnUrl)
    .then(response => response.json())
    .then(myJson => {
        for(let i = 0; i < 10; i++){
        createSlots(myJson, i)
        } 
    })
    .then(myJson => console.log(myJson))
    .catch(error => `Your error: ${error}`)


})


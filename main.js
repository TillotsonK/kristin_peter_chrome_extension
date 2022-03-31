let searchTerm;
const container = document.querySelector('#container')

function createSlots(myJson, i) {
    const holder = document.createElement('div')
    holder.setAttribute('class', 'holder');
    container.appendChild(holder);

    const title = document.createElement('b');
    // message.setAttribute('id', 'message');
    title.innerHTML = myJson['documents'][i]['title'];
    holder.appendChild(title);

    const summary = document.createElement('p');
    // createdAt.setAttribute('id', 'createdAt');
    summary.innerHTML = myJson['documents'][i]['summary'];
    holder.appendChild(summary);

    const url = document.createElement('a');
    // createdAt.setAttribute('id', 'createdAt');
    let targetURL = `https://developer.mozilla.org${myJson['documents'][i]['mdn_url']}`
    url.setAttribute(`href`, targetURL)
    url.setAttribute('target', '_blank')
    url.innerHTML = targetURL;
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
       while(container.firstChild){
           container.removeChild(container.firstChild)
        }
        for(let i = 0; i < 3; i++){
        createSlots(myJson, i)
        } 
    })
    .then(myJson => console.log(myJson))
    .catch(error => `Your error: ${error}`)


})


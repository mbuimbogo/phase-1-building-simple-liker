// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const liker = document.querySelector(".like-glyph")
const modal = document.getElementById('modal')

liker.addEventListener('click', () =>{
  mimicServerCall()
  .then(response => {
   console.log(response)
   handlesResponse() })
  .catch(err => {
   console.log(err)
  handleError()})
})

function handleError(){
modal.classList.remove('hidden')
setTimeout(callsBack,3000 )
}
function callsBack(){
modal.classList.add('hidden')
}
function handlesResponse(){
liker.classList.toggle('activated-heart')
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

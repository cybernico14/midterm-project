// const getExternalAPiInfo = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json())
//     .then((res) => {
//     let externalApiInfo = "";
//     res.forEach((post) => {
//       externalApiInfo += `
//             <div class="card" style="width: 15rem">
//               <img
//                   class="card-img-top"
//                   src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltde04169680d1e8d6/6333adfb110d52448841a252/GettyImages-1243560834.jpg"
//                   alt="A cool image about the Wu"
//               />
//               <div class="card-body">
//                   <h5 class="card-title">${post.title}</h5>
//                   <p class="card-text">
//                       ${post.body}
//                   </p>
//               </div>
//             </div>
//             `;
//     });      document.querySelector("#output").innerHTML += externalApiInfo;
// }).catch((error) => console.log(error));
// };
// document.querySelector("#getExternalAPiInfo").
// window.addEventListener("load", getExternalAPiInfo);


let title1 = document.getElementById("text1")
let title2 = document.getElementById("text2")
let title3 = document.getElementById("text3")


//let titleArray = [title1,title2,title3]
console.log(title1)
const getExternalPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((res) => {
        // for (let i = 0; i < 3; i++) {
            title1.innerHTML = 
            
            `<div class="project-text">${res[0].title}</div>
                  <div class="project-description">
                  ${res[0].body}
                  </div>
                  <a href="../project-links/simplify.html" target="_blank" class="project-link">Learn More</a>
                </div>
              </div>
            </div>`;
            title2.innerHTML = 
            
            `<div class="project-text">${res[1].title}</div>
                  <div class="project-description">
                  ${res[1].body}
                  </div>
                  <a href="../project-links/simplify.html" target="_blank" class="project-link">Learn More</a>
                </div>
              </div>
            </div>`;
        
            title3.innerHTML = 
            
            `<div class="project-text">${res[2].title}</div>
                  <div class="project-description">
                  ${res[2].body}
                  </div>
                  <a href="../project-links/simplify.html" target="_blank" class="project-link">Learn More</a>
                </div>
              </div>
            </div>`;
            
        //}
    })
    .catch((error) => console.log(error))
}

window.addEventListener("load", getExternalPost);

let p1 = document.getElementById("api-text1")
let p2 = document.getElementById("api-text2")


const getApiText =() => {

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((res) => {
  p1.innerHTML = `<p id="api-text1">${res[0].body}</p>`;
      p2.innerHTML = `<p id="api-text2">${res[7].body}</p>`;})
  .catch((error) => console.log(error))
}

window.addEventListener("load", getApiText);
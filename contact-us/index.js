const sendMessage = (preventForm) => {
    preventForm.preventDefault()

    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let message = document.querySelector("#message").value
    let phone = document.querySelector("#phone").value

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "text/plain, application/json"
        },
        body: JSON.stringify({ name: name, email: email, phone: phone, message: message })
    })
        .then((response) => response.json())
        .then((formData) => console.log(formData)) 
        .catch((error) => console.log(error))
};

document.querySelector("#sendMessage").addEventListener("submit", sendMessage)

// const addPost = (preventForm) => {
//     preventForm.preventDefault()

//     let title = document.querySelector("#name").value
//     let body = document.querySelector("#message").value

//     fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json",
//             Accept: "text/plain, application/json"
//         },
//         body: JSON.stringify({ name: title, body: body })
//     })
//         .then((response) => response.json())
//         .then((formData) => console.log(formData)) 
//         .catch((error) => console.log(error))
// };

// document.querySelector("#addPost").addEventListener("submit", addPost)
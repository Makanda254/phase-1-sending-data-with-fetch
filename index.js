// Add your code here
function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: userName,
        email: userEmail})
 
   })
   .then(res => res.json())
   .then((users) => {

    let bar = document.createElement('p')
    bar.textContent= users.id
    document.body.appendChild(bar)
   })
    .catch(function (error) {
        alert("Unauthorized Access");
        let errorMesage = document.createElement('p')
       errorMesage.textContent= error.message;
       document.body.appendChild(errorMesage)
   
})

}

//submitData('Victor', 'Victor@gmail.com');
'use strict'

// Fetch (ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_janet = document.querySelector("#janet");
// var usuarios = [];

// fetch('https://jsonplaceholder.typicode.com/users')

// function de callback normal
// fetch('https://reqres.in/api/users')
//     .then(function(data){
//         return data.json()
//     })
//     .then(users => {
//         usuarios = users.data;
//         console.log(usuarios);
//     });


// fetch('https://reqres.in/api/users')
//     .then(data => data.json())
//     .then(users => {
        // usuarios = users.data;
        // console.log(usuarios);
        // listadoUsuarios(users.data)
        // usuarios.map((user, i) => {
        //    let nombre = document.createElement('h3');
        //    nombre.innerHTML = i +' ' + user.first_name+ " " + user.last_name;
        //    div_usuarios.appendChild(nombre);
        //
        //    document.querySelector(".loading").style.display = 'none';
        // });
    // });

getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data)
        // return getJanet();
        return getInfo();
    })
    .then(data => {
        div_profesor.innerHTML = data;

        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);
    })
    .catch(error => {
        console.log(error)
        alert("Error en las peticiones")
});


function getUsuarios(){
    return fetch('https://reqres.in/api/users');
}

function getJanet(){
    return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
    var profesor = {
        nombre: 'Víctor',
        apellido:'Robles',
        url: 'https://victorroblesweb.es'
    };

    return new Promise((resolve, reject) => {
        var profesor_string = "";

        setTimeout(function (){
            profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string != 'string' || profesor_string === '') return reject('error 1');

            return resolve(profesor_string);
        }, 3000);


    });
}

function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i +' ' + user.first_name+ " " + user.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';
    });
}

function mostrarJanet(user){
    console.log(user);
    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');

    nombre.innerHTML = user.first_name+ " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';

    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);

    document.querySelector("#janet .loading").style.display = 'none';
}
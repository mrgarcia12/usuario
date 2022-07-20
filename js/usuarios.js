import { user_bj } from "./main.js";


export let user = [
    [100,	'anna0',	    'white00',	    'Anna Addison',	    '1325 Candy Rd, San Francisco, CA 96123',	'anna.addison@yahoo.com',	3841019535],
    [101,	'carol1',	    'orange01',	    'Carol Campbell',	'1931 Brown St, Gainesville, FL 85321',	    'carol.campbell@aol.com', 	2548952651],
    [102,	'julia2',	    'yellow02',	    'Julia Jones',	    '1622 Seaside St, Seattle, WA 32569',	    'jolie.jones@msn.com',	    3651469235],
    [103,	'irene3',	    'blue03',	    'Irene Everly',	    '1756 East Dr, Houston, TX 28562',	        'irene.everly@gmail.com',	9859423698],
    [104,	'rachel4',	    'red04',	    'Rachel Rose',	    '1465 River Dr, Boston, MA 43625',	        'rachel.rose@hotmail.com',	2945632543],
    [105,	'sophie5',	    'green05',	    'Sophie Sutton',	'1896 West Dr, Portland, OR 65842',	        'sophie.sutton@yahoo.com',	5169525614],
    [106,	'wendy6',	    'purple06',	    'Wendy West',	    '1252 Vine St, Chicago, IL 73215',	        'wendy.west@gmail.com', 	6645936156],
    [106,	'jefuentes',    'gatitos123',   'Jossue Fuentes',   'Colegio Santa Catalina SCL',	            'jefuentes@scl.edu.gt', 	4568443548]
]



let postion = 0;
let user_root = document.querySelector ('#root');


document.getElementById ( 'usuario' ).innerHTML = user[postion][1];



const mover_derecha = () => { 
    if(postion < user.length - 1){ 
        postion++;
    }

    document.getElementById('usuario').innerHTML = user[postion][1];
}


const mover_izquierda = () => { 
    if(postion > 0){ 
        postion--;
    }

    document.getElementById('usuario').innerHTML = user[postion][1];
}

document.getElementById('boton-derecha').addEventListener('click', mover_derecha);

document.getElementById('boton-izquierda').addEventListener('click', mover_izquierda);



function mostrar_usuario(){
    user_root.innerHTML = '<h1>' + user_bj[postion].nikname + '</h1>' + 
    '<h1>' + user_bj[postion].name + '</h1>' +
    '<h1>' + user_bj[postion].adress + '</h1>' + 
    '<h1>' + user_bj[postion].email + '</h1>' + 
    '<h1>' + user_bj[postion].phone + '</h1>';
};


document.getElementById('ver').addEventListener('click', mostrar_usuario);
function add(){
	//tenemos que tomar el texto ingresado en el textarea
	var comments = document.getElementById('comment').value;

	//limpiar el textarea
	document.getElementById('comment').value = "";

	//contenedor  que esta en el html
	var cont = document.getElementById('cont');
	
	//creamos el div que contiene cada comentario
	var newComent = document.createElement('div');

	//validar que textarea tenga un mensaje
	if(comments.length == 0 || comments == null){
		alert('Debes ingresar un mensaje')
		return false;
	}

	//crear el checkbox
	var chck = document.createElement('input');
	chck.type = 'checkbox';

	//creamos icono de corazón
	var heart = document.createElement('i');
	heart.classList.add('fa', 'fa-heart', 'heart');

	var trash = document.createElement('i');
	trash.classList.add('fa', 'fa-trash', 'trash');

	//nodos de texto del textarea
	var textNewComment = document.createTextNode(comments);

	var contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewComment);
	newComent.appendChild(chck);
	newComent.appendChild(trash);
	newComent.appendChild(heart);
	newComent.appendChild(contenedorElemento);

	cont.appendChild(newComent);
}
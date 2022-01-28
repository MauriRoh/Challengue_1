// Challenge N°1

let btnEncrypt = document.querySelector('#btnEncrypt');
let globalVar = "";

/* Valida que solo se ingresen letras */

btnEncrypt.addEventListener('click', function(event){
	
	let frmEncrypt = document.querySelector('#frmEncrypt');
	let textEncriptado = frmEncrypt.textEncriptado.value;
	let texto = textEncriptado.toLowerCase();

	event.preventDefault();

	//let texto = "prueba challengue indios huarpes";
	//La letra "a" es convertida para "ai"//
	//La letra "e" es convertida para "enter"//
	//La letra "i" es convertida para "imes"//
	//La letra "o" es convertida para "ober"//
	//La letra "u" es convertida para "ufat"//
	//let texto = "prufatenterbai chaillenterngufatenter imesndimesober Hufatairpenters -- ";
	//let texto = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober";
	let encriptar = "";
	let sentence = "";
	let flag = false;

	for(i=0; i<texto.length; i++){

		if(texto[i]==='a' || texto[i]==='e' || texto[i]==='i' || texto[i]==='o' || texto[i]==='u'){
			
			if(texto[i]==='a' && texto[i+1]==='i'){
				
				encriptar = encriptar + texto[i];
				i++;
				flag = true;

			}else if(texto[i]==='e' && texto[i+1]==='n' && texto[i+2]==='t' && texto[i+3]==='e' && texto[i+4]==='r'){
				
				encriptar = encriptar + texto[i];
				i=i+4;
				flag = true;
				
			}else if(texto[i]==='i' && texto[i+1]==='m' && texto[i+2]==='e' && texto[i+3]==='s'){
				
				encriptar = encriptar + texto[i];
				i=i+3;
				flag = true;
				
			}else if(texto[i]==='o' && texto[i+1]==='b' && texto[i+2]==='e' && texto[i+3]==='r'){
				
				encriptar = encriptar + texto[i];
				i=i+3;
				flag = true;

			}else if(texto[i]==='u' && texto[i+1]==='f' && texto[i+2]==='a' && texto[i+3]==='t'){
				
				encriptar = encriptar + texto[i];
				i=i+3;
				flag = true;
				
			}else{
				if(texto[i]==='a' || texto[i]==='e' || texto[i]==='i' || texto[i]==='o' || texto[i]==='u'){

					if(texto[i]==='a'){
						encriptar = encriptar + "ai";
					}else if(texto[i]==='e'){
						encriptar = encriptar + "enter";
					}else if(texto[i]==='i'){
						encriptar = encriptar + "imes";
					}else if(texto[i]==='o'){
						encriptar = encriptar + "ober";
					}else if(texto[i]==='u'){
						encriptar = encriptar + "ufat";
					}

				}else{
					
					encriptar = encriptar + texto[i];

				};
				
			};

		}else{
			encriptar = encriptar + texto[i];
		};
		
	};

	if(flag === true){
		document.querySelector('#endText').textContent = "Frase Desencriptado";
	}else{
		document.querySelector('#endText').textContent = "Frase Encriptado";
	};

	document.getElementById('endEncriptado').value = encriptar;
	document.getElementById('textEncriptado').value = "";
	
});



// Botón Copiar
let btnCopy = document.querySelector('#btnCopy');

btnCopy.addEventListener('click', function(event){
	
	event.preventDefault();
	globalVar = document.getElementById('endEncriptado').value
	document.getElementById('textEncriptado').value = "";

	document.getElementById('textEncriptado').value =globalVar;
	document.getElementById('endEncriptado').value = "";

});




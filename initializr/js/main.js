	var $frase = $('#frase'),
		$contar = $('#contar'),
		vocales = 'aeiou',
		consonantes = 'bcdfghjklmnñpqrstrvwxyz';


		$frase.on('keyup',function (evt) {
			if (evt.keyCode == '13') {
				contarVocales()
			}
		})
		$contar.on('click',contarVocales)
		function contarVocales () {
			//console.log('estoy contando');
			var frase = $frase.val().toLowerCase(),
				res = {a:0, e:0, i:0, o:0, u:0 },
				letra;
			for (var i = 0; i < frase.length; i++) {
				letra = frase[i];
				if (vocales.indexOf(letra) !=-1 ) {
					//res[letra] = res[letra] +1;
					//res[letra] +=1;
					res[letra]++;
				}
			}
			for( var key in res ){
				console.log(key, res[key], $('#' + key + '-vocal'));
				$('#' + key + '-vocal').text(res[key])
			}
		}

		$contar.on('click', contarConsonantes)
		function contarConsonantes () {
			// body...
			var frase = $frase.val().toLowerCase(),
				res = {b:0, c:0, d:0, f:0, g:0,h:0,j:0,k:0,
						l:0,m:0,n:0,ñ:0,p:0,q:0,r:0,s:0,t:0,
						v:0,w:0,x:0,y:0,z:0},
				letra;
			for (var i = 0; i < frase.length; i++) {
				letra = frase[i];
				if (consonantes.indexOf(letra) !=-1 ) {
					//res[letra] = res[letra] +1;
					//res[letra] +=1;
					res[letra]++;
				}
			}
			for( var key in res ){
				console.log(key, res[key], $('#' + key + '-con'));
				$('#' + key + '-con').text(res[key])
			}
		}
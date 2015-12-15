	var $frase = $('#frase'),
		$contar = $('#contar'),
		vocales = 'aeiou';

		$frase.on('keyup',function (evt) {
			if (evt.keyCode == '13') {
				contarVocales()
			}
		})
		$contar.on('click',contarVocales)
		function contarVocales () {
			//console.log('estoy contando');
			var frase = $frase.val(),
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
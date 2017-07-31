	function text() {
		

		 
	}
	function text2() {
		 var a1 = document.getElementById('css_text');
		 a1.style.display = "block"; 
		 a1.style.marginTop = "15px";
		 var elem = document.getElementById('text')
		 elem.remove();
		 
		 var img  = document.getElementById('img');
		 img.src = "foto/CSS1.png";
	}
	
		var title = document.getElementById('title');
		var theory = document.getElementById('theory');
		
		function fun_text1() {
			
			title.innerHTML = 'Тег ' + '<b>' + '"h1"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується як заголовок.';
			var sor = document.getElementsByTagName('source')
			sor[0].src = "video/h1.mp4";	
			sor[1].src = "video/h1.ogg";
			sor[2].src = "video/h1.webm";			
			video.load();
		}

		function fun_text2() {
			title.innerHTML = 'Тег ' + '<b>' + '"p"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується як абзац.';
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/p.mp4";
			sor[1].src = "video/p.ogg";
			sor[2].src = "video/p.webm";			
			video.load();
		}
		
		function fun_text3() {
			title.innerHTML = 'Тег ' + '<b>' + '"br"' + '</b>';
			theory.innerHTML = 'Являється одиночним тегом, використовується для переносу' + '<br>' + 'строфи в інший рядок.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/br.mp4";
			sor[1].src = "video/br.ogg";
			sor[2].src = "video/br.webm";			
			video.load();
		}
		
		function fun4() {
			title.innerHTML = 'Тег ' + '<b>' + '"hr"' + '</b>';
			theory.innerHTML = 'Являється одиночним тегом, використовується' + '<br>' + 'як горизонтальна лінія.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/hr.mp4";
			sor[1].src = "video/hr.ogg";
			sor[2].src = "video/hr.webm";			
			video.load();
		}
		
		function fun5() {
			title.innerHTML = 'Тег ' + '<b>' + '"ul + li"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'як невпорядкований список.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/ul+li.mp4";
			sor[1].src = "video/ul+li.ogg";
			sor[2].src = "video/ul+li.webm";			
			video.load();
		}
		
		function fun6() {
			title.innerHTML = 'Тег ' + '<b>' + '"ol + li"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'як впорядкований список.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/ol+li.mp4";
			sor[1].src = "video/ol+li.ogg";
			sor[2].src = "video/ol+li.webm";			
			video.load();
		}
		
		function fun7() {
			title.innerHTML = 'Тег ' + '<b>' + '"sup"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'як верхній індекс.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/sup.mp4";
			sor[1].src = "video/sup.ogg";
			sor[2].src = "video/sup.webm";			
			video.load();
		}
		
		function fun8() {
			title.innerHTML = 'Тег ' + '<b>' + '"sub"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'як нижній індекс.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/sub.mp4";
			sor[1].src = "video/sub.ogg";
			sor[2].src = "video/sub.webm";			
			video.load();
		}
		
		function fun9() {
			title.innerHTML = 'Тег ' + '<b>' + '"i"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'для виділення тексту.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/i.mp4";
			sor[1].src = "video/i.ogg";
			sor[2].src = "video/i.webm";			
			video.load();
		}
		
		function fun10() {
			title.innerHTML = 'Тег ' + '<b>' + '"b"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'для виділення тексту жирним шрифтом.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/b.mp4";
			sor[1].src = "video/b.ogg";
			sor[2].src = "video/b.webm";			
			video.load();
		}
		
		function fun11() {
			title.innerHTML = 'Тег ' + '<b>' + '"em"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'для виділення тексту з особливим акцентом.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/em.mp4";
			sor[1].src = "video/em.ogg";
			sor[2].src = "video/em.webm";			
			video.load();
		}
		
		function fun12() {
			title.innerHTML = 'Тег ' + '<b>' + '"strong"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'для виділення важливого тексту.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/strong.mp4";
			sor[1].src = "video/strong.ogg";
			sor[2].src = "video/strong.webm";			
			video.load();
		}
		
		function fun13() {
			title.innerHTML = 'Тег ' + '<b>' + '"mark"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'для простого виділення тексту.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/mark.mp4";
			sor[1].src = "video/mark.ogg";
			sor[2].src = "video/mark.webm";		
			video.load();
		}
		
		function fun14() {
			title.innerHTML = 'Тег ' + '<b>' + '"del"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, виділяє тест' + '<br>' + 'який був видалений в нові версії докуиентаю';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/del.mp4";
			sor[1].src = "video/del.ogg";
			sor[2].src = "video/del.webm";		
			video.load();
		}
		
		function fun15() {
			title.innerHTML = 'Тег ' + '<b>' + '"ins"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, виділяє тест' + '<br>' + 'який був добавлений в нові версії докуиентаю';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/ins.mp4";
			sor[1].src = "video/ins.ogg";
			sor[2].src = "video/ins.webm";		
			video.load();
		}
	</script>

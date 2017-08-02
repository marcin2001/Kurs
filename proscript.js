		var title = document.getElementById('title');
		var theory = document.getElementById('theory');
		
		
		let current = 0;
		let pages = [fun1,fun2,fun3,fun4,fun5,fun6,fun7,fun8,fun9,fun10,fun11,fun12,fun13,fun14,fun15];
		
		document.getElementById('prev').addEventListener('click', function(){
		    if (current = 0) {
		      current = pages.length;
		    }
		    current--;
		    let func = pages[current];
		    func.call();
		});
		
		document.getElementById('next').addEventListener('click', function(){
			if (current = pages.length - 1) {
		      current = -1;
		    }
		    current++;
		    let func = pages[current];
		    func.call();
		});

		
		function fun1() {
			selectedCourseName = "h1";
			title.innerHTML = 'Тег ' + '<b>' + '"h1"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується як заголовок.';
			var sor = document.getElementsByTagName('source')
			sor[0].src = "video/h1-html.mp4";	
			sor[1].src = "video/h1-html.ogg";
			sor[2].src = "video/h1-html.webm";			
			video.load();
		}

		function fun2() {
			selectedCourseName = "p";
			title.innerHTML = 'Тег ' + '<b>' + '"p"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується як абзац.';
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/p-html.mp4";
			sor[1].src = "video/p-html.ogg";
			sor[2].src = "video/p-html.webm";			
			video.load();
		}
		
		function fun3() {
			selectedCourseName = "br";
			title.innerHTML = 'Тег ' + '<b>' + '"br"' + '</b>';
			theory.innerHTML = 'Являється одиночним тегом, використовується для переносу' + '<br>' + 'строфи в інший рядок.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/br-html.mp4";
			sor[1].src = "video/br-html.ogg";
			sor[2].src = "video/br-html.webm";			
			video.load();
		}
		
		function fun4() {
			title.innerHTML = 'Тег ' + '<b>' + '"hr"' + '</b>';
			theory.innerHTML = 'Являється одиночним тегом, використовується' + '<br>' + 'як горизонтальна лінія.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/hr-html.mp4";
			sor[1].src = "video/hr-html.ogg";
			sor[2].src = "video/hr-html.webm";			
			video.load();
		}
		
		function fun5() {
			title.innerHTML = 'Тег ' + '<b>' + '"ul + li"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'як невпорядкований список.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/ul+li-html.mp4";
			sor[1].src = "video/ul+li-html.ogg";
			sor[2].src = "video/ul+li-html.webm";			
			video.load();
		}
		
		function fun6() {
			title.innerHTML = 'Тег ' + '<b>' + '"ol + li"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'як впорядкований список.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/ol+li-html.mp4";
			sor[1].src = "video/ol+li-html.ogg";
			sor[2].src = "video/ol+li-html.webm";			
			video.load();
		}
		
		function fun7() {
			title.innerHTML = 'Тег ' + '<b>' + '"sup"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'як верхній індекс.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/sup-html.mp4";
			sor[1].src = "video/sup-html.ogg";
			sor[2].src = "video/sup-html.webm";			
			video.load();
		}
		
		function fun8() {
			title.innerHTML = 'Тег ' + '<b>' + '"sub"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'як нижній індекс.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/sub-html.mp4";
			sor[1].src = "video/sub-html.ogg";
			sor[2].src = "video/sub-html.webm";			
			video.load();
		}
		
		function fun9() {
			title.innerHTML = 'Тег ' + '<b>' + '"i"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'для виділення тексту.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/i-html.mp4";
			sor[1].src = "video/i-html.ogg";
			sor[2].src = "video/i-html.webm";			
			video.load();
		}
		
		function fun10() {
			title.innerHTML = 'Тег ' + '<b>' + '"b"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'для виділення тексту жирним шрифтом.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/b-html.mp4";
			sor[1].src = "video/b-html.ogg";
			sor[2].src = "video/b-html.webm";			
			video.load();
		}
		
		function fun11() {
			title.innerHTML = 'Тег ' + '<b>' + '"em"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'для виділення тексту з особливим акцентом.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/em-html.mp4";
			sor[1].src = "video/em-html.ogg";
			sor[2].src = "video/em-html.webm";			
			video.load();
		}
		
		function fun12() {
			title.innerHTML = 'Тег ' + '<b>' + '"strong"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'для виділення важливого тексту.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/strong-html.mp4";
			sor[1].src = "video/strong-html.ogg";
			sor[2].src = "video/strong-html.webm";			
			video.load();
		}
		
		function fun13() {
			title.innerHTML = 'Тег ' + '<b>' + '"mark"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, використовується' + '<br>' + 'для простого виділення тексту.';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/mark-html.mp4";
			sor[1].src = "video/mark-html.ogg";
			sor[2].src = "video/mark-html.webm";		
			video.load();
		}
		
		function fun14() {
			title.innerHTML = 'Тег ' + '<b>' + '"del"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, виділяє тест' + '<br>' + 'який був видалений в нові версії докуиентаю';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/del-html.mp4";
			sor[1].src = "video/del-html.ogg";
			sor[2].src = "video/del-html.webm";		
			video.load();
		}
		
		function fun15() {
			title.innerHTML = 'Тег ' + '<b>' + '"ins"' + '</b>';
			theory.innerHTML = 'Являється закриваючим тегом, виділяє тест' + '<br>' + 'який був добавлений в нові версії докуиентаю';	
			var sor = document.getElementsByTagName('source');
			sor[0].src = "video/ins-html.mp4";
			sor[1].src = "video/ins-html.ogg";
			sor[2].src = "video/ins-html.webm";		
			video.load();
		}
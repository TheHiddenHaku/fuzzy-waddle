if(!Modernizr.cssanimations) {
    alert("ciao");
}


	function slideup($target) {
	    $($target).addClass("slideUp");
	}
	function bigentrance($target) {
	    $($target).addClass("bigEntrance");
	}
	function expandopen($target) {
	    $($target).addClass("expandOpen");
	}
	function fadein($target) {
	    $($target).addClass("fadeIn");
	}
	
	function carte($target) {
	    $($target).addClass("carte_slideLeft");
	}
	function cartescale($target) {
	    $($target).addClass("carte_scale");
	}
	function pulsedr($target) {
	    $($target).addClass("pulsedr");
	}
	function floatingmano($target) {
	    $($target).addClass("floatinghand");
	}
	function arcobalenoanim($target) {
	    $($target).addClass("arcobaleno");
	}
	function slidedownpuntine($target) {
	    $($target).addClass("slideDownHatch");
	}
	function slideuppuntine($target) {
	    $($target).addClass("slideUpHatch");
	}
	function stretchleft($target) {
	    $($target).addClass("stretchLeft");
	}
	function stretchright($target) {
	    $($target).addClass("stretchRight");
	}
	function lentefloating($target) {
	    $($target).addClass("lentefloating");
	}
	function bussolaenter($target) {
	    $($target).addClass("bussolaenter");
	}
	function puntatorefloating($target) {
	    $($target).addClass("puntatorefloating");
	}
	function puntatoreprefloating($target) {
	    $($target).addClass("puntatoreprefloating");
	}
	function hatch($target) {
	    $($target).addClass("hatch");
	}
	function fadein($target) {
	    $($target).addClass("fadeIn");
	}
	function monetaanim($target) {
	    $($target).addClass("monetaanim");
	}
	
	
	
	$(window).scroll(function() {
	
		var topOfWindow = $(window).scrollTop()
	
		//COMUNICAZIONE
		if($("section#comunicazione").offset().top < (topOfWindow+50)){
			$('#tastiera').addClass("slideUp");	
			setTimeout(function(){slideup("#computer")},250);
			setTimeout(function(){slideup("#libro")},500);
			setTimeout(function(){slideup("#cellulare")},750);	
			setTimeout(function(){slideup("#fiore")},1000);	
			setTimeout(function(){expandopen("#facebook")},1000);
			setTimeout(function(){fadein(".facebook")},1000);	
			setTimeout(function(){expandopen("#twitter")},1500);
			setTimeout(function(){fadein(".twitter")},1500);	
			setTimeout(function(){expandopen("#text")},2000);
			setTimeout(function(){fadein(".altro")},2000);			
		}
		
		//RICERCA
		if($("section#ricerca").offset().top < (topOfWindow+50)){
			$('#carta_uno').addClass("carte_slideLeft");	
			setTimeout(function(){carte("#carta_due")},50);
			setTimeout(function(){carte("#carta_tre")},450);
			setTimeout(function(){carte("#carta_quattro")},150);	
			setTimeout(function(){carte("#carta_cinque")},300);	
			setTimeout(function(){carte("#carta_sei")},250);
			setTimeout(function(){carte("#carta_sette")},100);	
			setTimeout(function(){carte("#carta_otto")},350);
			setTimeout(function(){carte("#carta_nove")},400);	
			setTimeout(function(){carte("#carta_dieci")},200);	
			setTimeout(function(){cartescale("#azienda")},300);	
			setTimeout(function(){cartescale("#uomo")},750);
			setTimeout(function(){pulsedr("#ricerca #azienda")},2250);	
			setTimeout(function(){pulsedr("#uomo")},2700);	
			setTimeout(function(){monetaanim("#moneta1")},2000);
			setTimeout(function(){monetaanim("#moneta2")},2500);
			setTimeout(function(){monetaanim("#moneta3")},3000);
			setTimeout(function(){monetaanim("#moneta4")},3500);
			setTimeout(function(){monetaanim("#moneta5")},4000);
			setTimeout(function(){monetaanim("#moneta6")},4500);
			setTimeout(function(){monetaanim("#moneta7")},5000);
			setTimeout(function(){monetaanim("#moneta8")},5500);				
		}
		
		//RACCOLTA
		if($("section#raccolta").offset().top < (topOfWindow+50)){
			$('#azienda_bkg').addClass("slideUp");	
			setTimeout(function(){slideup("#istituzione_bkg")},250);
			setTimeout(function(){slideup("#privato_bkg")},500);
			setTimeout(function(){slideup("#raccolta #azienda")},1250);	
			setTimeout(function(){slideup("#istituzione")},1500);	
			setTimeout(function(){slideup("#privato")},1750);
		}
		
		//AZIENDE PER BENE
		if($("section#aziende_per_bene").offset().top < (topOfWindow+50)){
			$('#mano').addClass("slideUp");
			setTimeout(function(){floatingmano("#mano")},500);
			setTimeout(function(){arcobalenoanim("#arcobaleno")},500);
		}
		
		//INTERNAZIONALIZZAZIONE
		if($("section#internazionalizzazione").offset().top < (topOfWindow+50)){
			$('#puntina_uno').addClass("slideDownHatch");
			setTimeout(function(){slidedownpuntine("#puntina_due")},250);
			setTimeout(function(){slidedownpuntine("#puntina_tre")},500);
			setTimeout(function(){slideuppuntine("#puntina_quattro")},750);
			setTimeout(function(){slideuppuntine("#puntina_cinque")},1000);
			setTimeout(function(){slidedownpuntine("#puntina_sei")},1250);
			setTimeout(function(){stretchleft("#percorso_uno")},1500);
			setTimeout(function(){stretchleft("#percorso_due")},1750);
			setTimeout(function(){stretchright("#percorso_tre")},2000);
			setTimeout(function(){stretchleft("#percorso_quattro")},2250);
			setTimeout(function(){stretchleft("#percorso_cinque")},2500);
			setTimeout(function(){stretchleft("#percorso_sei")},2750);
			setTimeout(function(){slideup("#lente")},3000);
			setTimeout(function(){lentefloating("#lente")},3500);
			setTimeout(function(){bussolaenter("#bussola")},3500);
			setTimeout(function(){bussolaenter("#puntatore")},3500);
			setTimeout(function(){puntatoreprefloating("#puntatore")},4500);
			setTimeout(function(){puntatorefloating("#puntatore")},4900);
		}
		
		//FIRST FRIDAYS
		if($("section#first_fridays").offset().top < (topOfWindow+50)){
			$('#francesca').addClass("slideUp");
			setTimeout(function(){slideup("#tipo")},500);
			setTimeout(function(){hatch("#domanda_tipo")},1000);
			setTimeout(function(){slideup("#tipa")},1500);
			setTimeout(function(){hatch("#domanda_tipa")},2000);
			setTimeout(function(){hatch("#risposta_uno")},2500);
			setTimeout(function(){hatch("#risposta_due")},3000);
			setTimeout(function(){hatch("#risposta_tre")},3500);
			setTimeout(function(){fadein("#frecce")},4000);
		}
		
		//END
		$( ".misura" ).hover(
			function() {
		  		$('.misura').addClass("animate");
		  	},
		  	function() {
		  			$('.misura').removeClass("animate");
		  		}
		);
		
		$( ".competenze" ).hover(
			function() {
				$('.competenze').addClass("animate");
			},
			function() {
					$('.competenze').removeClass("animate");
				}
		);
		
		$( ".inter" ).hover(
		  function() {
		  		$('.inter').addClass("animate");
		  	},
		  	function() {
		  			$('.inter').removeClass("animate");
		  		}
		);
	
		
	});


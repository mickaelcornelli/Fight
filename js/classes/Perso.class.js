class Perso {
	constructor(name, hp, attack, defense, magie) {
	    //initialisation des propriété en fonction des arguments passé
	    this.name = name;
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.magie = magie;
	}
	
	attaquer(perso) {
	    //creation d'une variable dégat qui soustrait les point de defense du perso par rapport à l'attaque
	    let degats = this.attack - perso.defense
	    //si les dégats sont inférieur à 10
	    if (degats < 10) {
	        //ajout du message le perso concerné ne sent plus rien
	        $("#info p").append(perso.name +' ne sent plus rien....<br/>');
	        //dégat sera 10
	    	degats = 10
	    }    
	    //on soustrait les dégats aux points de vie du perso
		perso.hp -= degats
	   //on écrit un message l'attaquant attque le perso et lui enlève tant de point de vie
		$("#info p").append(this.name +' Attaque, il enlève '+ degats + ' hp à '+ perso.name+'<br/>');
	   //si le perso n'a plus de point de vie
		if  (perso.hp <= 0) {
	        //on attribut 0 au pv du perso
	        perso.hp = 0;
		}        
	   //ajout d'un message récapitulant les points de vie du perso et de l'attaquant
	   $("#info p").append(perso.name +' a  '+ perso.hp+ ' hp<br/>' );
	
	}
	
	sort(perso) {
	    
	    //si la magie est supérieur à 0
		if (this.magie > 0) {
	        //creation d'une variable degat attribution d'un nombre au hasard entre 1 et la magie restant
			let degats = getRandomInteger(1, this.magie);
	        //on écrit un message disant que l'attaquant jette un sort et enlève tant de point de vie au perso concerné
			$("#info p").append(this.name +  ' jete un sort, il enlève '+ degats + ' hp à '+ perso.name+'<br/>');
	        //on soustrait les dégats au points de vie du perso
	        perso.hp -= degats;
	        this.magie -=  degats;
	        //si le perso n'a plus de point de vie
	        if  (perso.hp <= 0) {
	            //on attribut 0 au pv du perso
	            perso.hp = 0;
	        }
	        //ajout d'un message récapitulant les points de vie du perso et de l'attaquant
	        $("#info p").append(perso.name +' a  '+ perso.hp+ ' hp<br/>');
	    //sinon
		}else{
	        //ajout d'un message disant que vous n'avez plus de point de magie
	        $("#info p").append("Vous n'avez plus de point de magie....<br/>");
		}
	}
	
	defendre() {
	    //création d'une variable ratio qui va récupérer un cacul arrondis(la defense * chiffre au hasard)
	    let ratio =  Math.round(this.defense * Math.random());
	    //on écrit un message disant que le perso concerné augmente sa défense de tant de points
		$("#info p").append(this.name+' augmente sa defense de '+ ratio + ' point <br/>');
	    //attribution du ratio au points de défense initial (on divise par 2)
	    this.defense += ratio/2;
	    //on écrit que le perso concerné à tant de points de défense
	    $("#info p").append(this.name +' a une defense de : '+ this.defense+'<br/>');
	}
}
class Program {

	constructor() {
	    //création des propriétés des personnages avec des valeurs par défaut qu'on envoi dans la class Perso (composition)
	    this.player = new Perso('Player', 300, 50, 7, 120);
		this.dragon = new Perso('Dragon', 280, 45, 18, 160);
	
	    //appel de la fonction affichage
	    this.affichage()
	    
	    //gestionnaire d'événement qui appeleront nos fonctions d'attaque de sort ou de défense
	    document.querySelector("#attaquer").addEventListener("click", this.onClickAttaque.bind(this))
	    document.querySelector("#defendre").addEventListener("click", this.onClickDefense.bind(this))
	    document.querySelector("#sort").addEventListener("click", this.onClickSort.bind(this))
	}
    
	affichage() {
	    //si les points de vie du perso sont supérieur à 0 et celui de l'adversaire aussi
	    if (this.player.hp > 0 && this.dragon.hp > 0){
	        
	        //pour chacun on va glisser un message leurs aspect (points d'attque, de defense, de vie, de magie)
	        document.querySelector("#info p").innerHTML = 
	        `Caractéristiques de <span class="player">${this.player.name}</span> :<br>
	        PV : ${this.player.hp}, Attaque : ${this.player.attack}, Défense : ${this.player.defense}, Magie : ${this.player.magie}<br><br>
	        Caractéristiques de <span class="dragon">${this.dragon.name}</span> :<br>
	        PV : ${this.dragon.hp}, Attaque : ${this.dragon.attack}, Défense : ${this.dragon.defense}, Magie : ${this.dragon.magie}`
	      
	    //sinon
	    }else{ 
	    
	        //on cache notre palette de commande (on pourra voir les bouttons)
	        document.querySelector("#commande").classList.toggle('hide')
	        document.querySelector("#playAgain").classList.toggle('hide')
	        
	        //si c'est l'un qui a gagné
	        if (this.dragon.hp <= 0){
	            //affichage du message du vainqueur
	            const perso1 = document.querySelector("#perso1")
	            perso1.classList.toggle('hide')
	            
	        //sinon
	        }else{
	            //affichage du message de l'autre vainqueur
	            const perso2 = document.querySelector("#perso2")
	            perso2.classList.toggle('hide')
	        }
	    }           
	}
	
	onClickAttaque(event) {
	    //suppression du comportement par défault du navigateur
	    event.preventDefault();
	    //on vide les infos 
	    document.querySelector("#info p").innerHTML = ``
	    //le perso attaque l'adversaire(dragon)
	    this.player.attaquer(this.dragon);
	    //l'adversaire contre
	    this.contre()
	    //affichage de l'état de jeux des perso
	    this.affichage()
	}
	
	onClickSort(event) {
	    //suppression du comportement par défault du navigateur
	     event.preventDefault();
	    //on vide les infos 
	    document.querySelector("#info p").innerHTML = ``
	    //si les points de magie du perso sont supérieur à 0
	    if (this.player.magie > 0){
	        //on envoi un sort sur l'adversaire
	        this.player.sort(this.dragon)
	        //l'adversaire peut contrer
	        this.contre()
	        //on affiche l'état de jeux des perso
	        this.affichage()
	   //sinon
	   }else{    
	        //envoi de message dans la console disant qu'il choissise autre chose
	        let msg = `Vous n'avez pas assez de points de magie pour lancer un sort`
	        document.querySelector("#info p").append(msg)
	   }    
	}
	
	onClickDefense(event) {
	    //suppression du comportement par défault du navigateur
	     event.preventDefault();
	    //on vide les infos 
	    document.querySelector("#info p").innerHTML = ``
	    //le perso appel la defense
	    this.player.defendre()
	   //l'adversaire contre
	   this.contre()
	   //affichage de l'état de jeux des perso
	   this.affichage()
	}
	
	contre() {
	    //création d'un variable random qui récup un chiffre au pif entre 1 et 3
	    let random = getRandomInteger(1,3)
	    //condition si c'est 1
	    if(random == 1){
	        //l'adversaire attaque notre perso
	        this.dragon.attaquer(this.player)
	    }
	   //si c'est 2
	    else if(random == 2){
	        //si l'adversaire à des points de magie
	        if (this.dragon.magie > 0){
	            //l'adversaire envoi un sort sur notre perso
	            this.dragon.sort(this.player)
	        //sinon 
	        }else{   
	            //on relance le contre
	            this.contre()
	        }    
	   //sinon (c'est 3)
	   }else{
	        //l'adversaire envoi une défense
	        this.dragon.defendre()
	   }      
	}
}
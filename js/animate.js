const canvas = document.getElementById("canvas"); 
const spaceship = document.getElementById("spaceship"); 
const asteroids = document.getElementById("asteroids")
let listAst=[]; 
listAst.push(document.getElementById("asteroid0")); 
const explosion= document.getElementById("explosion"); 
const star = document.getElementById("star"); 
const winText = document.getElementById("win"); 
const buttonAdd=document.getElementById("add"); 
const input= document.getElementById("scoreinput");


let asteroidTouched = false;
let score =0; 
input.value=0; 


spaceship.rotation=0; 
spaceship.angle=0; 
spaceship.position = {x: parseInt(spaceship.style.left) || 0 , y: parseInt(spaceship.style.top) || 300}; 
spaceship.speed=10; 


listAst[0].position = {x: parseInt(listAst[0].style.left) || 390 , y: parseInt(listAst[0].style.top) || 459}; 
listAst[0].speed=2;

star.position = {x: parseInt(star.style.left) || 1000 , y: parseInt(star.style.top) || 459}; 

function loopForever() {
    setTimeout(() =>{
        //Position des astéroids
        for (let i=0 ; i<listAst.length ; i++ ) {
                if(Math.random()>0.5) {
                    if (listAst[i].position.x + Math.random()*50>canvas.offsetWidth) { // Si sort de la boite
                        listAst[i].position.x -= Math.random()*50;
                    }
                    else {
                        listAst[i].position.x += Math.random()*50;  // Décalage pouvant aller de 0 à 5px
                    }
                }
                else {
                    if (listAst[i].position.x - Math.random()*50<0) { // Si sort de la boite
                        listAst[i].position.x += Math.random()*50;
                    }
                    else {
                        listAst[i].position.x -= Math.random()*50;  // Décalage pouvant aller de 0 à 5px
                    } 
                }
                listAst[i].style.left = listAst[i].position.x; 
        
                if(Math.random()>0.5) {
                    if (listAst[i].position.y + Math.random()*50>canvas.offsetHeight) { // Si sort de la boite
                        listAst[i].position.y -= Math.random()*50;
                    }
                    else {
                        listAst[i].position.y += Math.random()*50;  // Décalage pouvant aller de 0 à 5px
                    }
                }
                else {
                    if (listAst[i].position.y - Math.random()*50<0) { // Si sort de la boite
                        listAst[i].position.y += Math.random()*50;
                    }
                    else {
                        listAst[i].position.y -= Math.random()*50;  // Décalage pouvant aller de 0 à 5px
                    }
                }
                listAst[i].style.top = listAst[i].position.y; 

        }
        //Position du spaceship
        if (!asteroidTouched) {
        switch(spaceship.rotation) {
            case 0: 
                spaceship.position.x += spaceship.speed; 
                spaceship.style.left = spaceship.position.x; 
    
                if(Math.random()>0.5) {
                    spaceship.position.y += Math.random()*10;  // Décalage pouvant aller de 0 à 10px
                }
                else {
                    spaceship.position.y -= Math.random()*10;  // Décalage pouvant aller de 0 à 10px
                }
                spaceship.style.top = spaceship.position.y; 
                break; 
            case 1: 
                spaceship.position.y += spaceship.speed; 
                spaceship.style.top = spaceship.position.y; 
    
                if(Math.random()>0.5) {
                    spaceship.position.x += Math.random()*10;  // Décalage pouvant aller de 0 à 10px
                }
                else {
                    spaceship.position.x -= Math.random()*10;  // Décalage pouvant aller de 0 à 10px
                }
                spaceship.style.left = spaceship.position.x; 
                break; 
            case 2: 
                spaceship.position.x -= spaceship.speed; 
                spaceship.style.left = spaceship.position.x; 
    
                if(Math.random()>0.5) {
                    spaceship.position.y += Math.random()*10;  // Décalage pouvant aller de 0 à 10px
                }
                else {
                    spaceship.position.y -= Math.random()*10;  // Décalage pouvant aller de 0 à 10px
                }
                spaceship.style.top = spaceship.position.y; 
                break; 
            case 3: 
                
                spaceship.position.y -= spaceship.speed; 
                spaceship.style.top = spaceship.position.y; 
    
                if(Math.random()>0.5) {
                    spaceship.position.x += Math.random()*10;  // Décalage pouvant aller de 0 à 10px
                }
                else {
                    spaceship.position.x -= Math.random()*10;  // Décalage pouvant aller de 0 à 10px
                }
                spaceship.style.left = spaceship.position.x; 
                break; 
        }
        }
                
        
        if (spaceship.position.x < canvas.offsetWidth || spaceship.position.y <canvas.offsetHeight ) {
            for (let i=0 ; i<listAst.length ; i++ ) {
                if (spaceship.position.x < listAst[i].position.x+30 && spaceship.position.x > listAst[i].position.x-30 && spaceship.position.y <          listAst[i].position.y+30 && spaceship.position.y > listAst[i].position.y-30) { // Si le spaceship passe proche de l'asteroid
                    explosion.style.left=listAst[i].position.x; 
                    explosion.style.top= listAst[i].position.y; 
                    explosion.style.visibility="visible"; 
                    listAst[i].style.visibility="hidden"; 
                    spaceship.style.visibility="hidden"; 
                    asteroidTouched=true; 
                    
                }
            }
            if (spaceship.position.x < star.position.x+30 && spaceship.position.x > star.position.x-30 && spaceship.position.y < star.position.y+30 && spaceship.position.y > star.position.y-30) {
                //star.style.width=100;
                //star.style.height=100; 
                //winText.style.visibility="visible";
                score+=listAst.length*10; 
                input.value=score; 
                star.style.top=Math.random()*300; 
                star.style.left=Math.random()*1000; 
                star.position = {x: parseInt(star.style.left) || 1000 , y: parseInt(star.style.top) || 459};
                if (!asteroidTouched){
                    loopForever(); 
            }
                
            }
            else {
                if (!asteroidTouched){
                    loopForever(); 
            }
            }
            
        }
    },100) ; 
}
function keyOrientation(e) {
     
    if (e.which===38){ //Touche flèche vers le haut
        spaceship.rotation=3; 
        spaceship.angle=270;
        spaceship.style.transform = "rotate("+spaceship.angle+ "deg)";
    }
    if (e.which===40){ //Touche flèche vers le bas
        spaceship.rotation=1;
        spaceship.angle=90;
        spaceship.style.transform = "rotate("+spaceship.angle+ "deg)";
        
    }
    if (e.which===37){ //Touche flèche vers la gauche
        spaceship.rotation=2; 
        spaceship.angle=180;
        spaceship.style.transform = "rotate("+spaceship.angle+ "deg)";
    }
    if (e.which===39){ //Touche flèche vers la droite
        spaceship.rotation=0; 
        spaceship.angle=0;
        spaceship.style.transform = "rotate("+spaceship.angle+ "deg)";
        
    }
}
function f(){
    if (spaceship.rotation===3) {
        spaceship.rotation = 0; 
        spaceship.style.transform = "rotate(0deg)";
        spaceship.angle=0; 
    }
    else {
        spaceship.rotation ++ ; 
        spaceship.angle +=90; 
        spaceship.style.transform = "rotate("+spaceship.angle+ "deg)";
    }
}

function addAsteroid() {
    console.log("I want to add an asteroid");
    //Création de l'asteroid
    var monImg = document.createElement('img');
    monImg.src = "../media/asteroid.png";
    monImg.id="asteroid"+ parseInt(listAst.length+1); 
    asteroids.appendChild(monImg);
    listAst.push(document.getElementById("asteroid"+ parseInt(listAst.length+1)));
    
    listAst[listAst.length-1].position = {x: Math.floor(Math.random()*1500) || 1000 , y: Math.floor(Math.random()*600) || 459}; 
    listAst[listAst.length-1].speed=2;
    
    //Creation du style
    listAst[listAst.length-1].style.position = 'absolute';
    listAst[listAst.length-1].style.height = '20px';
    listAst[listAst.length-1].style.height = '20px';
    listAst[listAst.length-1].style.top=listAst[listAst.length-1].x; 
    listAst[listAst.length-1].style.left=listAst[listAst.length-1].y;

}

document.addEventListener("DOMContentLoaded", loopForever); 
document.addEventListener("click",f); 
document.addEventListener("keydown", keyOrientation);
buttonAdd.addEventListener("click", addAsteroid);

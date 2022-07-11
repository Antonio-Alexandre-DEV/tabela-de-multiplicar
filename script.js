let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

let circle = {

 x : 250,
 y : 250,
 raio : 100,

 inicio : 0,
 fim : 0 * Math.PI,
 antiHor : true,
    
}


function drawCircle(c){

ctx.beginPath();
ctx.rect(0,0,500,500);
ctx.fillStyle = "beige";
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "blue";
ctx.arc ( c.x,c.y,c.raio,c.inicio,c.fim, c.antiHor);

ctx.fill();
ctx.stroke();


}



setInterval(function(){

    if(circle.fim <2 * Math.PI){
        circle.fim += 0.3;
        circle.x += 3;
    }

    drawCircle(circle);

}, 100);


function tabuada(){

    let saida = document.getElementById("saida");
    let n = Number(document.getElementById('fnum').value);

    saida.innerHTML = `<h2>Tabuada de ${n}</h2>`;
    let i = 1 ;
    while(i <= 10) {
        saida.innerHTML += `${n} x ${i} = <strong>${n * i}</strong><br>`
        
        i ++
  
    }
}








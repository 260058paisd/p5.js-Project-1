function first(p){
  
  p.setup = function (){
    
    p.createCanvas(500,100)
    p.background(0)
    
    p.square(30, 20, 55)
    
  }
  
  p.draw = function (){
    
    
    
    
  }
  
}

new p5(first)




function setup(){
  
  
  createCanvas(500,500, WEBGL)
  
  
}

function draw(){
  
  background(200)
  orbitControl()
  torus()
  
  
}





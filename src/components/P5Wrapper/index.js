import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import p5 from "p5";

function sketch(p){
  let rotation = 0;
  let img1;

  let myLogo;

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.displayHeight);
 }
  p.setup = function () {

    // p.createCanvas(window.document.documentElement.clientWidth, window.document.documentElement.clientHeight);//p.WEBGL
    p.createCanvas(p.windowWidth, p.displayHeight);
    // alert(p.width)
    img1 = p.loadImage('./logo.png')
    // p.imageMode(p.CENTER)

    myLogo = new NoiseWalker(100, 100);
    console.log(myLogo)
  };

  p.draw = function () {
    p.background(100);
    // p.normalMaterial();
    // p.noStroke();
    // p.push();
    // p.rotateY(rotation);
    // // p.box(100);
    // p.pop();
    // p.image(img1,30,30,100,50);

    myLogo.display();
    myLogo.move()
  };


  // our NoiseWalker class
  class NoiseWalker {

    constructor(x, y) {
      // store our position
      this.x = x;
      this.y = y;

      // create a "noise offset" to keep track of our position in Perlin Noise space
      this.xNoiseOffset = p.random(0,1000);
      this.yNoiseOffset = p.random(1000,2000);
    }

    // display mechanics
    display() {
      p.fill(255);
      // p.ellipse(this.x, this.y, 25, 25);
      p.image(img1,this.x,this.y,100,50);
      // console.log(p.width, p.height)


      if(this.x > p.width) {
        this.x = 0
      }
      if(this.x < 0) {
        this.x = p.width
      }
      if (this.y > p.height) {
        this.y = 0;
      }
      if(this.y < 0 ){
        this.y = p.height
      }
    }

    // movement mechanics
    move() {
      // compute how much we should move
      var xMovement = p.map( p.noise(this.xNoiseOffset), 0, 1, -1, 1 );
      var yMovement = p.map( p.noise(this.yNoiseOffset), 0, 1, -1, 1 );

      // update our position
      this.x += xMovement;
      this.y += yMovement;

      // update our noise offset values
      this.xNoiseOffset += 0.01;
      this.yNoiseOffset += 0.01;
    }
  }




}

function Sketch(p) {
  return (
    <div className='mySketch'>
      <P5Wrapper sketch={sketch} />
    </div>

  );
}

export default Sketch;

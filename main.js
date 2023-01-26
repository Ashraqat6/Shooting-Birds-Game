const  createbird= (source) => {
  let flyingBird = document.createElement("img");
  flyingBird.src = source;
  flyingBird.classList.add("bird");
  document.body.appendChild(flyingBird);
  let top = Math.random() * window.innerHeight - flyingBird.height;
  if(top>=flyingBird.height){
  flyingBird.style.top = top +"px";
  moveRight(flyingBird, 0);
  }
  else{flyingBird.remove();}
  
};
let scoring=0;
let birdscore=0;
let birdsKilled=0;
const bomb=()=>
{
  let fallingBomb = document.createElement("img");
  fallingBomb.src = "./Images/bomb.png";
  fallingBomb.classList.add("bomb");
  document.body.appendChild(fallingBomb);

let score=document.querySelectorAll(".box")[1];
let killed=document.querySelectorAll(".box")[3];

fallingBomb.onclick=function()
{
  let range=150;
  let birds=document.querySelectorAll(".bird");
  let bombleftMax=fallingBomb.offsetLeft +fallingBomb.width+range;
  let bombtopMax=fallingBomb.offsetTop +fallingBomb.height+range;
  let bombleftMin=fallingBomb.offsetLeft-range;
  let bombtopMin=fallingBomb.offsetTop-range ;
  
  for(let i=0;i<birds.length;i++)
  {
    let birdXcenter=birds[i].offsetLeft+(birds[i].width/2);
    let birdYcenter=birds[i].offsetTop+(birds[i].height/2);

    if(birdXcenter>bombleftMin && birdXcenter<bombleftMax
      &&
      birdYcenter>bombtopMin && birdYcenter<bombtopMax)
      
      {
        
          if(birds[i].src.includes('/Images/bird3.gif'))
          {birdscore=5; console.log(birds[i].src);}
          else if(birds[i].src.includes('/Images/bird1.gif'))
          {birdscore=10;}
          else if(birds[i].src.includes('/Images/bird2.gif'))
          {birdscore=-10;}
          scoring=scoring+birdscore;
          birdsKilled++;
          killed.innerText=`Birds Killed: ${birdsKilled}`;
          score.innerText=`Score: ${scoring}`;
          birds[i].remove();
      }
 
  }
  fallingBomb.remove();
}

  let left = Math.random() * window.innerWidth - fallingBomb.width;
  if(left>fallingBomb.width){
  fallingBomb.style.left = left + "px";
  fallingBomb.style.top = "0px";
  fallDown(fallingBomb, 0, left);
  }
  else{fallingBomb.remove();}
}
const fallDown=function(imageObject,top)
{
  let id=setInterval(function(){
    top+=20;
        if(top<(innerHeight-imageObject.height))
        {
          imageObject.style.top=top+"px";
        }
        else
          {
            clearInterval(id);
            imageObject.remove();
          }
        },100)
}
const moveRight=function(imageObject,left)
{
  let id=setInterval(function(){
    left+=10;

    if(left<(innerWidth-imageObject.width))
    {
      imageObject.style.left=left+"px";
    }
    else
    {
        clearInterval(id);
        imageObject.remove();
    }

  },50);//eof inetrval



}

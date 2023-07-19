window.addEventListener("load",function(){
  
    let url = new URL(window.location.href);
      let submittedName = url.searchParams.get('name');
      if(submittedName){
          // set message
          let welcomeMessage = `Welcome ${submittedName} ^-^`;
          document.querySelector("#welcomeMessage").prepend(welcomeMessage);
          let Welcome=document.querySelectorAll(".box")[0];
          Welcome.innerText=`Welcome: ${submittedName}`;
      }
    let endText= document.querySelectorAll("div")[5];
    let startButton=this.document.querySelector("button");
    let buttonContainer = document.createElement("div");

  // Create the button element
  let playAgainButton = document.createElement("button");
  playAgainButton.innerText = "Play Again";
  playAgainButton.style.fontSize = "large"
  playAgainButton.style.margin="3px";
  // Add an event listener to reload the location when the button is clicked
  playAgainButton.addEventListener("click", function() {
    location.reload();
  });

  // Append the button to the button container
  buttonContainer.appendChild(playAgainButton);
    startButton.onclick=()=>{
      let bird1Interval= this.setInterval(()=>{createbird('./Images/bird1.gif')},2000);
      let bird2Interval= this.setInterval(()=>{createbird('./Images/bird3.gif')},2500);
      let bird3Interval= this.setInterval(()=>{createbird('./Images/bird2.gif')},2500);
      let bombInterval= this.setInterval(()=>{bomb()},2000)
      let seconds =60;
      let timer=document.querySelectorAll(".box")[2];
      let cancel= setInterval(()=>
                {
                  if(seconds>0)
                  {  
                      seconds --;
                      timer.innerText=`Time Limit: ${seconds}`;
                      if(seconds==2)
                      {
                    
                    this.clearInterval(bird1Interval);
                    this.clearInterval(bird2Interval);
                    this.clearInterval(bird3Interval);
                    this.clearInterval(bombInterval);}
                  }
                  else
                  {
                    this.clearInterval(cancel);
                    if(scoring>=50)
                    { endText.innerText=`YOUR SCORE IS ${scoring}. YOU WON ^^`;
                    // Append the button to the div
                    endText.appendChild(buttonContainer);
                    endText.classList.remove("hiddenBox");
                    endText.classList.add("visibleBox");
                    }
                    else
                    {endText.innerText=`YOUR SCORE IS ${scoring}. YOU LOST :(`;
                    endText.appendChild(buttonContainer);
                    endText.classList.remove("hiddenBox");endText.classList.add("visibleBox")}
                  }
                }
                  , 1000);
    }
  }) 
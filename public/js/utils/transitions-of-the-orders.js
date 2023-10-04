const transitionOfDirectionY = ( ulList ) => {

  setInterval(()=>{
    const paragraphElement = ulList.querySelectorAll("li p");
    paragraphElement.forEach( order =>{
      order.classList.add('tranformY-0');
    });
  },50);   

};

const transitionOfDirectionX = ( ulList ) => { 
  setInterval(()=>{
    const paragraphElement = ulList.querySelectorAll("li p");
    paragraphElement.forEach( order =>{
      order.classList.add('tranformX-0');
    });
  },50);   
};

export{
transitionOfDirectionY,
transitionOfDirectionX
}
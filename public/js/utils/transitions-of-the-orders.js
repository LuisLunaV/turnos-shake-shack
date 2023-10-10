const transitionOfDirectionY = ( ulList ) => {
  setInterval(()=>{
    const paragraphElement = ulList.querySelectorAll("li p");
    paragraphElement.forEach( order =>{
      order.classList.add('tranformY-0');
    });
  },50);   

};

export{
transitionOfDirectionY
}
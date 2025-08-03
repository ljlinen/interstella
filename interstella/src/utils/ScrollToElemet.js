const ScrollToElement = (selector) => {
  console.log(selector);
  
  if(selector) {
    const elem = document.querySelector(selector)
    if(elem) {
      elem.scrollIntoView({ behaviour: 'smooth'})
    }
  }
}

export default ScrollToElement;
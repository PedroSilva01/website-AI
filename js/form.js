// document.getElementById("form").addEventListener("submit", function(event){
//     event.preventDefault();
//     document.getElementById("form").style.display = "none";
// })
function findElementsExceedingViewportWidth() {
    const allElements = document.querySelectorAll('*');
    const exceedingElements = [];
  
    allElements.forEach(element => {
      const elementRect = element.getBoundingClientRect();
      if (elementRect.right > window.innerWidth) {
        exceedingElements.push(element);
      }
    });
  
    return exceedingElements;
  }
  
  // Call the function to find elements exceeding the viewport width
  const exceedingViewportElements = findElementsExceedingViewportWidth();
  
  if (exceedingViewportElements.length > 0) {
    console.log('Elements exceeding the viewport width:');
    exceedingViewportElements.forEach(element => {
      console.log(element);
    });
  } else {
    console.log('No elements exceeding the viewport width found.');
  }
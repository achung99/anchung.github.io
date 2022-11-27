/*
 * Starter file 
 */
// alert("Testing");
// console.log("Testing")
(function() {
  "use strict";
  
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");

    const encrypt_buttom = document.querySelector('#encyrpt-it');
    const reset_button = document.querySelector('#reset');
    const fontsize12 = document.querySelector('#twelve_pts');
    const fontsize24= document.querySelector('#twenty_four_pts');
    const all_caps= document.querySelector('#all-caps');

    //Handling click buttons
    encrypt_buttom.addEventListener("click, handleClick");

    reset_button.addEventListener('click', reset);

    fontsize12.addEventListener('click', ()=>{
        const text_area = document.querySelector('textarea');
        text_area.style.fontsize = "12pt";
    })
    fontsize24.addEventListener('click', ()=>{
        const text_area = document.querySelector('textarea');
        text_area.style.fontsize = "24pt";
    })
    all_caps.addEventListener('click', ()=>{
        const text_area = document.querySelector('textarea');
        text_area.value = text_area.value.toUpperCase();
    })

  }
 
  function handleClick() {
    // console.log("Button clicked");

    //queryselector is for getting access to the text
    const text_area = document.querySelector('textarea');

    var mystr = text_area.value;
    text_area.value = shiftCipher(text_area.value);

  }

  function reset() {
    const text_area = document.querySelector('textarea');
    text_area.value = "";
  }

  

  function shiftCipher(text) {

    text = text.toLowerCase();
    let result = "";  

    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else {
        result += String.fromCharCode(text.charCodeAt(i) + 1);
      }
    }
    return result;
  }
})();

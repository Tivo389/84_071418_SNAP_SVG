/* global document */
/* global window */
document.addEventListener('DOMContentLoaded', () => {
  //-----------------------------------------------------------------------------------------------
  // CODE FOR SECTION 'cups.svg'
  const objectCups = document.querySelector("#objectCups");
  objectCups.addEventListener("load", function() {
    const svg = objectCups.contentDocument.querySelector("#cups");
    const snap = Snap(svg);
    const simpleCup = snap.select('#simple-cup');
    const fancyCup = snap.select('#fancy-cup');
    const simpleCupPoints = simpleCup.node.getAttribute('d');
    const fancyCupPoints = fancyCup.node.getAttribute('d');
    const toFancy = function(){
      simpleCup.animate({ d: fancyCupPoints }, 1000, mina.backout, toSimple);
    }
    const toSimple = function(){
      simpleCup.animate({ d: simpleCupPoints }, 1000, mina.backout, toFancy);
    }
    toSimple();
   }, false);
  //-----------------------------------------------------------------------------------------------
  // CODE FOR SECTION '00_shapes.svg'
  const objectShapes = document.querySelector("#objectShapes");
  objectShapes.addEventListener("load", function() {
    const svg = objectShapes.contentDocument.querySelector("#shapes");
    const snap = Snap(svg);
    debugger;
    const simpleCup = snap.select('#simple-cup');
    const fancyCup = snap.select('#fancy-cup');
    const simpleCupPoints = simpleCup.node.getAttribute('d');
    const fancyCupPoints = fancyCup.node.getAttribute('d');
    const toFancy = function(){
      simpleCup.animate({ d: fancyCupPoints }, 1000, mina.backout, toSimple);
    }
    const toSimple = function(){
      simpleCup.animate({ d: simpleCupPoints }, 1000, mina.backout, toFancy);
    }
    toSimple();
   }, false);
  //-----------------------------------------------------------------------------------------------
});

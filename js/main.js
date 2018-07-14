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
    const toFancy = function() {
      simpleCup.animate({ d: fancyCupPoints }, 1000, mina.backout, toSimple);
    }
    const toSimple = function() {
      simpleCup.animate({ d: simpleCupPoints }, 1000, mina.backout, toFancy);
    }
    toSimple();
   }, false);
  //-----------------------------------------------------------------------------------------------
  // CODE FOR SECTION '00c_shapesPathed.svg'
  const objectShapes = document.querySelector("#objectShapesC");
  objectShapes.addEventListener("load", function() {
    const svg = objectShapes.contentDocument.querySelector("#shapes");
    const snap = Snap(svg);
    const circle = snap.select('#circle');
    const circlePoints = circle.node.getAttribute('d');
    const triangle = snap.select('#triangle');
    const trianglePoints = triangle.node.getAttribute('d');
    const square = snap.select('#square');
    const squarePoints = square.node.getAttribute('d');
    const pentagon = snap.select('#pentagon');
    const pentagonPoints = pentagon.node.getAttribute('d');
    const cross = snap.select('#cross');
    const crossPoints = cross.node.getAttribute('d');
    const circleToTriangle = function() {
      circle.animate({ d: trianglePoints }, 1000, mina.linear, triangleToSquare);
    }
    const triangleToSquare = function() {
      circle.animate({ d: squarePoints }, 1000, mina.linear, squareToPentagon);
    }
    const squareToPentagon = function() {
      circle.animate({ d: pentagonPoints }, 1000, mina.linear, pentagonToCross);
    }
    const pentagonToCross = function() {
      circle.animate({ d: crossPoints }, 1000, mina.linear, crossToCircle);
    }
    const crossToCircle = function() {
      circle.animate({ d: circlePoints }, 1000, mina.linear, circleToTriangle);
    }
    circleToTriangle();
   }, false);
  //-----------------------------------------------------------------------------------------------
});

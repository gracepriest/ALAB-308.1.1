// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
let isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;


// Finally, log the results.
console.log(isValid);
document.write("<strong>Part 1</strong>")
document.write("<br>")

document.write("The four numbers are valid according to the provided criteria :" + "<strong>"+ isValid+ "</strong>")
document.write("<br>")
// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  
  let Isdivisnle = (n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0 );
  let IsFirstGreater = (n1 > n4);
  let subtractFirstNumber = (n2 - n1);
  let mutliByThird = (subtractFirstNumber * n3);
  let remainder = (mutliByThird % n4);

  document.write("Are all number divisble by 5 true or false: " + "<strong>"+Isdivisnle+"</strong>")
  document.write("<br>")
  document.write("Is the first number greater than the last: " + "<strong>"+IsFirstGreater+"</strong>")
  document.write("<br>")
  document.write("Subtract first number from Second: " + "<strong>"+subtractFirstNumber+"</strong>")
  document.write("<br>")
  document.write("Mutlipy by the third number: " + "<strong>"+mutliByThird+"</strong>")
  document.write("<br>")
  document.write("Remainder of mutliByThird: " + "<strong>"+remainder+"</strong>")

  //PART 2
  document.write("<br>")
  document.write("<br>")
  document.write("<br>")
  document.write("<strong>Part 2</strong>")

  let fiftyFive = 1500 / 30
  let sixty = 1500 / 28
  let seventyFifty = 1500 / 23 

  document.write("<br>")
  document.write("How many gallons of fuel will you need for the entire trip at 55 MPH: " + "<strong>"+fiftyFive+" Gallons </strong>")
  document.write("<br>")
  document.write("How many gallons of fuel will you need for the entire trip at 60 MPH: " + "<strong>"+sixty+" Gallons </strong>")
  document.write("<br>")
  document.write("How many gallons of fuel will you need for the entire trip at 75 MPH: " + "<strong>"+seventyFifty+" Gallons </strong>")

   fiftyFive = fiftyFive * 3
   sixty = sixty * 3
   seventyFifty = seventyFifty * 3 
   
   document.write("<br>")
   document.write("<br>")
   document.write("Will your budget of $175 be enough to cover the fuel expense 55 MPH: " + "<strong>"+ (fiftyFive < 175) +"</strong>")
   document.write("<br>")
   document.write("Will your budget of $175 be enough to cover the fuel expense 60 MPH: " + "<strong>"+ (sixty < 175) +"</strong>")
   document.write("<br>")
   document.write("Will your budget of $175 be enough to cover the fuel expense 75 MPH: " + "<strong>"+ (seventyFifty < 175) +"</strong>")
   document.write("<br>")
   document.write("<br>")
   
    fiftyFive = 1500 / 55
    sixty = 1500 / 60
    seventyFifty = 1500 / 75 
    
    document.write("How long will the trip take, in hours at 55 MPH?: " + "<strong>"+ (fiftyFive) +"</strong>")
    document.write("<br>")
    document.write("How long will the trip take, in hours at 60 MPH?: " + "<strong>"+ (sixty) +"</strong>")
    document.write("<br>")
    document.write("How long will the trip take, in hours at 75 MPH?: " + "<strong>"+ (seventyFifty) +"</strong>")


  


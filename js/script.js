
/*** 
 * `quotes` array 
***/

// creating Quotes Array with quote,source,citation and year
let quoteArray = [
    {    "quote":'strive not to be a success, but rather to be of value',
         "source":'Albert Einstein',
         "citation":'from Einstein',
         "year":'1955'},

    {    "quote":'If you hear a voice within you say "  you can not paing," then by all means apint and that voice will be silenced',
         "source":'Vincent van Gogh',
         "citation":'from van gogh',
         "year":'1888'},
    {   
        "quote":'We are here to put a dent in the universe. Otherwise why else even be here?',
        "source":'Steve Jobs',
        "citation":'from Steve',
        "year":'1955'},

    {    "quote":'You can have it all you just can not have it all at once',
         "source":'Oprah winfrey',
          "citation":'from Oprah',
          "year":'1954'},
    {   "quote":'We did not come to fear the future.We came here to shape it',
        "source":'Barack Obama',
         "citation":'from Obama',
        "year":'1961'}
]




/***
 * `getRandomQuote` function
***/

function getRandomQuote(){

    // create variable to show the quotes in random orders
    let random = quoteArray[Math.floor(Math.random()*quoteArray.length)];

    // make random order without repeatition
    // random = quoteArray.splice(random, 1)[0];
    return random;

}

/***
 * `printQuote` function
***/
function printQuote(){

    // 1. Create a variable that calls the getRandomQuote() // function
     var quoteObject = getRandomQuote();

     // 2. Create a variable that initiates your HTML string with 
     // the first two <p></p> elements, their classNames, and the quote and source properties, but leave off
     // the second closing `</p>` tag for now
     var htmlString = "<p class='quote'>" + quoteObject.quote + "</p>";
     htmlString += "<p class ='source'>" + quoteObject.source ;
  


     // 3. Use an if statement to check if the citation property // exists, and if it does, concatenate a <span></span> element, appropriate className, and citation property // to the HTML string
      if(quoteObject.citation){
         htmlString += "<span class ='citation'>" + quoteObject.citation + "</span>";
      }

     // 4. Use an if statement to check of the year property exists, // and if it does, concatenate a <span></span> element,
     // appropriate className, and year property to the HTML //string
      if(quoteObject.year)
      {
         htmlString += "<span class ='year'>" + quoteObject.year + "</span>";
      }
     // 5. After the two if statements, concatenate the closing </p> // tag to the HTML string
      "</p>"
     // 6. set the innerHTML of the quote-box div to equal the // complete HTML string}
      document.getElementById('quote-box').innerHTML = htmlString;


}

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
document.getElementById('load-quote').addEventListener("click",printQuote);

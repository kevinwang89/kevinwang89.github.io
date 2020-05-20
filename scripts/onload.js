// run this function when the document is loaded
        window.onload = function() {
 
          // create a couple of elements in an otherwise empty HTML page
          var heading = document.createElement("h1");
          var heading_text = document.createTextNode("Mozilla is cool");
          heading.appendChild(heading_text);
          document.body.appendChild(heading);
       }
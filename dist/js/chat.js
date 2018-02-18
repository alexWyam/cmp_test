// DEVELOPED BY 
	// ÁLEX CÁCERES
	// ON 2018/02/18
// LAST UPDATE 
    // ON 2018/02/18
    
/*
-----------------------
SCRIPT GUIDE:
1. GLOBAL SCOPE
    1.1 VARS
    1.2 FUNCTIONS
2. OBJECTS
    2.1 WINDOW
3. EVENTS
    3.1 ONCLICK
-----------------
*/

/* -------- 1. GLOBAL SCOPE -------- */
    /* -------- 1.1 VARS -------- */
    /* -------- 1.2 FUNCTIONS -------- */
    

/* -------- 2. OBJECTS -------- */
    /* -------- 2.1 WINDOW -------- */
    // When window object is load
    window.onload = function() {

        // set var with "chatShows" element from "chat.html" page
        var ol = document.getElementById("chatShows");

        // check if exist element li
        if (ol.children.length > 0) {
            //
        }  else {
            // create chat elements
            var blockLi = document.createElement("li");
            var blockA = document.createElement("a");
            var blockImg = document.createElement("img");
            var blockDiv = document.createElement("div");
            var bloclkSpan = document.createElement("span");

            // random message
            var msg = document.createTextNode("Neque, quia accusantium!");

            // build HTML
            blockLi.className = "right";
            ol.appendChild(blockLi);

            blockA.className = "cstm";
            blockLi.appendChild(blockA);

            blockImg.setAttribute("src", "images/girl.jpeg");
            blockImg.className = "circle avatarChat";
            blockA.appendChild(blockImg);

            blockDiv.appendChild(msg);
            blockDiv.className = "chatBox";
            blockLi.appendChild(blockDiv);

            bloclkSpan.className = "filigree";
            blockLi.appendChild(bloclkSpan);
        }      
         
    }

/* -------- 2. EVENTS -------- */
    /* -------- 3.1 ONCLICK -------- */
    

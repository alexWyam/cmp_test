// DEVELOPED BY 
	// ÁLEX CÁCERES
	// ON 2018/02/17
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
    var val = 1;
    
    var buildList = document.createDocumentFragment();

    /* -------- 1.2 FUNCTIONS -------- */
    

/* -------- 2. OBJECTS -------- */
    /* -------- 2.1 WINDOW -------- */

/* -------- 2. EVENTS -------- */
    /* -------- 3.1 ONCLICK -------- */
    document.getElementById("btnFriend").onclick = function() {
        var eleBtn = document.getElementById("btnFriend");
        var eleIndex = document.getElementById("index");

        if (val) {
            eleBtn.classList.add("on");
            eleIndex.classList.add("btnFriendOn");
            val = 0;
        } 
        else if (val < 1) {
            eleBtn.classList.remove("on");
            eleIndex.classList.remove("btnFriendOn");
            val = 1;
        }
    }

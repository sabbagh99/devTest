"use strict";

let j = 0;
var i = 0;
var dogProgressBar = 100;
var catProgressBar = 100;
var numOfTurnsForCat = 0;
var numOfTurnsForDog = 0;




alert("Cats team will play first");

function cat() {
    if (j % 2 == 1) {
        j++;
        if (numOfTurnsForCat != 4) {

            var bar = document.getElementById("myBar");
            var img = document.getElementById("catImg");
            catProgressBar = catProgressBar - 25;
            bar.style.width = catProgressBar + "%";
            
            img.src = "https://media1.tenor.com/images/f6fe8d1d0463f4e51b6367bbecf56a3e/tenor.gif?itemid=6198981";
            numOfTurnsForCat++;
            setTimeout(() => { img.src = "https://static.wixstatic.com/media/4cbe8d_f1ed2800a49649848102c68fc5a66e53~mv2.gif"; }, 1500);
            if(catProgressBar==0){
                alert("dogs team win");
            }

        }

    }

}

        function dog() {
            if (j % 2 == 0) {
                j++;
            if (numOfTurnsForDog != 4) {
                var bar = document.getElementById("myBarDog");
                var img = document.getElementById("dogImg");

                dogProgressBar = dogProgressBar - 25;
                bar.style.width = dogProgressBar + "%";
                
                img.src = "https://3milliondogs.com/blog-assets-two/2014/09/012.gif";

                numOfTurnsForDog++;
                setTimeout(() => { img.src = "https://media.tenor.com/images/6d6ca4f9717440e13665685b7c03f9ea/tenor.gif"; }, 1500);
                if(dogProgressBar==0){
                    alert("Cats team win");
                }

            }
        }
    }


    let Alphabets = document.querySelectorAll(".Alphabet");
    let Alphabet_wrap = document.querySelectorAll(".Alphabet-wrap-info");
    let Alphabet_Example = document.querySelectorAll(".Alphabet-example");
    let Alphabet_blur = document.querySelector(".Alphabet-blur");
    Alphabet_wrap.forEach((alphabet,index) => {
        alphabet.addEventListener("click",function(){
            alphabet.setAttribute("style","display:flex;position: fixed;right:50%;bottom:50%;width:500px;background-color:rgba(255,255,255,1);font-size:128px;transform:translate(50%,50%);");
            Alphabet_Example[index].setAttribute("style","display:inline-flex;");
            Alphabet_blur.setAttribute("style","display:block;");
        });
    });
    function closeAlphabet_blur(){
        Alphabet_blur.setAttribute("style","display:none;");
        Alphabet_wrap.forEach((alphabet,index) => {
                alphabet.setAttribute("style","position:static; ");
                Alphabet_Example[index].setAttribute("style","display:none;");
            });
    }
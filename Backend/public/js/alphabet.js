
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

function ClickHiragana(){
    let Hiragana = document.querySelector('.alphabet-header-hiragana');
    let Katakana = document.querySelector('.alphabet-header-katakana');
    let Kanji = document.querySelector('.alphabet-header-kanji');
    let HiraganaWrap = document.querySelector('.alphabet-hiragana');
    let KatakanaWrap = document.querySelector('.alphabet-katakana');
    let KanjiWrap = document.querySelector('.alphabet-kanji');
    Hiragana.setAttribute("style","background-color:rgba(255, 255, 255, 0.7)");
    Katakana.setAttribute("style","background-color:rgba(255, 255, 255, 0.5)");
    Kanji.setAttribute("style","background-color:rgba(255, 255, 255, 0.5)");
    HiraganaWrap.setAttribute("style","display:block");
    KatakanaWrap.setAttribute("style","display:none");
    KanjiWrap.setAttribute("style","display:none");
}
function ClickKatakana(){
    let Hiragana = document.querySelector('.alphabet-header-hiragana');
    let Katakana = document.querySelector('.alphabet-header-katakana');
    let Kanji = document.querySelector('.alphabet-header-kanji');
    let HiraganaWrap = document.querySelector('.alphabet-hiragana');
    let KatakanaWrap = document.querySelector('.alphabet-katakana');
    let KanjiWrap = document.querySelector('.alphabet-kanji');
    Hiragana.setAttribute("style","background-color:rgba(255, 255, 255, 0.5)");
    Katakana.setAttribute("style","background-color:rgba(255, 255, 255, 0.7)");
    Kanji.setAttribute("style","background-color:rgba(255, 255, 255, 0.5)");
    HiraganaWrap.setAttribute("style","display:none");
    KatakanaWrap.setAttribute("style","display:block");
    KanjiWrap.setAttribute("style","display:none");
}
function ClickKanji(){
    let Hiragana = document.querySelector('.alphabet-header-hiragana');
    let Katakana = document.querySelector('.alphabet-header-katakana');
    let Kanji = document.querySelector('.alphabet-header-kanji');
    let HiraganaWrap = document.querySelector('.alphabet-hiragana');
    let KatakanaWrap = document.querySelector('.alphabet-katakana');
    let KanjiWrap = document.querySelector('.alphabet-kanji');
    Hiragana.setAttribute("style","background-color:rgba(255, 255, 255, 0.5)");
    Katakana.setAttribute("style","background-color:rgba(255, 255, 255, 0.5)");
    Kanji.setAttribute("style","background-color:rgba(255, 255, 255, 0.7)");
    HiraganaWrap.setAttribute("style","display:none");
    KatakanaWrap.setAttribute("style","display:none");
    KanjiWrap.setAttribute("style","display:block");
}
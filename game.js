let clickedBoxes = []
$(".btn").click('event',clickStartOrTry);

function clickStartOrTry(){
    clickedBoxes = []
    $('body').css({
        'background-color':'black',
        'color':'white',
    });
    $(this).fadeOut();
    $('.default-status').text("بدأت اللعبة");
    $(this).off('click');
    startGame()
}

function boxBlinking(box){
   $(box).fadeOut(200).fadeIn(200)
}

var i = 0;
function runLevel(){
    setTimeout(function(){
        boxBlinking(clickedBoxes[i]);
        i++;
        if (i < clickedBoxes.length){
            runLevel()
        }
    },1000)
    if (i === (clickedBoxes.length-1)){

        $('.box').click(checkPattern);
    } 
}

function levelUp(boxes){
    randomNumber = Math.floor(Math.random() *4);
    return boxes[randomNumber];}

function startGame(){
    boxIndex = 0;
    $('.box').off('click',checkPattern);
    clickedBoxes.push(levelUp($(".box")))
    setTimeout(function(){
        $('.default-status').text("ركز على النمط");
        setTimeout(function(){
            $('.default-status').text("كرر النمط");
            setTimeout(function(){
                $('.level-update').text(clickedBoxes.length);
                $('.level').fadeIn();
                $('.level-update').fadeIn();
                runLevel()
                
            },1000)
        },1000)
    },1000)   
}


let boxIndex = 0
function checkPattern(box){
    i = 0;
    if (boxIndex < clickedBoxes.length){
        if (box.currentTarget === clickedBoxes[boxIndex]){
            boxBlinking(box.currentTarget);
            boxIndex++;
        if ((boxIndex) === clickedBoxes.length){
            $('.default-status').text("لقد ربحت");
            startGame();
        }}else{
            $('body').css({
                'background-color':'red',
                'color':'black',
            });
            $('.default-status').text("لقد خسرت");
            $('.btn').text("حاول مرة أخرى");
            $('.btn').fadeIn();
            $('.box').off('click');
            $(".btn").click('event',clickStartOrTry);

        }
}}

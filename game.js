let clickedBoxs = []
$(".box").click('event',gameStart);

function test(box){
    x = box;
}

function boxBlinking(box){
    $(box).animate({
        opacity:'0.1'
    },"slow");
    $(box).animate({
        opacity:'100'
    },'slow');
}

function pickRandomBox(boxes){
    randomNumber = Math.floor(Math.random() *4);
    return boxes[randomNumber];}

function gameStart(box){
    let boxElement = box.currentTarget
    clickedBoxs.push(boxElement)
    clickedBoxs.push(pickRandomBox($(".box")))
    boxBlinking(boxElement)
    $('.default-status').text("بدأت اللعبة");
    $('.level-update').fadeIn();
    $(".box").off('click');
    setTimeout(function(){
        $('.default-status').text("ركز على النمط");
    },1000)
    setTimeout(runLevel,1000)
    setTimeout(function(){
        $('.default-status').text("كرر النمط");
    },3000)
}
var i = 0;
function runLevel(){
    setTimeout(function(){
        boxBlinking(clickedBoxs[i]);
        i++;
        if (i < clickedBoxs.length){
            runLevel()
        }else{
            i = 0;
        }
    },2000)
}

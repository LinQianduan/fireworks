$(function() {
    $('#yes').click(function(event) {
        modal('我就知道小姐姐您一定会愿意的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            $('.btn-ok').addClass('hide');
            $('.btn-no').addClass('hide');
            
            // typeWrite();
            fireworks();

        });
    });
    let noCLickNum = 0;
    $('#no').click(function(event) {
        const boBtn = document.getElementById("no")
        const rNum = getRandomInt(0, 90)
        const tNum = getRandomInt(3, 90)
        boBtn.style.right = rNum + "%"
        boBtn.style.top = tNum + "%"
        noCLickNum++
        if(noCLickNum >= 3) {
           
        }
    });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}

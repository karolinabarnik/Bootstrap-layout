const masonry = new Macy({
    container: '.photos',
    mobileFirst: true,
    columns: 1,
    breakAt: {
        400: 2,
        700: 3,
        1100: 4,
    },
    margin: {
        x: 20,
        y: 20,
    }
});

$(function (){
    $('.photo img').mouseover(function (){
        var maly = $(this).attr('src');
        var duzy = maly.replace('small', 'big');
        $('#popup').show();
    }).mouseout(function (){
        $('#popup').hide();
    }).mousemove(function (e){
        $('#popup').css('left',e.pageX + 10);
        $('#popup').css('top', e.pageY +10);
    })
})

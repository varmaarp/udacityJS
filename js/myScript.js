$(function(){
    var cat1 = "toby";
    var cat2 = "mat";
    var count1 = 0;
    var count2 = 0;
    $('#cat-name1').text(cat1);
    $('#cat-name2').text(cat2);
    $('.cats').click(function(){
        var id = $(this).attr('id');
        if (id==="cat1"){
            count1++;
            $('#num1').text(count1);
        } 
        else {
            count2++;
            $('#num2').text(count2);
        }
    });
});
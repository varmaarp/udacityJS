$(function(){

    //create cats array
    var cats = []
    
    //Cat constructor function
    var Cat = function(name){
        this.name = name;
        this.count = 0;
    }

    //initialize cats and push to array
    cats.push(new Cat("toby"));
    cats.push(new Cat("tom"));
    cats.push(new Cat("bob"));
    cats.push(new Cat("kit"));
    cats.push(new Cat("zip"));

    //add cats to html list
    for (var i=0; i < cats.length; i++){
        $('#cats').append("<li style='float: left; padding-right: 16px;' id='"+i+"'>"+cats[i].name+"</li>");
    }

    //display cat name according to selection
    $('li').click(function(){
        var id = $(this).attr('id');
        var num = parseInt(id)+1; //to get correct image number

        $('#cat-name').text(cats[id].name);
        $('.image').remove();
        $('#cat-image').append("<img class='image' id='"+id+"' src='images/cat"+num+".jpg' width='400' height='300' style='padding:20px;'>");
        $('#num').text(cats[id].count);
    });

    //increase count when image is clicked
    $('#cat-image').on('click', '.image',function(){
        var id = $(this).attr('id');
        cats[id].count += 1;
        $('#num').text(cats[id].count);
    });

});
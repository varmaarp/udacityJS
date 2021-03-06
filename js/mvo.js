$(function(){

    Cat = function(name, srcNum){
        this.name = name;
        this.src = "images/cat" + srcNum +".jpg"; 
        this.count = 0;
    };

    var model = {
        
        currentCat : null,

        adminMode : null,

        cats : [new Cat("toby",1),
                new Cat("tom",2),
                new Cat("bob",3),
                new Cat("kit",4),
                new Cat("zip",5)]
    };

    var controller = {

        init : function(){
            model.adminMode = false;
            model.currentCat = model.cats[0];
            catView.init();
            catListView.init();
            formView.init();
        },

        getCurrentCat : function(){
            return model.currentCat;
        },

        setCurrentCat : function(cat){
            model.currentCat = cat;
        },

        getAllCats : function(){
            return model.cats;
        },

        incrementCount : function(){
            model.currentCat.count++;
            catView.render();
            formView.render();
        },

        setAdminMode : function(val){
            model.adminMode = val;
            formView.render();
        },

        getAdminMode : function(){
            return model.adminMode;
        },

        updateCatValues : function(name, score){
            model.currentCat.name = name;
            model.currentCat.count = score;
            catView.render();
            formView.render();
            catListView.render();
        }
    };

    var catView = {

        init : function(){
            $('#cat-image').on('click',function(){
                controller.incrementCount();
            });

            this.render();
        },

        render : function(){
            var currentCat = controller.getCurrentCat();
            $('#cat-name').text(currentCat.name);
            $('#num').text(currentCat.count);
            $('#cat-image').attr('src',currentCat.src);
            
        }
    };

    var catListView = {

        init : function(){
            this.render();
        },

        render : function(){
            var cats = controller.getAllCats();
            $('#cats').empty();
            
            for (var i=0; i < cats.length; i++){
                var cat = cats[i]
                $('#cats').append("<li id='cat"+ i +"' style='float: left; padding-right: 16px;'>"+ cat.name +"</li>");
                $('#cat'+i).on('click',(function(incat){
                    return function(){     
                        controller.setCurrentCat(incat);
                        catView.render();
                        formView.render();
                    };
                })(cat));
            }
        }
    }

    var formView = {
        
        init : function(){

            $('#admin').on('click',function(){
                controller.setAdminMode(true);
            });

            $('#save').on('click',function(){
                controller.updateCatValues($('#catname').val(),$('#score').val());
                controller.setAdminMode(false);
            });

            $('#cancel').on('click',function(){
                controller.setAdminMode(false);
            });
                            
            this.render();
        },

        render : function(){

            var cat = controller.getCurrentCat();

            $('#catname').val(cat.name);
            $('#score').val(cat.count);

            if(controller.getAdminMode()){
                $('#cat-form').css("display", "inline-block");
            } else{
                $('#cat-form').css("display", "none");
            }
        }
    }

    controller.init();
});
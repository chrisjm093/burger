$("#create-burger-form").on("submit", (e) =>{
    e.preventDefault();
    const burgerData = {
        burger_name: $('[name="burger_name"]').val()
    };

    $.ajax({
        url: "/api/burgers",
       method: "POST",
       data: burgerData
    }).then(() =>{
        location.reload();
    })

});

$(".devour").on("click", function(){
    const burgerId = $(this).data("id");
    const updateRoute = "/api/burgers/" + burgerId;
   
    
    $.ajax({
        url:updateRoute,
        method: "PUT",
        data: {
            devoured: 1
        }
    }).then( () =>{
        location.reload();
    })
});

$(".return-it").on("click", function(){
    const burgerId = $(this).data("id");
    const updateRoute = "/api/burgers/" + burgerId;
   
    
    $.ajax({
        url:updateRoute,
        method: "PUT",
        data: {
            devoured: 0
        }
    }).then( () =>{
        location.reload();
    })
});
const router = require("express").Router();
const Burger = require("../models/burger");

router.get('/', ( req, res ) =>{
   Burger.all("*", (results) =>{
       console.log(results)
        res.render('index', {
            burgers: results
        });
   })

});

router.post( "/api/burgers", (req, res) =>{
    console.log("Post req")   
    console.log(req)
    Burger.create( req.body, ( result ) =>{
        console.log("Post Results")
        console.log(result)
        res.json( {id: result.insertId} );
    })
  

} );

router.put("/api/burgers/ :id", (req, res) =>{
    console.log(req)

})

module.exports = router;
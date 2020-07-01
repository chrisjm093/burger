const express = require("express");
const burger = require("../models/burger.js");
const router = require("express").Router();

router.get('/', ( req, res ) =>{
    res.render( 'index')

});

module.exports = router;
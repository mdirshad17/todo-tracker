import express from "express";
import jwt from "jsonwebtoken";


// middleware can be used in all the functions where we need to authenticate the user
function authMiddleware(req, res, next) {
  const token = req.headers['Authorization'] || req.headers['authorization']   ;
  if(!token) {
    return res.status(401).send({message:"No token provided"});
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if(err) {
      return res.status(401).send({message:"Invalid token"});
    }
    // we modify the req object to add userId
    req.userId = decoded.id;
    next();  // you may proceed to the next middleware or route handler
  })
 
}

export default authMiddleware;

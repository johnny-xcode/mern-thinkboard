import express from "express"
import notesRoutes from "./notes/notesRoutes.js";

const app = express();

app.use('/api/notes', require('./notes/notesRoutes'));

// app.get("/api/notes", (req, res) => {
//    res.status(200).send("You got 30 notes");
// });

// app.post("/api/notes", (req, res) => {
//    res.status(201).json({message: "Post created successfully"});
// });

// app.put("/api/notes/:id", (req, res) => {
//    res.status(200).json({message: "Post updated successfully"});
// });

// app.delete("/api/notes/:id", (req, res) => {
//    res.status(200).json({message: "Post deleted successfully"});        
// });

 app.listen(5001, () =>{
    console.log("Server started on Port: 5001");
 });
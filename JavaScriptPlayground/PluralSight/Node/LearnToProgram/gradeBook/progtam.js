var book = require("./lib/grades").book;
var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hello World Now!");
});

app.get("/grade", function(req, res){
    // "1,2,3" >> split(",") => [1, 2, 3]
    var grades = req.query.grades.split(",");
    
    for(var i = 0; i < grades.length; i++){
        book.addGrade(parseInt(grades[i]));
    }

    var count = book.getCountOfGrades();
    var average = book.getAverage();
    var letter = book.getLetterGrade();
    
    console.log("Successfuly Done")
    res.send("The count of grades is: " + count + " The Average of Grades is: " + average + " With letter: " + letter)
})

app.listen(4000);
console.log("Server Ready...");
var gradeBook = {
    _grades: [],
    addGrade: function(gradeValue){
        this._grades.push(gradeValue);
    },
    getCountOfGrades: function(){
        return this._grades.length;
    },
    getAverage: function(){
        var totalGrades = 0;
        for(var i=0; i<this._grades.length; i++){
            totalGrades = totalGrades + this._grades[i];
        }
        return totalGrades / this._grades.length;
    },
    getLetterGrade: function(){
        var average = this.getAverage();
        if (average < 60)
            return 'F';
        else if (average < 70)
            return 'D';
        else if (average < 80)
            return 'C';
        else if (average < 90)
            return 'B';
        else
            return 'A';
    },

    reset: function(){
        this._grades = [];
    }
};

exports.book = gradeBook;
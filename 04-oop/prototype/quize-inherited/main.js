"use strict";
function School(kor,eng) {
    this.kor = kor
    this.eng = eng
    School.prototype.sum = function () {
        return this.kor+this.eng
    }
    School.prototype.avg = function () {
        return Math.floor((this.kor+this.eng)/2)
    }
        
}
let school1 = new School(100, 85)
console.log("school sum", school1.sum())
console.log("school sum", school1.avg())

function HighSchool(kor, eng) {
     School.apply(this,[kor,eng])
 }

HighSchool.prototype = School.prototype
console.dir(HighSchool)

HighSchool.prototype.grade = function () {
    let result = this.avg()
    if (result >= 90)
        return 'A'
    else if (result >= 80)
        return 'B'
    else if (result >= 70)
        return 'C'
    else if (result >= 60)
        return 'D'
    else
         return 'E'
}
let high1 = new HighSchool(100, 85)
console.log("highschool sum", high1.sum());//highschool sum 185
console.log("highschool avg", high1.avg());//highschool avg 93
console.log("highschool grade", high1.grade())//highschool grade A


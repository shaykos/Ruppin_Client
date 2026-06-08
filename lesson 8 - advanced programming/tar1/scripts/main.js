let grades = [85, 90, 55, 100, 62, 40, 78];
let passed = grades.filter((grade) => { return grade >= 60 });
console.log('passed --> ', passed);
let afterBonus = passed.map((grade) => {
    if (grade === 100)
        return grade;
    else
        return grade + 5;
});
console.log('afterBonus --> ', afterBonus);
let avg = afterBonus.reduce((sum, next) => { return sum + next }) / afterBonus.length;
console.log('avg --> ', avg);




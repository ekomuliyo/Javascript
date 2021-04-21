const averageExams = (valueExam) => { 
    const numberValidation = valueExam.every(exam => typeof exam === 'number');
    if(!numberValidation) throw new Error('please input number');

    const sumValues = valueExam.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sumValues / valueExam.length;
}


const isStudentPassExam = (valuesExam, name) => { 
    const minValues = 75;
    const average = averageExams(valuesExam);

    if(average > minValues) {
        console.log(`${name} is fail the exams`)
        return true;
    } else {
        console.log(`${name} is pass the exams`);
        return false;
    }
}

module.exports = { averageExams, isStudentPassExam }
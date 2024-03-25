#! /usr/bin/env node
import inquirer from "inquirer";
const totalMarks = 300;
const marks = await inquirer.prompt([
    { message: "Enter Math Number", type: "number", name: "mathNumber" },
    { message: "Enter English Number", type: "number", name: "engNumber" },
    { message: "Enter Science Number", type: "number", name: "scienceNumber" },
]);
const obtainedNum = marks.mathNumber + marks.engNumber + marks.scienceNumber;
console.log("obtainedNum: ", obtainedNum);
const obtainedPerc = (obtainedNum / totalMarks) * 100;
console.log("obtainedPerc: ", obtainedPerc);
if (obtainedPerc > 80) {
    console.log(`Congratulation Your ${obtainedPerc}% you got  grade: "A"`);
}
else if (obtainedPerc > 70) {
    console.log(`Congratulation Your ${obtainedPerc}% you got grade: "B"`);
}
else if (obtainedPerc > 60) {
    console.log(`Congratulation Your ${obtainedPerc}% you got grade: "C"`);
}
else if (obtainedPerc < 50) {
    console.log(`Your Percentage is ${obtainedPerc}% No Problem Keep it up Your grade is: "i"`);
}
;

#! /usr/bin/env node 
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const rainbowTitle = await chalkAnimation.rainbow(`ATM of Bank AL Dollars \n`);
    await sleep();
    rainbowTitle.stop();
}
await welcome();
const answers = await inquirer
    .prompt([
    {
        name: "userId",
        type: "string",
        message: "Your userId here?"
    },
    {
        name: "userPin",
        type: "number",
        message: "Your userPin here?"
    },
    {
        name: "accType",
        type: "list",
        message: "which type you want to use?",
        choices: ["current", "saving"]
    },
    {
        name: "transactiontype",
        type: "list",
        message: "which transaction type you want to use?",
        choices: ["Fast Cash", "withdraw"]
    },
    {
        name: "amount",
        type: "list",
        message: "select the amount?",
        choices: [20, 100, 200, 1000, 10000],
        when(answers) {
            return answers.transactiontype == "Fast Cash";
        }
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount?",
        when(answers) {
            return answers.transactiontype == "withdraw";
        }
    },
]);
if (answers.userId && answers.userPin) {
    const Balance = Math.floor(Math.random() * 100000);
    console.log(Balance);
    const EnteredAmount = answers.amount;
    if (EnteredAmount >= Balance) {
        console.log(`${answers.userId} you have insufficient Balance`);
    }
    else {
        const remaining = Balance - EnteredAmount;
        console.log(`Your remaining Balance is ${remaining}`);
    }
}
// console.log(answers);

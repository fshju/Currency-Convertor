#! /usr/bin/env node
import inquirer from "inquirer";
const Currency = {
    USD: 1,
    EUR: 0.82,
    GBP: 0.74,
    CAD: 1.26,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter from Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'CAD', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: 'Enter to Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'CAD', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter amount',
        type: 'number',
    }
]);
let fromAmount = Currency[user_answer.from]; //exchange rate
let toAmount = Currency[user_answer.to]; //exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD base currency
let finalAmount = baseAmount * toAmount;
console.log(finalAmount);

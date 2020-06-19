const chalk = require('chalk');
const readline = require("readline");
const prompt = require('prompt');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class NoteTaker {

  constructor(){
    let notes = [];
  }

  initMenu() {
    let menuOptions = "Options for Note Taker:\n1. Add\n2. Remove\n3. Show Notes\nSelect an option:";
    return menuOptions;
  }

  promptUserInput() {
    prompt.start();
    prompt.get(['note'], function(err, result){
      if (error) { return onError(error); }

    });
  }

  onError(error){
    const errorMsg = chalk.red.bold(error);
    return errorMsg;
  }

  getNotes() {
    return notes;
  }

  addNotes() {
    return "Adding Notes";
  }

  removeNotes() {
    return "Removing Notes";
  }

}

const greenMsg = chalk.green.bold("Success!!!");
console.log(greenMsg);

const redMsg = chalk.red.bold("ERROR!!!");
console.log(redMsg);

module.exports = NoteTaker;

const inquirer = require('inquirer');

const regex = /^(\d+)(\.|,)?(\d+)?$/;

const validateNum = function (input) {

  if (!regex.exec(input)) {
    return 'Insira um número válido';
  }
  return true;

}

const validateInput = function (input) {
  if (!input) {
    return 'Forneça uma entrada válida!'
  }
  return true;
}
module.exports = {
  getDecimal: async ({ name, message }) => {
    const info = [
      {
        name,
        type: 'input',
        message,
        validate: validateNum
      }
    ];
    return inquirer.prompt(info);
  },
  getNumber: async ({ name, message }) => {
    const info = [
      {
        name,
        type: 'number',
        message
      }
    ];
    return inquirer.prompt(info);
  },
  getInput: async ({ name, message }) => {
    const info = [
      {
        name,
        type: 'input',
        message,
        validate: validateInput
      }
    ];
    return inquirer.prompt(info);
  }
}
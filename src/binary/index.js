import * as commands from './commands';
import help from './help';

export default function binary(order) {
  const firstWhiteSpaceIndex = order.indexOf(' ');
  let command = order.substr(0, firstWhiteSpaceIndex);
  const parameters = order.substr(firstWhiteSpaceIndex + 1);
  if (command === '') {
    command = order;
  }

  const lowerCaseCommand = command.toLowerCase();
  const bin = commands[lowerCaseCommand];
  if (bin) {
    return bin(parameters);
  }

  if (lowerCaseCommand === 'help') {
    return help();
  }

  return `Unkown command "${lowerCaseCommand}"`;
}

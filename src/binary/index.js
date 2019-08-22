import * as commands from './commands';

export default function binary(command) {
  const firstWhiteSpace = command.indexOf(' ');
  let validCommand = command.substr(0, firstWhiteSpace);
  const action = command.substr(firstWhiteSpace + 1);
  if (validCommand === '') {
    validCommand = command;
  }

  const knownCommand = commands[validCommand];
  if (knownCommand) {
    return knownCommand(action);
  }
  return `Unkown command "${validCommand}"`;
}

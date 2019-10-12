import * as commands from './commands';

export default function binary(command) {
  const safeCommand = command.toLowerCase();
  const firstWhiteSpace = safeCommand.indexOf(' ');
  let validCommand = safeCommand.substr(0, firstWhiteSpace);
  const action = safeCommand.substr(firstWhiteSpace + 1);
  if (validCommand === '') {
    validCommand = safeCommand;
  }

  const knownCommand = commands[validCommand];
  if (knownCommand) {
    return knownCommand(action);
  }
  return `Unkown command "${validCommand}"`;
}

import * as commands from './commands';

const commArr = Object.keys(commands);

export default function help() {
  return `Supported commands ${commArr.reduce(
    (acc, current) => `${acc} "${current}"`,
    ''
  )}`;
}

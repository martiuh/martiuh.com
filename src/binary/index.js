import echo from './echo';

export default function binary(command) {
    const validCommand = command.substr(0, command.indexOf(' '));
    const action = 
    if (validCommand === "echo") {
        echo()
    }

}
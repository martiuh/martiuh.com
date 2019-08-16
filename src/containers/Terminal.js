import React from 'react';
import binary from '../binary';

export default function Timer() {
  const [terminal, updateTerminal] = React.useState('');
  const [commands, updateCommands] = React.useState([]);

  const writeToTerminal = value => updateTerminal(value);

  const changeTerminal = e => writeToTerminal(e.target.value);

  const cleanTerminal = () => writeToTerminal('');

  const onSubmitAction = e => {
    e.preventDefault();
    // Run terminal commands
    const newCommands = [...commands, `$ ${terminal}`, binary(terminal)];
    updateCommands(newCommands);
    cleanTerminal('');
  };

  return (
    <code className="terminal__main">
      {commands.map(command => (
        <pre key={command}>{command}</pre>
      ))}
      <form onSubmit={onSubmitAction}>
        $ <input value={terminal} onChange={changeTerminal} />
      </form>
    </code>
  );
}

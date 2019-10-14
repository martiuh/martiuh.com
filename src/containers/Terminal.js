import React, { useEffect } from 'react';

import binary from '../binary';

import './Terminal.scss';

const uniqueID = () =>
  `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;

const formatCommand = value => ({
  id: uniqueID(),
  time: Date.now(),
  value
});

export default function Terminal() {
  const [terminal, updateTerminal] = React.useState('');
  const [commands, updateCommands] = React.useState([]);
  const inputRef = React.useRef();
  const terminalRef = React.useRef();

  const writeToTerminal = value => updateTerminal(value);

  const scrollToTerminalBottom = () => {
    const terminalDiv = terminalRef.current;
    terminalDiv.scrollTo({
      top: terminalDiv.scrollHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    scrollToTerminalBottom();
  }, [commands]);

  const changeTerminal = e => {
    scrollToTerminalBottom();
    writeToTerminal(e.target.value);
  };

  const cleanTerminal = () => writeToTerminal('');

  const onSubmitAction = e => {
    e.preventDefault();
    // Run terminal commands

    const newCommands = [
      ...commands,
      formatCommand(`$ ${terminal}`),
      formatCommand(binary(terminal))
    ];
    updateCommands(newCommands);
    cleanTerminal('');
  };

  const handleFocusInputClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="terminal" onClick={handleFocusInputClick} ref={terminalRef}>
      <p className="intro-text">Type "start" into the terminal</p>
      {commands.map(command => (
        <p key={command.id} className="old-commands">
          {command.value}
        </p>
      ))}
      <form
        onSubmit={onSubmitAction}
        className="typing-line"
        autoComplete="false"
      >
        $ <input value={terminal} onChange={changeTerminal} ref={inputRef} />
        <button className="show-mobile enter-btn" type="submit">
          enter
        </button>
      </form>
    </div>
  );
}

const dateSorter = (arr, dir = 'DESC') => {
  const dates = [...arr];
  return dates.sort((a, b) => {
    const aDate = new Date(`${a.month} ${a.year}`);
    const bDate = new Date(`${b.month} ${b.year}`);
    return dir === 'DESC'
      ? aDate.getTime() < bDate.getTime()
      : aDate.getTime() > bDate.getTime();
  });
};

module.exports = {
  dateSorter
};

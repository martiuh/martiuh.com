const dateSorter = (arr, dir = 'DESC') => {
  const dates = [...arr];
  return dates.sort((a, b) => {
    const aDate = a.dates.from;
    const bDate = b.dates.from;
    return dir === 'DESC'
      ? aDate.getTime() < bDate.getTime()
      : aDate.getTime() > bDate.getTime();
  });
};

const createDate = (year, rawMonth, day) =>
  new Date(year, rawMonth - 1, day || 1);

const getDates = project => {
  const [fromYear, fromMonth, fromDay] = project.from.split('/');
  const [toYear, toMonth, toDay] = project.to ? project.to.split('/') : '';

  const fromDate = createDate(fromYear, fromMonth, fromDay);
  const toDate = project.to ? createDate(toYear, toMonth, toDay) : 'now';

  return {
    from: fromDate,
    to: toDate
  };
};

module.exports = {
  dateSorter,
  getDates
};

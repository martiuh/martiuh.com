const dates = require('./src/lib/dates').default;

const dateSorter = (arr, dir = 'DESC') => {
  const dates = [...arr];
  return dates.sort((a, b) => {
    const aDate = a.dates.from;
    const bDate = b.dates.from;
    return dir === 'DESC' ? aDate.isBefore(bDate) : aDate.isAfter(bDate);
    // return dir === 'DESC'
    //   ? aDate.getTime() < bDate.getTime()
    //   : aDate.getTime() > bDate.getTime();
  });
};

const createDate = (year, month, day) =>
  dates(`${year}-${month}-${day || 1}`, 'YYYY', 'MM', 'DD');

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

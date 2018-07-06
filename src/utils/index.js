export const getMonthName = monthNum => {
  switch(monthNum) {
    case 1:
      return 'January';
    case 2:
      return 'Februrary';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    case 12:
      return 'December';
    default:
      return;
  }
}
const make2DigitsString  = n => {
  if (n < 10) return '0' + n;
  else return '' + n;
}

export const getDate = (month, day) => {
  return `2018-${make2DigitsString(month)}-${make2DigitsString(day)}`
}



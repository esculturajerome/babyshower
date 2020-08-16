export function getCurrentDate(separator = "/") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${date}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${year}`;
}

export function getDsay() {
  let newDate = new Date();
  let date = newDate.getDate();

  return date;
}

export function getMonth() {
  let newDate = new Date();
  let month = newDate.getMonth() + 1;

  return month < 10 ? "0" + month : month;
}

export function getYear() {
  let newDate = new Date();
  let year = newDate.getFullYear();

  return year;
}

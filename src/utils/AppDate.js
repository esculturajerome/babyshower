const [day, setday] = useState(null);
const [month, setmonth] = useState(null);
const [year, setyear] = useState(null);

useEffect(() => {
  getDate();
}, []);

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDate = () => {
  const newDate = new Date();
  let day = newDate.getDate();
  let year = newDate.getFullYear();

  setmonth(monthNames[newDate.getMonth()]);
  setday(day);
  setyear(year);
};

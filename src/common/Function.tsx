export const ZeroPadding = (num: number) => `0${num}`.substr(-2);
export const FormatDate_YM = (date: Date) => `${date.getFullYear()}/${ZeroPadding(date.getMonth() + 1)}`;
export const FormatDate_YMD = (date: Date) => `${date.getFullYear()}/${ZeroPadding(date.getMonth() + 1)}/${ZeroPadding(date.getDate())}`;
export const CalcBeforeMonth_YM = (propDate: string, months: number) => {
  const date = new Date(parseInt(propDate.substr(0,4)), parseInt(propDate.substr(5,2))-1-months);
  return `${date.getFullYear()}/${ZeroPadding(date.getMonth() + 1)}`;
};
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const getAge = () => {
  const today = new Date();
  const birthday = new Date(1998, 10, 19);

  const thisYearsBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

  const age = today.getFullYear() - birthday.getFullYear();

  if(today < thisYearsBirthday){
      return age - 1;
  }

  return age;
}
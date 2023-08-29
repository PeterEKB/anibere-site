export interface Weekdays {
  sunday?: WeekDay;
  monday?: WeekDay;
  tuesday?: WeekDay;
  wednesday?: WeekDay;
  thursday?: WeekDay;
  friday?: WeekDay;
  saturday?: WeekDay;
}
export interface WeekDay {
  day: string;
  route?: string;
  img?: string;
  name?: Name;
}
export interface Name {
  male: string;
  female: string;
}
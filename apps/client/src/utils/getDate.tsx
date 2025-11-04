import { differenceInDays, format } from "date-fns";

export const formatUnixDate = (createDate: string) => {
  const timestamp = parseInt(createDate, 10);
  // console.log("Timestamp:", timestamp);

  const date = new Date(timestamp);
  // console.log("Date:", date);

  // Отримання компонентів дати
  const formattedDate = format(date, "dd-MM-yyyy");
  const formattedTime = format(date, "HH:mm");

  // Розрахунок різниці в днях
  const currentDate = new Date();
  const daysInTransit = differenceInDays(currentDate, date);

  // Генерація форми слова "день" з урахуванням числа
  const daysWordForm = (num: number) => {
    const lastTwoDigits = num % 100;

    if ((lastTwoDigits >= 11 && lastTwoDigits <= 19) || lastTwoDigits === 0) {
      return "днів";
    }

    const lastDigit = num % 10;

    if (lastDigit === 1) {
      return "день";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return "дні";
    } else {
      return "днів";
    }
  };

  return {
    formattedDate,
    formattedTime,
    inTransit: `${daysInTransit} ${daysWordForm(daysInTransit)}`,
  };
};

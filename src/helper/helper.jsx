// Input - Валидация

export function safeTextInput(event) {
  return event.target.value.replace(/[^a-zA-Zа-яА-Я]/g, "");
}

export function safeTelInput(event) {
  return event.target.value.replace(/[^0-9+]/g, "");
}

export function safePriseInput(event) {
  return event.target.value.replace(/[^0-9]/g, "");
}

// Format - Замена данных

export function formatLowString(string) {
  if (string) return string.toLowerCase();
  return "";
}

export function formatUppString(string) {
  if (string) return string[0].toUpperCase() + string.toLowerCase().slice(1);
  return "";
}

export function formatEmail(email) {
  return email.slice(0, email.indexOf("@"));
}

export function formatSafeString(event) {
  if (event.target.value)
    return event.target.value
      .replace("&", "")
      .replace("<", "")
      .replace(">", "")
      .replace('"', "");
  return "";
}

export function formatNumber(number) {
  if (number.length === 1) return `0${number.toString()}`;
  return number.toString();
}

export function formatMonth(month) {
  if (month === 0 || month === "01") return "января";
  if (month === 1 || month === "02") return "февраля";
  if (month === 2 || month === "03") return "марта";
  if (month === 3 || month === "04") return "апреля";
  if (month === 4 || month === "05") return "мая";
  if (month === 5 || month === "06") return "июня";
  if (month === 6 || month === "07") return "июля";
  if (month === 7 || month === "08") return "августа";
  if (month === 8 || month === "09") return "сентября";
  if (month === 9 || month === "10") return "октября";
  if (month === 10 || month === "11") return "ноября";
  if (month === 11 || month === "12") return "декабря";
  return "";
}

export function formatComment(numb) {
  if (numb === undefined) return "";
  if (numb > 10 && numb < 20) return "Комментариев";
  const string = numb.toString().split("").pop();
  if (string === "1") return "Комментарий";
  if (string === "2" || string === "3" || string === "4") return "Комментария";
  if (
    string === "5" ||
    string === "6" ||
    string === "7" ||
    string === "8" ||
    string === "9" ||
    string === "0"
  )
    return "Комментариев";
  return "";
}

export function formatDate(time) {
  const date = new Date(time);
  const day = formatNumber(date.getDate());
  const month = formatMonth(date.getMonth());
  const hours = formatNumber(date.getHours());
  const minutes = formatNumber(date.getMinutes());

  return `${day} ${month} в ${hours}:${minutes}`;
}

export function formatSellsDate(date) {
  const month = formatMonth(
    date.slice(date.indexOf("-") + 1, date.lastIndexOf("-")),
  );
  const year = date.slice(0, date.indexOf("-"));

  return `${month} ${year}`;
}

export function formatCommentDate(date) {
  const day = date.slice(8, 10);
  const month = formatMonth(
    date.slice(date.indexOf("-") + 1, date.lastIndexOf("-")),
  );

  return `${day} ${month}`;
}

export function formatHttp(word) {
  const converter = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ь: "",
    ы: "y",
    ъ: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  let answer = "";

  for (let i = 0; i < word.length; i += 1) {
    if (converter[formatLowString(word[i])] === undefined) {
      answer += formatLowString(word[i]);
    } else {
      answer += converter[formatLowString(word[i])];
    }
  }

  answer = answer.replace(/[^-0-9a-z()]/g, "-");
  return answer;
}

// Search

export function searchItem(title, search) {
  return formatLowString(title).includes(formatLowString(search));
}

// PressKey

export function pressEnterKey(event, callback, disabled) {
  if (disabled) return;
  if (event.keyCode === 13) callback({ avatar: false });
}

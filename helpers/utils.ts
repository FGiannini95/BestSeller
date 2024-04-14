export const textSensitive = (text: string, text2: string) => {
  return text
    .toUpperCase()
    .normalize("NFD") //unicode
    .replace(/[\u0300-\u036f]/g, "") //regular expresion
    .includes(
      text2
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    );
};
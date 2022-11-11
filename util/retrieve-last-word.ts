const retrieveLastWord = (text: string) => {
  const textToArr = text.split(" ");
  return {
    lastWord: textToArr[textToArr.length - 1],
    withoutLastWord: textToArr.slice(0, textToArr.length - 1).join(" "),
  };
};

export default retrieveLastWord;

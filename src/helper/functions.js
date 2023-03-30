export const shorten = (title) => {
  const splitedTitle = title.split(" ");
  if (splitedTitle[1] === "-") {
    return `${splitedTitle[0]} ${splitedTitle[2]}`;
  } else {
    return `${splitedTitle[0]} ${splitedTitle[1]}`;
  }
};

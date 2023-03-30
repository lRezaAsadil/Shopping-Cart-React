export const shorten = (title) => {
  const splitedTitle = title.split(" ");
  if (splitedTitle[1] === "-") {
    return `${splitedTitle[0]} ${splitedTitle[2]}`;
  } else {
    return `${splitedTitle[0]} ${splitedTitle[1]}`;
  }
};
export const isInCart = (state, id) => {
  const result = !!state.selecedItems.find((item) => item.id === id);
  return result;
};
export const itemCount = (state, id) => {
  const index = state.selecedItems.findIndex((item) => item.id === id);
  if(index ===-1){
    return false
  }else{
    return state.selecedItems[index].quantity
  }
};

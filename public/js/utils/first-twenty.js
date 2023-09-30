let objectEmpty = {
  Nombre:'',
  id:'',
  status:1
}
export const firstTwenty = (data) => {
  const firstTwenty = data.slice(0, 24);
  return firstTwenty;
};

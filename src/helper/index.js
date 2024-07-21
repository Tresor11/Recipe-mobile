export const formatName = (name) => {
  l = name.length;
  if(l > 20) {
    return name.substr(0, 20) + "...";
  } else {
    return name;
  }
}
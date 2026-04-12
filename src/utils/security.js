export const obfus = (encoded) => {
  try {
    return atob(encoded);
  } catch (e) {
    return "";
  }
};
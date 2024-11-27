export const getUserImgSrc = (imagePath) => {
  if (imagePath) {
    return { uri: imagePath };
  } else {
    return require('../assets/img/images.jpg');
  }
};

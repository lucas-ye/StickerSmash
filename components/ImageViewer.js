import { StyleSheet, Image } from 'react-native'

const ImageViewer = ({ placeholderImageSource, selectedImage }) => {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource
  return <Image source={imageSource} style={style.image} />
}

const style = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})
export default ImageViewer

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  home: {
    width: 70,
    height: 20,
    color: 'black',
    resizeMode: 'contain',
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  }
});

export default styles;
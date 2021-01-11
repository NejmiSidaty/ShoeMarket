import { StyleSheet, Dimensions } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    MainContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '10%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    textAlign: 'center',
    color: '#141B41'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#141B41'
  },

  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
  }
});

export default style;
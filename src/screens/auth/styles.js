import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  ftop: {
    flexDirection: 'row',
  },
  star1: {
    position: 'absolute',
    marginLeft: 141, // X from figma
    marginTop: 52, // Y from figma
  },
  star2: {
    position: 'absolute',
    marginLeft: 284,
    marginTop: 76,
  },
  center: {
    alignItems: 'center',
  },
  btn: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    height: 50,
    width: 285,
    borderRadius: 20,
  },
  btnTXT: {
    fontFamily: 'FS Albert Pro Narrow',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#538DBE',
  },
  bottom: {
    flexDirection: 'row',
  },
  bottomimg: {
    position: 'absolute',
    marginVertical: -225,
    marginHorizontal: 15,
  },
  star3: {
    position: 'absolute',
    marginLeft: 19,
    marginTop: 114,
  },
  star4: {
    position: 'absolute',
    marginLeft: 141,
    marginTop: 80,
  },
});

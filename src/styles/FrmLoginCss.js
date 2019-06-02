import {StyleSheet} from 'react-native';

export default loginCss = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10
  },

  BgImage:{
    flex: 1,
    width: null
  },

  TopBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  TopText: {
    fontSize: 25,
    color: '#fff'
  },

  MidBox: {
    flex: 2
  },

  MidInput: {
    fontSize: 20,
    height: 45
  },

  MidText: {
    fontSize: 20,
    height: 45,
    color: '#fff'
  },

  DownBox: {
    flex: 2
  },

  DownButton: {
    backgroundColor: '#115E54'
  }
});
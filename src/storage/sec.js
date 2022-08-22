import {Cache} from 'react-native-cache';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const sec = new Cache({
  namespace: 'user',
  policy: {
    maxEntries: 1500, // if unspecified, it can have unlimited entries
    stdTTL: 0, // the standard ttl as number in seconds, default: 0 (unlimited)
  },
  backend: AsyncStorage,
});

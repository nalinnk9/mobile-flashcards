import {AsyncStorage} from 'react-native';
export const STORAGE = 'UdaciFlasCards';

export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
} 
export function submitEntry ({entry, key}) {
    AsyncStorage.mergeItem(STORAGE, JSON.stringify(
        {
            [key]: entry
        }
    ));
    
}

export function retrieveAll() {
    AsyncStorage.getAllKeys()
    .then((results) => {
        return results;
    })
}

export function removeEntry (key) {
     return AsyncStorage.getItem(STORAGE)
     .then((results) => {
         const data = JSON.parse(results)
         data[key] = undefined
         delete data[key]
         AsyncStorage.setItem(STORAGE, JSON.stringify(data));
     })
}

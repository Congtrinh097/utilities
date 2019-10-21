import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import VoiceRSS from './voicerss-tts';
import { GET_AUDIO } from './constants';
import { makeText } from './selectors';

// // Individual exports for testing
// export default function* getAudio(text) {
//   // See example in containers/HomePage/saga.js
//   console.log(text);
//   const requestURL = `http://localhost:3000/`;

//   try {
//     // Call our request helper (see 'utils/request')
//     const resp = yield VoiceRSS.speech({
//       key: '<API key>',
//       src: 'Hello, world!',
//       hl: 'en-us',
//       r: 0,
//       c: 'mp3',
//       f: '44khz_16bit_stereo',
//       ssml: false
//     });
//     console.log(resp);
//     //const resp = yield call(request, requestURL);
//     console.log(resp);
//   } catch (err) {
//     console.log('Lỗi rồi ');
//   }
// }

/**
 * Github repos request/response handler
 */
export function* getAudio() {
  // Select username from store
  const text = yield select(makeText());
  console.log(text)
  try {
    // Call our request helper (see 'utils/request')
    const resp = yield VoiceRSS.speech({
      key: 'a6986913d27849feaa7631deb89430e2',
      src: text,
      hl: 'vi',
      r: 0,
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false,
    });
  } catch (err) {
    console.log('Lỗi rồi ');
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* data() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_AUDIO, getAudio);
}

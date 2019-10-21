/*
 *
 * AudioConverter actions
 *
 */

import { DEFAULT_ACTION, CHANGE_TEXT, GET_AUDIO } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeText(text) {
  return {
    type: CHANGE_TEXT,
    text,
  };
}

export function getAudio() {
  return {
    type: GET_AUDIO,
  };
}

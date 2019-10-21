/*
 *
 * AudioConverter reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, CHANGE_TEXT, GET_AUDIO } from './constants';

export const initialState = {
  text: '',
  audia: '',
};

/* eslint-disable default-case, no-param-reassign */
const audioConverterReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case CHANGE_TEXT:
        draft.text = action.text;
        break;
      case GET_AUDIO:
        draft.audio = action.audio;
        break;
    }
  });

export default audioConverterReducer;

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the audioConverter state domain
 */

const selectAudioConverterDomain = state =>
  state.audioConverter || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AudioConverter
 */

const makeSelectAudioConverter = () =>
  createSelector(
    selectAudioConverterDomain,
    substate => substate,
  );

const makeText = () =>
  createSelector(
    selectAudioConverterDomain,
    substate => substate.text,
  );

export default makeSelectAudioConverter;
export { selectAudioConverterDomain, makeText };

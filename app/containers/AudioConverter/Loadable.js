/**
 *
 * Asynchronously loads the component for AudioConverter
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

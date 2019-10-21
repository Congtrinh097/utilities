/*
 * AudioConverter Messages
 *
 * This contains all the text for the AudioConverter container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AudioConverter';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Chuyển đổi văn bản thành audio!',
  },
  text: {
    id: `${scope}.text`,
    defaultMessage: 'Văn bản được chuyển đổi!',
  },
});

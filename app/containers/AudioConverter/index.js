/**
 *
 * AudioConverter
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAudioConverter from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function AudioConverter() {
  useInjectReducer({ key: 'audioConverter', reducer });
  useInjectSaga({ key: 'audioConverter', saga });

  return (
    <div>
      <Helmet>
        <title>AudioConverter</title>
        <meta name="description" content="Description of AudioConverter" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AudioConverter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  audioConverter: makeSelectAudioConverter(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AudioConverter);

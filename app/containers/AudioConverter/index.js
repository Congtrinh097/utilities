/**
 *
 * AudioConverter
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';


import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAudioConverter, { makeText } from './selectors';
import messages from './messages';
import Form from './Form';
import Textarea from './Textarea';
import Button from '../../components/Button';
import { changeText, getAudio } from './actions';
import reducer from './reducer';
import saga from './saga';

export function AudioConverter({ text, onSubmitForm, onChangeText }) {
  useInjectReducer({ key: 'audioConverter', reducer });
  useInjectSaga({ key: 'audioConverter', saga });
  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (text && text.trim().length > 0) onSubmitForm();
  }, []);

  return (
    <div>
      <Helmet>
        <title>AudioConverter</title>
        <meta name="description" content="Description of AudioConverter" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="text">
          <FormattedMessage {...messages.text} />
        </label>
        <Textarea
          id="text"
          type="text"
          placeholder="Nhập đoạn văn bản bạn muốn chuyển đổi"
          value={text}
          onChange={onChangeText}
        />
        <Button type="submit" onClick={onSubmitForm}> Chuyển </Button>
      </Form>
    </div>
  );
}

AudioConverter.propTypes = {
  onSubmitForm: PropTypes.func,
  text: PropTypes.string,
  onChangeText: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  text: makeText(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: () => {
      dispatch(getAudio());
    },
    onChangeText: evt => {
      dispatch(changeText(evt.target.value));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
console.log(withConnect);
const a = compose(
  withConnect,
  memo,
)(AudioConverter);
console.log(a);
export default a;

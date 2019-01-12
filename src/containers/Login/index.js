import { compose } from 'recompose';
import { connect } from 'react-redux';

import Login from '../../components/Login';
import { loginActionCreator } from '../../reducers/Login/actions';

const mapStateToProps = (state) => ({
  authToken: state.loginStore.authToken
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(loginActionCreator())
});

export default compose(connect(
  mapStateToProps,
  mapDispatchToProps
))(Login);
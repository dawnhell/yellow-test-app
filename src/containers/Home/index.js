import { compose } from 'recompose';
import { connect } from 'react-redux';

import Home from '../../components/Home';
import { setMobileMenuActionCreator } from '../../reducers/Home/actions';

const mapStateToProps = (state) => ({
  isMobileMenuOpen: state.homeStore.isMobileMenuOpen
});

const mapDispatchToProps = (dispatch) => ({
  setIsMobileMenuOpen: (isOpen) => dispatch(setMobileMenuActionCreator(isOpen))
});

export default compose(connect(
  mapStateToProps,
  mapDispatchToProps
))(Home);

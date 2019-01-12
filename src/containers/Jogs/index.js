import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import Jogs from '../../components/Jogs';
import { getJogsActionCreator } from '../../reducers/Jogs/actions';

const mapStateToProps = (state) => ({
  jogs: state.jogsStore.jogs
});

const mapDispatchToProps = (dispatch) => ({
  getJogs: () => dispatch(getJogsActionCreator())
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.getJogs();
    }
  })
)(Jogs);

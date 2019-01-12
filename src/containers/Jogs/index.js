import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import Jogs from '../../components/Jogs';
import { getJogsActionCreator, setIsFormOpenActionCreator, addJogActionCreator } from '../../reducers/Jogs/actions';

const mapStateToProps = (state) => ({
  jogs: state.jogsStore.jogs,
  isFormOpen: state.jogsStore.isFormOpen
});

const mapDispatchToProps = (dispatch) => ({
  getJogs: () => dispatch(getJogsActionCreator()),
  addJog: (jog) => dispatch(addJogActionCreator(jog)),
  setIsFormOpen: (isOpen) => dispatch(setIsFormOpenActionCreator(isOpen))
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

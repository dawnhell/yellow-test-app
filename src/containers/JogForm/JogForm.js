import { compose, withState } from 'recompose';

import JogForm from '../../components/JogForm';

export default compose(
  withState('distance', 'setDistance', ''),
  withState('time', 'setTime', ''),
  withState('date', 'setDate', '')
)(JogForm);

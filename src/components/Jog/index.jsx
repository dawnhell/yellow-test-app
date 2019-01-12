import React from 'react';
import moment from 'moment';

import jog_icon from '../../images/jog_icon.png';
import './styles.css';

const Jog = ({
  date,
  speed,
  distance,
  time
}) => (
  <div className="jog">
    <img src={jog_icon} alt="jog"/>

    <div className="jog-info">
      <p>{moment(date).format('d.mm.YYYY')}</p>
      <p><strong>Speed: </strong>{speed || '-'}</p>
      <p><strong>Distance: </strong>{distance || '-'} km</p>
      <p><strong>Time: </strong>{time || '-'} min</p>
    </div>
  </div>
);

export default Jog;

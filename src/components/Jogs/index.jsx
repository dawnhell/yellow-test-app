import React from 'react';

import Jog from '../Jog';

import './styles.css';

const Jogs = ({ jogs }) => (
  <div className="jogs-wrapper">
    {jogs.length > 0 ? (
      <div>
        {jogs.map(jog => (
          <Jog
            key={jog.id}
            date={jog.date}
            speed={jog.speed}
            distance={jog.distance}
            time={jog.time}
          />
        ))}
      </div>
    ) : (
      <h5>Nothing to show!</h5>
    )}
  </div>
);

export default Jogs;

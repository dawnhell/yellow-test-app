import React from 'react';

import JogForm from '../../containers/JogForm/JogForm';
import Jog from '../Jog';

import addIcon from '../../images/add_icon.png';
import './styles.css';

const Jogs = ({
  jogs,
  isFormOpen,
  setIsFormOpen,
  addJog
}) => (
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

    {isFormOpen && (
      <JogForm onSubmit={addJog} setIsFormOpen={setIsFormOpen} />
    )}

    <button className="add-btn" onClick={() => setIsFormOpen(!isFormOpen)}>
      <img src={addIcon} alt="add_icon"/>
    </button>
  </div>
);

export default Jogs;

import React from 'react';
import moment from 'moment';

import './styles.css';

const JogForm = ({
  currentJog,
  distance,
  setDistance,
  time,
  setTime,
  date,
  setDate,
  setIsFormOpen,
  onSubmit
}) => (
  <div className="jog-form-wrapper">
    <div className="jog-form">
      <span className="cross-btn" onClick={() => setIsFormOpen(false)}>X</span>

      <form>
        <div>
          <label htmlFor="distance">Distance: </label>
          <input type="text" id="distance" value={distance} onChange={e => setDistance(e.target.value)} />
        </div>
        <div>
          <label htmlFor="time">Time: </label>
          <input type="text" id="time" value={time} onChange={e => setTime(e.target.value)} />
        </div>
        <div>
          <label htmlFor="date">Date: </label>
          <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} />
        </div>
        <div>
          <button
            className="submit-btn"
            type="button"
            onClick={(e) => {
              e.preventDefault();
/*2019-01-12 13:32:17*/
              onSubmit({
                distance,
                time,
                date: moment(date).format()
              });
              setIsFormOpen(false);
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default JogForm;

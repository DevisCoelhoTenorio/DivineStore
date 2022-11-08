import * as React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function OptionsManagement({ options, onclick }) {
  return (
    <div>
      {options.map((item) => (
        <div key={nanoid()}>
          <button type="button" onClick={() => onclick(item.name)}>{item.name}</button>
        </div>
      ))}
    </div>
  );
}

OptionsManagement.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  onclick: PropTypes.func.isRequired,
};

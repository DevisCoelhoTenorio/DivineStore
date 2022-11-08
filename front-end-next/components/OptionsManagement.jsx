import * as React from 'react';
import PropTypes from 'prop-types';

export default function OptionsManagement({ options, onclick }) {
  return (
    <div>
      {options.map((item) => (
        <div key={item.id}>
          <button type="button" onClick={() => onclick(item.name)}>{item.name}</button>
        </div>
      ))}
    </div>
  );
}

OptionsManagement.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  onclick: PropTypes.func.isRequired,
};

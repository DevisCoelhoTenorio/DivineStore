import React from 'react';
import PropTypes from 'prop-types';

export default function NavigationIcon({ name, Icon }) {
  return (
    <section className="navigation-item">
      <Icon className="nav-icon" />
      <p>{name}</p>
      <hr />
    </section>
  );
}

NavigationIcon.propTypes = {
  name: PropTypes.string.isRequired,
  Icon: PropTypes.node.isRequired,
};

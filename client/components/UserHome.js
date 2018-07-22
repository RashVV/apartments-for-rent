import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PoppyList from './PuppyList';

/**
 * COMPONENT
 */
const UserHome = props => {
  const { email } = props;

  // component to list all products
  // randomly pic 4 from all products and display them on home

  return (
    <div className="landing-page">
      <div
        className="page-header header-filter"
        data-parallax="true"
        style={{
          backgroundImage:
            "url('../resources/assets/img/jeremy-wong-342291.jpg')"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="title">Большой выбор жилья от хозяев.</h1>
              <h4>
                Purchasing a dog is difficult. We've made it easy. Our team is
                here to help you make an informed decision before purchasing
                your pet so you know exactly what to expect before obtaining
                your new best friend.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="main main-raised">
        <div className="container">

              <PoppyList/>

        </div>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {};
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};

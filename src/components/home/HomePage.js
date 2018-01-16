import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
import Profile from '../profile/Profile';
import loadProfile from '../../actions/profileAction';
import createError from '../../actions/error';

export  class HomePage extends Component {

  componentDidMount() {
    this.props.actions.loadProfile();
}
componentDidCatch(err, info) {
  this.props.actions.createError(err, info);
}
  render() {
    return (
    <div>
       < h1> welcome </h1>
       
       <Profile {...this.props.profile} />
      
       </div>
    );
  }
 
}

HomePage.propTypes = {
  profile: PropTypes.object,
  actions: PropTypes.shape({
      loadProfile: PropTypes.func,
      createError: PropTypes.func
      
  })
};
export const mapStateToProps = state => {
  const profile = state.profile;
  return {
      profile
  };
};
export const mapDispatchToProps = dispatch => {
  return {
      actions: bindActionCreators(
          {
              loadProfile,
              createError
              
          },
          dispatch
      )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

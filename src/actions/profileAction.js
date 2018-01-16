
import * as API from '../api/Http'; 
import * as types from '../constants/types';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import createError from './error';


export default function loadProfile() {
  return (dispatch,getState) => {
      return API.fetchProfile()
          .then(res => res.json())
          .then (profile => {
            dispatch ({
              type: types.profile.GET,
              profile: profile
            });
          })
          .catch(err => dispatch(createError(err)));
  };
}


  
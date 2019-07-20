/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const CREATE_SMURF = "CREATE_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({
    type: FETCH_SMURFS
  });
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      dispatch({
        type: FETCH_SMURFS_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_SMURFS_FAILURE,
        payload: error
      });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({
    type: CREATE_SMURF
  });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => {
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ADD_SMURF_FAILURE,
        payload: error
      });
    });
};

export const deleteSmurf = id => dispatch => {
  axios
    .delete(`${"http://localhost:3333/smurfs"}/${id}`)
    .then(response => {
      dispatch({
        type: DELETE_SMURF_SUCCESS,
        payload: id
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: DELETE_SMURF_FAILURE
      });
    });
};

import { actions as createTripActions } from '../actions/createtrip'

export default function userReducer(state = {}, action) {
  console.log('penene:', action)
  switch (action.type) {
    case createTripActions.SET_START_STOP:
      return { ...state, startStop: action.payload }
    case createTripActions.SET_END_STOP:
      return { ...state, endStop: action.payload }
    case createTripActions.SET_STOPS:
      return { ...state, stops: action.payload }
    case createTripActions.CLEAR_CREATE_TRIP_INFO:
      return {
        startStop: '',
        endStop: '',
        stops: [],
      }
    default:
      return state
  }
}
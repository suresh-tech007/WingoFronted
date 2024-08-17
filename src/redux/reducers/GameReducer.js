import {
  ADD_WINGO_BATLE_REQUEST,
  ADD_WINGO_BATLE_SUCCESS,
  ADD_WINGO_BATLET_FAIL,
  CLEAR_ERRORS,
  GAME_HISTORY_FAIL,
  GAME_HISTORY_REQUEST,
  GAME_HISTORY_SUCCESS,
  GAME_RESULT_HISTORY_FAIL,
  GAME_RESULT_HISTORY_REQUEST,
  GAME_RESULT_HISTORY_SUCCESS,
} from "../constants/GameConstant";

export const GameReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_WINGO_BATLE_REQUEST:
    case GAME_HISTORY_REQUEST:
    case GAME_RESULT_HISTORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_WINGO_BATLE_SUCCESS:
      return {
        ...state,
        loading: false,
        UserBetle: action.payload.UserBetle,
      };
    case GAME_RESULT_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        gameresulthistory: action.payload.results,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
        resultsPerPage: action.payload.resultsPerPage,
        totalResults: action.payload.totalResults,
      };
    case GAME_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        gamehistory: action.payload.gamehistory,
      };
    case ADD_WINGO_BATLET_FAIL:
    case GAME_HISTORY_FAIL:
    case GAME_RESULT_HISTORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        error: null,
        message: null,
      };
    default:
      return state;
  }
};

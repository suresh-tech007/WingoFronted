import axios from "axios";
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
import { backedurl } from "../backedUrl";

export const adduserbatle = (formdata) => async (dispatch) => {
  try {
    dispatch({ type: ADD_WINGO_BATLE_REQUEST });

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${backedurl}/api/v1/userwingobatle`,
      formdata,
      config
    );

    dispatch({ type: ADD_WINGO_BATLE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_WINGO_BATLET_FAIL,
      payload: error.response
        ? error.response.data.error
        : "Unauthorized: please try again after some time",
    });
  }
};

export const gameHistory = () => async (dispatch) => {
  try {
    dispatch({ type: GAME_HISTORY_REQUEST });

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.get(
      `${backedurl}/api/v1/userGameHistory`,

      config
    );

    dispatch({ type: GAME_HISTORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GAME_HISTORY_FAIL,
      payload: error.response
        ? error.response.data.error
        : "Unauthorized: please try again after some time",
    });
  }
};

export const resultHistory =
  (page, pageSize = 10) =>
  async (dispatch) => {
    try {
      dispatch({ type: GAME_RESULT_HISTORY_REQUEST });

      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

      const { data } = await axios.get(
        `${backedurl}/api/v1/resulthistory?page=${page}&pageSize=${pageSize}`,

        config
      );

      dispatch({ type: GAME_RESULT_HISTORY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GAME_RESULT_HISTORY_FAIL,
        payload: error.response
          ? error.response.data.error
          : "Unauthorized: please try again after some time",
      });
    }
  };

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

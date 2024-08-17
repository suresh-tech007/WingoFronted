
import axios from "axios";
import { ADD_BANKDETAILS_REQUEST, ADD_BANKDETAILS_SUCCESS, ADD_BANKDETAILST_FAIL, ADD_MONEYWALLET_FAIL, ADD_MONEYWALLET_REQUEST, ADD_MONEYWALLET_SUCCESS, ADD_WITHDRAW_REQ_FAIL, ADD_WITHDRAW_REQ_REQUEST, ADD_WITHDRAW_REQ_SUCCESS, CLEAR_ERRORS, DEPOSIT_ADD_REQ_FAIL, DEPOSIT_ADD_REQ_REQUEST, DEPOSIT_ADD_REQ_SUCCESS, DEPOSIT_HISTORY_FAIL, DEPOSIT_HISTORY_REQUEST, DEPOSIT_HISTORY_SUCCESS, GET_BANKDETAILS_REQUEST, GET_BANKDETAILS_SUCCESS, GET_BANKDETAILST_FAIL, TRANSACTION_HISTORY_FAIL, TRANSACTION_HISTORY_REQUEST, TRANSACTION_HISTORY_SUCCESS, WALLET_BALANCE_FAIL, WALLET_BALANCE_REQUEST, WALLET_BALANCE_SUCCESS, WITHDRAW_HISTORY_FAIL, WITHDRAW_HISTORY_REQUEST, WITHDRAW_HISTORY_SUCCESS } from "../constants/paymentcontant.js";

const backedurl = "http://localhost:4000";


export const walletbalance = () => async (dispatch) => {
  
 
  try {
    dispatch({ type:WALLET_BALANCE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get(
      `${backedurl}/api/v1/walletbalance`,
      config
    );
    
     

    dispatch({ type: WALLET_BALANCE_SUCCESS, payload: data });
  } catch (error) {
     
      dispatch({
        type: WALLET_BALANCE_FAIL,
        payload: error.response
          ? error.response.data.error
          : "Unauthorized: please try again after some time",
      });
    
  }
};


export const depositrequest = (formdata) => async (dispatch) => {
  
     
        try {
          dispatch({ type:DEPOSIT_ADD_REQ_REQUEST });
      
          const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          };
      
          const { data } = await axios.post(
            `${backedurl}/api/v1/deposit`,
            formdata,
            config
          );
          
      
          dispatch({ type: DEPOSIT_ADD_REQ_SUCCESS, payload: data });
        } catch (error) {
           
            dispatch({
              type: DEPOSIT_ADD_REQ_FAIL,
              payload: error.response
                ? error.response.data.error
                : "Unauthorized: please try again after some time",
            });
          
        }
      };


export const deposithistory = () => async (dispatch) => {
  
         
        try {
          dispatch({ type:DEPOSIT_HISTORY_REQUEST });
      
          const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          };
      
          const { data } = await axios.get(
            `${backedurl}/api/v1/depositHistory`,
             
            config
          );
          
     

          dispatch({ type: DEPOSIT_HISTORY_SUCCESS, payload: data });
        } catch (error) {
           
            dispatch({
              type: DEPOSIT_HISTORY_FAIL,
              payload: error.response
                ? error.response.data.error
                : "Unauthorized: please try again after some time",
            });
          
        }
      };
export const addMoneyinwallet = (formdata) => async (dispatch) => {
  
       
        try {
          dispatch({ type:ADD_MONEYWALLET_REQUEST });
      
          const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          };
      
          const { data } = await axios.post(
            `${backedurl}/api/v1/addMoneyUserwallet`,
            formdata,
            config
          );
      
          dispatch({ type: ADD_MONEYWALLET_SUCCESS, payload: data });
        } catch (error) {
           
            dispatch({
              type: ADD_MONEYWALLET_FAIL,
              payload: error.response
                ? error.response.data.error
                : "Unauthorized: please try again after some time",
            });
          
        }
      };
export const addbankdetails = (formdata) => async (dispatch) => {
  
        
        try {
          dispatch({ type:ADD_BANKDETAILS_REQUEST });
      
          const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          };
      
          const { data } = await axios.post(
            `${backedurl}/api/v1/addbankaccount`,
            formdata,
            config
          );
      
          dispatch({ type: ADD_BANKDETAILS_SUCCESS, payload: data });
        } catch (error) {
           
           
            dispatch({
              type: ADD_BANKDETAILST_FAIL,
              payload: error.response
                ? error.response.data.error
                : "Unauthorized: please try again after some time",
            });
          
        }
      };
export const getbankdetails = () => async (dispatch) => {
  
        
        try {
          dispatch({ type:GET_BANKDETAILS_REQUEST });
      
          const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          };
      
          const { data } = await axios.get(
            `${backedurl}/api/v1/getBankdetails`,
            config
          );
           
      
          dispatch({ type: GET_BANKDETAILS_SUCCESS, payload: data });
        } catch (error) {
          
           
            dispatch({
              type: GET_BANKDETAILST_FAIL,
              payload: error.response
                ? error.response.data.error
                : "Unauthorized: please try again after some time",
            });
          
        }
      };

export const withdrawrequestforuser = (formmdata) => async (dispatch) => {
  
        try {
          dispatch({ type:ADD_WITHDRAW_REQ_REQUEST });
      
          const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          };
      
          const { data } = await axios.post(
            `${backedurl}/api/v1/withdrawRequest`,
            formmdata,
            config
          );
           
      
          dispatch({ type: ADD_WITHDRAW_REQ_SUCCESS, payload: data });
        } catch (error) {
        
          
           
            dispatch({
              type: ADD_WITHDRAW_REQ_FAIL,
              payload: error.response
                ? error.response.data.error
                : "Unauthorized: please try again after some time",
            });
          
        }
      };
export const withdrawhistory = () => async (dispatch) => {
  
        
        try {
          dispatch({ type:WITHDRAW_HISTORY_REQUEST });
      
          const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          };
      
          const { data } = await axios.get(
            `${backedurl}/api/v1/withdrawHistory`,
            
            config
          );
           
      
          dispatch({ type: WITHDRAW_HISTORY_SUCCESS, payload: data });

        } catch (error) {
     
           
            dispatch({
              type: WITHDRAW_HISTORY_FAIL,
              payload: error.response
                ? error.response.data.error
                : "Unauthorized: please try again after some time",
            });
          
        }
      };


export const UserTransactionHistory = () => async (dispatch) => {
  
        
        try {
          dispatch({ type:TRANSACTION_HISTORY_REQUEST });
      
          const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          };
      
          const { data } = await axios.get(
            `${backedurl}/api/v1/userTransactionHistory`,
            
            config
          );
           
      
          dispatch({ type: TRANSACTION_HISTORY_SUCCESS, payload: data });

        } catch (error) {
        
          
           
            dispatch({
              type: TRANSACTION_HISTORY_FAIL,
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
      
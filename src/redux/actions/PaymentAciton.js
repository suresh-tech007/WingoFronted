
import axios from "axios";
import { ADD_BANKDETAILS_REQUEST, ADD_BANKDETAILS_SUCCESS, ADD_BANKDETAILST_FAIL, ADD_MONEYWALLET_FAIL, ADD_MONEYWALLET_REQUEST, ADD_MONEYWALLET_SUCCESS, ADD_WITHDRAW_REQ_FAIL, ADD_WITHDRAW_REQ_REQUEST, ADD_WITHDRAW_REQ_SUCCESS, ALL_USERS_WITHDRAW_REQ_FAIL, ALL_USERS_WITHDRAW_REQ_REQUEST, ALL_USERS_WITHDRAW_REQ_SUCCESS, CHECK_NEW_USER_FAIL, CHECK_NEW_USER_REQ, CHECK_NEW_USER_SUCCESS, CLEAR_ERRORS, DEPOSIT_ADD_REQ_FAIL, DEPOSIT_ADD_REQ_REQUEST, DEPOSIT_ADD_REQ_SUCCESS, DEPOSIT_HISTORY_FAIL, DEPOSIT_HISTORY_REQUEST, DEPOSIT_HISTORY_SUCCESS, GET_BANKDETAILS_REQUEST, GET_BANKDETAILS_SUCCESS, GET_BANKDETAILST_FAIL, GET_REFER_USER_DEPOSIT_DETAILS_FAIL, GET_REFER_USER_DEPOSIT_DETAILS_REQUEST, GET_REFER_USER_DEPOSIT_DETAILS_SUCCESS, GET_REFER_USER_REQUEST, GET_REFER_USER_SUCCESS, GET_UPIDETAILS_FAIL, GET_UPIDETAILS_REQUEST, GET_UPIDETAILS_SUCCESS, TRANSACTION_HISTORY_FAIL, TRANSACTION_HISTORY_REQUEST, TRANSACTION_HISTORY_SUCCESS, UPDATE_WITHDRAW_REQ_FOR_ADMIN_FAIL, UPDATE_WITHDRAW_REQ_FOR_ADMIN_REQUEST, UPDATE_WITHDRAW_REQ_FOR_ADMIN_SUCCESS, WALLET_BALANCE_FAIL, WALLET_BALANCE_REQUEST, WALLET_BALANCE_SUCCESS, WITHDRAW_HISTORY_FAIL, WITHDRAW_HISTORY_REQUEST, WITHDRAW_HISTORY_SUCCESS } from "../constants/paymentcontant.js";
import { backedurl } from "../backedUrl.js";

 

// GET REFER USER -->
export const getreferUser = () => async (dispatch) => {
  
 
  try {
    dispatch({ type:GET_REFER_USER_REQUEST });

    const config = {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token'),   
        "Content-Type": "application/json",  
      },
      withCredentials: true,
    };
    const { data } = await axios.get(
      `${backedurl}/api/v1/depositbonusforrefers`,
      config
    );
    
    dispatch({ type: GET_REFER_USER_SUCCESS, payload: data });
  } catch (error) {
      
      dispatch({
        type: GET_REFER_USER_SUCCESS,
        payload: error.response
          ? error.response.data.error
          : "Unauthorized: please try again after some time",
      });
    
  }
};
// GET REFER USER DEPOSIT DETAILS 
export const getreferUserDepositDetails = () => async (dispatch) => {
  
 
  try {
    dispatch({ type:GET_REFER_USER_DEPOSIT_DETAILS_REQUEST });

    const config = {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token'),   
        "Content-Type": "application/json",  
      },
      withCredentials: true,
    };
    const { data } = await axios.get(
      `${backedurl}/api/v1/referUserDepositDetails`,
      config
    );
  
    dispatch({ type: GET_REFER_USER_DEPOSIT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
     
      dispatch({
        type: GET_REFER_USER_DEPOSIT_DETAILS_FAIL,
        payload: error.response
          ? error.response.data.error
          : "Unauthorized: please try again after some time",
      });
    
  }
};

// CHECK WALLET BALANCE -->
export const walletbalance = () => async (dispatch) => {
  
 
  try {
    dispatch({ type:WALLET_BALANCE_REQUEST });

    const config = {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token'),   
        "Content-Type": "application/json",  
      },
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


// CHECK USER IS NEW -->
export const checkNewUser = () => async (dispatch) => {
  
 
  try {
    dispatch({ type:CHECK_NEW_USER_REQ });

    const config = {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token'),   
        "Content-Type": "application/json",  
      },
      withCredentials: true,
    };
    const { data } = await axios.get(
      `${backedurl}/api/v1/checknewuserdepositreq`,
      config
    );
    
     

    dispatch({ type: CHECK_NEW_USER_SUCCESS, payload: data });
  } catch (error) {
     
      dispatch({
        type: CHECK_NEW_USER_FAIL,
        payload: error.response
          ? error.response.data.error
          : "Unauthorized: please try again after some time",
      });
    
  }
};

export const getUpiDetails = () => async (dispatch) => {
  
 
  try {
    dispatch({ type:GET_UPIDETAILS_REQUEST });

    const config = {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token'),   
        "Content-Type": "application/json",  
      },
      withCredentials: true,
    };
    const { data } = await axios.get(
      `${backedurl}/api/v1/getUpiDetails`,
      config
    );
    
      

    dispatch({ type: GET_UPIDETAILS_SUCCESS, payload: data });
  } catch (error) {
     
      dispatch({
        type: GET_UPIDETAILS_FAIL,
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
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token'),   
        "Content-Type": "application/json",  
      },
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
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token'),   
        "Content-Type": "application/json",  
      },
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
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token'),   
        "Content-Type": "application/json",  
      },
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
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token'),   
        "Content-Type": "application/json",  
      },
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
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token'),   
        "Content-Type": "application/json",  
      },
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
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token'),   
        "Content-Type": "application/json",  
      },
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
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token'),   
        "Content-Type": "application/json",  
      },
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

      // for admin -->
export const AlluserswithdrawRequest = () => async (dispatch) => {
  
        
        try {
          dispatch({ type:ALL_USERS_WITHDRAW_REQ_REQUEST });
       const config = {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token'),   
        "Content-Type": "application/json",  
      },
      withCredentials: true,
    };
      
          const { data } = await axios.get(
            `${backedurl}/api/v1/admin/AlluserswithdrawRequest `,
            
            config
          );
           
      
          dispatch({ type: ALL_USERS_WITHDRAW_REQ_SUCCESS, payload: data });

        } catch (error) {
     
           
            dispatch({
              type: ALL_USERS_WITHDRAW_REQ_FAIL,
              payload: error.response
                ? error.response.data.error
                : "Unauthorized: please try again after some time",
            });
          
        }
      };
export const UpdateWithdrawrequest = (formdata) => async (dispatch) => {
 
        
        try {
          dispatch({ type:UPDATE_WITHDRAW_REQ_FOR_ADMIN_REQUEST });
       const config = {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token'),   
        "Content-Type": "application/json",  
      },
      withCredentials: true,
    };
      
          const { data } = await axios.put(
            `${backedurl}/api/v1/admin/acceptWithdrawrequest `,
            formdata,
            config
          );
           
      
          dispatch({ type: UPDATE_WITHDRAW_REQ_FOR_ADMIN_SUCCESS, payload: data });

        } catch (error) {
          
     
           
            dispatch({
              type: UPDATE_WITHDRAW_REQ_FOR_ADMIN_FAIL,
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
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token'),   
        "Content-Type": "application/json",  
      },
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
      
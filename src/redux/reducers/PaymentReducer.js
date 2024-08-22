import {
  ADD_BANKDETAILS_REQUEST,
  ADD_MONEYWALLET_FAIL,
  ADD_MONEYWALLET_REQUEST,
  ADD_MONEYWALLET_SUCCESS,
  ADD_BANKDETAILST_FAIL,
  CLEAR_ERRORS,
  DEPOSIT_ADD_REQ_FAIL,
  DEPOSIT_ADD_REQ_REQUEST,
  DEPOSIT_ADD_REQ_SUCCESS,
  DEPOSIT_HISTORY_REQUEST,
  DEPOSIT_HISTORY_FAIL,
  DEPOSIT_HISTORY_SUCCESS,
  ADD_BANKDETAILS_SUCCESS,
  GET_BANKDETAILS_REQUEST,
  GET_BANKDETAILS_SUCCESS,
  GET_BANKDETAILST_FAIL,
  WALLET_BALANCE_REQUEST,
  WALLET_BALANCE_SUCCESS,
  WALLET_BALANCE_FAIL,
  ADD_WITHDRAW_REQ_REQUEST,
  ADD_WITHDRAW_REQ_FAIL,
  ADD_WITHDRAW_REQ_SUCCESS,
  WITHDRAW_HISTORY_REQUEST,
  WITHDRAW_HISTORY_SUCCESS,
  WITHDRAW_HISTORY_FAIL,
  TRANSACTION_HISTORY_REQUEST,
  TRANSACTION_HISTORY_SUCCESS,
  TRANSACTION_HISTORY_FAIL,
  GET_UPIDETAILS_REQUEST,
  GET_UPIDETAILS_SUCCESS,
  GET_UPIDETAILS_FAIL,
  ALL_USERS_WITHDRAW_REQ_REQUEST,
  ALL_USERS_WITHDRAW_REQ_SUCCESS,
  ALL_USERS_WITHDRAW_REQ_FAIL,
  UPDATE_WITHDRAW_REQ_FOR_ADMIN_REQUEST,
  UPDATE_WITHDRAW_REQ_FOR_ADMIN_SUCCESS,
  UPDATE_WITHDRAW_REQ_FOR_ADMIN_FAIL,
  CHECK_NEW_USER_REQ,
  CHECK_NEW_USER_SUCCESS,
  CHECK_NEW_USER_FAIL,
  GET_REFER_USER_REQUEST,
  GET_REFER_USER_FAIL,
  GET_REFER_USER_SUCCESS,
  GET_REFER_USER_DEPOSIT_DETAILS_REQUEST,
  GET_REFER_USER_DEPOSIT_DETAILS_SUCCESS,
  GET_REFER_USER_DEPOSIT_DETAILS_FAIL,
  UDPATE_UPIDETAILS_REQUEST,
  UDPATE_UPIDETAILS_SUCCESS,
  UDPATE_UPIDETAILS_FAIL,
} from "../constants/paymentcontant.js";

export const paymentReducer = (state = {}, action) => {
  switch (action.type) {
    case DEPOSIT_ADD_REQ_REQUEST:
    case DEPOSIT_HISTORY_REQUEST:
    case WITHDRAW_HISTORY_REQUEST:
    case ADD_BANKDETAILS_REQUEST:
    case ADD_MONEYWALLET_REQUEST:
    case GET_BANKDETAILS_REQUEST:
    case WALLET_BALANCE_REQUEST:
    case ADD_WITHDRAW_REQ_REQUEST:
    case TRANSACTION_HISTORY_REQUEST:
    case GET_UPIDETAILS_REQUEST:
    case ALL_USERS_WITHDRAW_REQ_REQUEST:
    case CHECK_NEW_USER_REQ:
    case UPDATE_WITHDRAW_REQ_FOR_ADMIN_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case DEPOSIT_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        deposithistory: action.payload.deposithistory,
      };
    case WITHDRAW_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        withdrawhistory: action.payload.withdrawhistory,
      };
    case CHECK_NEW_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isNewuser: action.payload.success,
      };
    case ALL_USERS_WITHDRAW_REQ_SUCCESS:
      return {
        ...state,
        loading: false,
        allwithdrawtransaction: action.payload.allwithdrawtransaction,
      };
    case GET_UPIDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        upiId: action.payload.upiId,
        walletId: action.payload.walletId,
      };
    case TRANSACTION_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: action.payload.transactions,
      };
    case DEPOSIT_ADD_REQ_SUCCESS:
    case ADD_MONEYWALLET_SUCCESS:
    case ADD_BANKDETAILS_SUCCESS:
    case ADD_WITHDRAW_REQ_SUCCESS:
    case UPDATE_WITHDRAW_REQ_FOR_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case GET_BANKDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        bankdetails: action.payload.bankdetails,
      };
    case WALLET_BALANCE_SUCCESS:
      return {
        ...state,
        loading: false,
        depositBalance: action.payload.depositBalance,
        withdrawableBalance: action.payload.withdrawableBalance,
      };
    case DEPOSIT_ADD_REQ_FAIL:
    case ADD_MONEYWALLET_FAIL:
    case ADD_BANKDETAILST_FAIL:
    case DEPOSIT_HISTORY_FAIL:
    case GET_BANKDETAILST_FAIL:
    case WALLET_BALANCE_FAIL:
    case ADD_WITHDRAW_REQ_FAIL:
    case WITHDRAW_HISTORY_FAIL:
    case TRANSACTION_HISTORY_FAIL:
    case CHECK_NEW_USER_FAIL:
    case GET_UPIDETAILS_FAIL:
    case ALL_USERS_WITHDRAW_REQ_FAIL:
    case UPDATE_WITHDRAW_REQ_FOR_ADMIN_FAIL:
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

export const referUserreducer = (state = {}, action) => {
  switch (action.type) {
    case GET_REFER_USER_REQUEST:
    case GET_REFER_USER_DEPOSIT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_REFER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        referUserDetails: action.payload,
      };
    case GET_REFER_USER_DEPOSIT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        Userdepositdetails: action.payload,
      };
    case GET_REFER_USER_FAIL:
    case GET_REFER_USER_DEPOSIT_DETAILS_FAIL:
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


export const adminReducer = (state = {}, action) => {
  switch (action.type) {
    
    case UDPATE_UPIDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UDPATE_UPIDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
       
      };
    case UDPATE_UPIDETAILS_FAIL:
      return {
        ...state,
        loading: false,
 
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

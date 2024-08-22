import axios from "axios";
import { backedurl } from "../backedUrl";
import { UDPATE_UPIDETAILS_FAIL, UDPATE_UPIDETAILS_REQUEST, UDPATE_UPIDETAILS_SUCCESS } from "../constants/paymentcontant";
 





export const updateadminupi = (formdata) => async (dispatch) => {
  
   
         
        try {
          dispatch({ type:UDPATE_UPIDETAILS_REQUEST });
      
          const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          };
      
          const { data } = await axios.post(
            `${backedurl}/api/v1/admin/Upifordeposit`,
            formdata,
            config
          );
          
      
          dispatch({ type: UDPATE_UPIDETAILS_SUCCESS, payload: data });
        } catch (error) {
           
            dispatch({
              type: UDPATE_UPIDETAILS_FAIL,
              payload: error.response
                ? error.response.data.error
                : "Unauthorized: please try again after some time",
            });
          
        }
      };
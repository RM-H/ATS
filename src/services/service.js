import axios from "axios";

export const url = 'http://192.168.1.111/api/v1/ats'





// user enters number to get sms
export const getSms = (phone) => {
  return axios.post(`${url}/phone`,phone)
}



// user enters the code recived in sms to get the toekn
export const verifySmsCode = (code) => {
  return axios.post(`${url}/code`,code)
}
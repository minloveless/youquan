import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'

// export default {
//   getCartList(strMethod, strParameter){
//     return new Promise((resolve, reject) => {
//       let strArrParam = JSON.parse(strParameter)
//       strArrParam.webpage = "";
//       axios.get(strMethod,{ params : {
//         params: strArrParam
//       }})
//         .then(response => {
//           resolve(response);
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     })
//   }
// }
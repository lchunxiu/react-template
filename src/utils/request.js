/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-11 09:48:00 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-11 12:02:42
 */
import axios from "axios";//https://github.com/axios/axios
//You can create a new instance of axios with a custom config.
const request = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 1000,
});

// Add a request interceptor
request.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('request',config)
    return config;
  }, function (error) {
    // Do something with request error
    console.log('request',error)
    return Promise.reject(error);
  });

// Add a response interceptor
request.interceptors.response.use(function (response) {
    // Do something with response data
    console.log('response',response)
    return response;
  }, function (error) {
    console.log('response',error)
    // Do something with response error
    return Promise.reject(error);
  });

export default request;

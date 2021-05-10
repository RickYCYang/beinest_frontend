/* eslint-disable no-constant-condition */
import { put } from 'redux-saga/effects'
import { axiosGet } from '../../Service/ApiService';
import {
  GET_PORTFOLIO_SUCCESS,
  GET_PORTFOLIO_FAIL
} from '../actionTypes';

interface response {
  data: object,
  status: number
}

export function* getPortfolioRequest(action: any){
  try{
    const response: response = yield axiosGet('portfolio/', {});
    console.log('response', response);
    if(response.status === 200){
      yield put({
        type: GET_PORTFOLIO_SUCCESS,
        portfolioList: response.data
      });
    }
    /*
    if(result.data.status === 'success'){
      yield put({
        type: GET_USER_ACCOUNT_SUCCESS,
        payload: {
          account: result.data.account
        }
      })
    }else{
      yield put({
        type: GET_USER_ACCOUNT_FAIL,
        payload:{
          status: result.data.status,
          message: result.data.message
        }
      });
    }
    */
  } 
  catch(err){
    console.log('error occurs', err);
    yield put({
      type: GET_PORTFOLIO_FAIL,
      payload:{
        status: 'error',
        message: 'Error occurs when geting user account'
      }
    });
  }
}
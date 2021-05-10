/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga/effects';
import {GET_PORTFOLIO_REQUEST} from '../actionTypes';
import {getPortfolioRequest} from './portfolioSaga';

export default function* rootSaga() {
    yield takeEvery(GET_PORTFOLIO_REQUEST, getPortfolioRequest);
}

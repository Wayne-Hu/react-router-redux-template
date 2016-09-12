/**
 * Created by wayne on 9/09/16.
 */
import {
    TRIGGER_INCREASE,
    TRIGGER_DECREASE
} from '../constants'
import {takeEvery} from 'redux-saga'
import {call, put, fork} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import * as actions from '../actions/count'

export function* increase() {
    yield delay(1000);
    yield put(actions.increase(1));
}

export function* decrease() {
    yield delay(1000);
    yield put(actions.decrease(1));
}

export default function* root() {
    yield fork(takeEvery, TRIGGER_INCREASE, increase);
    yield fork(takeEvery, TRIGGER_DECREASE, decrease);
}
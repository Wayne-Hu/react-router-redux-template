/**
 * Created by wayne on 13/09/16.
 */
import {expect} from 'chai';
import {delay} from 'redux-saga'
import {put} from 'redux-saga/effects'
import {increase} from '../../src/sagas'

describe('Sagas', () => {
    it('call increase should put 1 into reducer', () => {
        const gen = increase();
        gen.next();
        expect(gen.next().value).to.deep.equal(put({type: 'INCREASE', amount: 1}));
    })
});
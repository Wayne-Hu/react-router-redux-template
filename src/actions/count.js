/**
 * Created by wayne on 8/27/16.
 */
import {
    TRIGGER_INCREASE,
    TRIGGER_DECREASE,
    INCREASE,
    DECREASE
} from '../constants'

export function triggerIncrease() {
    return {
        type: TRIGGER_INCREASE
    }
}

export function triggerDecrease() {
    return {
        type: TRIGGER_DECREASE
    }
}

export function increase(n) {
    return {
        type: INCREASE,
        amount: n
    }
}

export function decrease(n) {
    return {
        type: DECREASE,
        amount: n
    }
}
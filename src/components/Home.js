import React from 'react'
import {connect} from 'react-redux'
import {triggerIncrease, triggerDecrease} from '../actions/count'

function Home({number, triggerIncrease, triggerDecrease}) {
    return (
        <div>
            Some state changes:
            {number}
            <button onClick={() => triggerIncrease()}>Increase</button>
            <button onClick={() => triggerDecrease()}>Decrease</button>
        </div>
    )
}

export default connect(
    state => ({number: state.count.number}),
    {triggerIncrease, triggerDecrease}
)(Home)
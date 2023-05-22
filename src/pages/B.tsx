import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { decrement, increment } from '../redux/counterSlice'



function B() {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return <>
    <div>
        <h1>BBB</h1>
        <div>
            <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            >
            Decrement
            </button>
            <span>{count}</span>
        </div>
    </div>
    </>
}

export default B;
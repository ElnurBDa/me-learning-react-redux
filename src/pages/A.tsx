import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { decrement, increment } from '../redux/counterSlice'



function A() {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return <>
    <div>
        <h1>AAA</h1>
        <div>
            <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            >
            Increment
            </button>
            <span>{count}</span>
        </div>
    </div>
    </>
}

export default A;
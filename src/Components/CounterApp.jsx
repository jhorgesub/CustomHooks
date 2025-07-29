import { useCounter } from "../hooks/useCounter"

export const CounterApp = () => {

    const { counter, increment, reset, decrement } = useCounter(0)

    return (
        <>
            <h1>Contador</h1>
            <h1>{counter}</h1>
            <button type="button" class="btn btn-primary" onClick={() => decrement()}>-1</button>
            <button type="button" class="btn btn-light" onClick={() => reset()}>Reset</button>
            <button type="button" class="btn btn-primary" onClick={() => increment()}>+1</button>

        </>

    )
}

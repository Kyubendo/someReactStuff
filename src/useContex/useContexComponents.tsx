import React, {useContext, useState} from "react";

const countContext = React.createContext<null|number>(null)

const A = () => {
    const [count, setCount] = useState(0)
    return (
            <div>
                <p>A</p>
                <button onClick={() => setCount(count+1)}>Click</button>
                <countContext.Provider value={count}>
                    <B/>
                </countContext.Provider>
            </div>
    )
}

const B = () => {
    return (
        <>
            <p>B</p>
            <C/>
        </>
    )
}

const C = () => {
    const num = useContext(countContext)
    return (
        <>
            <p>C -- {num}</p>
        </>
    )
}

export default A;
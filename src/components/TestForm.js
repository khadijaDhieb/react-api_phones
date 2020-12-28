import React, {useState} from 'react'

export const TestForm = () => {

    const [month, setMonth] = useState("");
    const [week, setWeek] = useState("");


    const onSubmit = e => {
        e.preventDefault();
           console.log("week : " , week , "month : " , month)
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="month"></label>
                    <input
                        type="month"
                        id="month"
                        value={month}
                        onChange={e => setMonth(e.target.value)}
                    />

                </div>
                <br></br>
                <div className="form-control">
                    <label htmlFor="week"></label>
                    <input
                        type="week"
                        id="week"
                        value={week}
                        onChange={e => setWeek(e.target.value)}
                    />

                </div>
                <button className="btn">Submit</button>
            </form>
        </>
    )
}

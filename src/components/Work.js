import React, {useState} from "react";
import axios from "axios";

import "./work.css";
import TableComponent from "./list";


function Head() {
    return(
        <header className="work-head">
                <a className="head-work" href="/"><h1>LaTrackMoney</h1></a>
                <nav className="nav">
                    <a className="money" href="/work/money">Money</a>
                    <a className="analytics" href="/work/analytics">Analytics</a>
                </nav>

        </header>
)
}
 const Work = () => {
     const [type, setType] = useState(0);
     const [money, setMoney] = useState(0);
        const [response, setResponse] = useState(null);

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const res = await axios.post('http://localhost:8080/money', {
                    type,
                    money,
                });
                setResponse(res.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        return (
            <div>
                <Head/>
                <div className="work">
                    <section className="add">
                        <TableComponent/>
                        <form onSubmit={handleSubmit}>

                            <div>
                                <label>Type:</label>
                                <select name="type" id="type-select" value={type} onChange={(e) => setType(e.target.value)}>
                                    <option value="">--Please choose an option--</option>
                                    <option value="earning">Earning</option>
                                    <option value="spending">Spending</option>
                                </select>
                            </div>
                            <div>
                                <label>Amount:</label>
                                <input type="number" value={money} onChange={(e) => setMoney(e.target.value)}/>
                            </div>
                            <button type="submit">Add Transaction</button>
                        </form>
                    </section>
                </div>
            </div>
        );
}

export default Work;
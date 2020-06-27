import React, { useState } from "react";
import FormValues from "../components/FormData/FormData";
import TableBalance from "../components/TableBalance/TableBalance";
import "./App.css";

function App() {
  // state
  const [dataForCalc, setDataForCalc] = useState({});

  return (
    <div className="App">
      {/* <h1>Met Life Balance</h1> */}
      <FormValues setData={setDataForCalc} />
      <TableBalance data={dataForCalc} />
    </div>
  );
}

export default App;

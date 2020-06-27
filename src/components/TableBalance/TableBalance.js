import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import style from "./tableBalance.module.css";

const getTableData = data => {
  const dataArr = [];
  for (let i = 1; i <= data.years; i = i + 1) {
    const obj = {};
    const depositMet = data.deposit - data.insurance;
    const procent = data.procent / 100;
    const resultYear = !dataArr.length
      ? depositMet
      : depositMet + dataArr[dataArr.length - 1].resultYear * (procent + 1);
    const profit = resultYear * procent;
    const depositOwn = !dataArr.length
      ? data.deposit
      : data.deposit + dataArr[dataArr.length - 1].depositOwn;
    obj.id = shortid.generate();
    obj.yearNumber = i;
    obj.resultYear = Math.round(resultYear);
    obj.profit = Math.round(profit);
    obj.depositOwn = Math.round(depositOwn);

    dataArr.push(obj);
  }
  console.log(dataArr);
  return dataArr;
};

const TransactionHistory = props => {
  const { data } = props;
  console.log(data);
  const tableData = getTableData(data);
  return (
    <table className={style.history}>
      <thead>
        <tr>
          <th>Кол-во лет</th>
          <th>Накопление MetLife</th>
          <th>Накопление самост - но</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(tableRaw => (
          <tr key={tableRaw.id}>
            <td>{tableRaw.yearNumber}</td>
            <td>{tableRaw.resultYear}</td>
            <td>{tableRaw.depositOwn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// TransactionHistory.propTypes = {
//   transactions: PropTypes.arrayOf(
//     PropTypes.shape({
//       amount: PropTypes.number.isRequired,
//       type: PropTypes.string.isRequired,
//       time: PropTypes.string.isRequired
//     })
//   ).isRequired
// };

export default TransactionHistory;

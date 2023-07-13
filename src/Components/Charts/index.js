import React from "react";
import { Line, Pie } from "@ant-design/charts";

function ChartComponent({ sortedTransactions }) {
  console.log(
    "Sort>>>>>>",
    sortedTransactions[0].date,
    sortedTransactions[0].amount
  );
  const data = sortedTransactions.map((item) => {
    return { date: item.date, amount: item.amount };
  });
  //   const data = [
  //     { year: "1991", value: 0 },
  //     { year: "1992", value: 2 },
  //     { year: "1993", value: 0 },
  //   ];

  const spendingData = sortedTransactions.filter((transaction) => {
    if (transaction.type == "expense") {
      return { tag: transaction.tag, amount: transaction.amount };
    }
  });

  let newSpendings = [
    { tag: "food", amount: 0 },
    { tag: "education", amount: 0 },
    { tag: "office", amount: 0 },
  ];

  spendingData.forEach((item) => {
    if (item.tag == "food") {
      newSpendings[0].amount += item.amount;
    } else if (item.tag == "education") {
      newSpendings[1].amount += item.amount;
    } else {
      newSpendings[2].amount += item.amount;
    }
  });

  console.log("Data>>>>", data);
  const config = {
    data: data,
    width: 700,
    autofit: true,
    xField: "date",
    yField: "amount",
  };

  const spendingConfig = {
    data: newSpendings,
    width: 400,
    angleField: "amount",
    colorField: "tag",
  };

  let chart;
  let piechart;
  return (
    <div className="chart-wrapper">
      <div>
        <h2>Your Analytics</h2>
        <Line
          {...config}
          onReady={(chartInstance) => (chart = chartInstance)}
        />
      </div>
      <div>
        <h2>Your Spendings</h2>
        <Pie
          {...spendingConfig}
          onReady={(chartInstance) => (chart = chartInstance)}
        />
      </div>
    </div>
  );
}

export default ChartComponent;

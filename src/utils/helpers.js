export let others = {
  label: "Comparative Landscape",
  // fill: false,
  // lineTension: 0.1,
  // borderColor: "rgba(75,192,192,1)",
  // borderCapStyle: "butt",
  // borderDash: [],
  // borderDashOffset: 0.0,
  // borderJoinStyle: "miter",
  // pointBorderColor: "rgba(75,192,192,1)",
  // pointBackgroundColor: "#fff",
  // pointBorderWidth: 1,
  // pointHoverRadius: 5,
  // pointHoverBackgroundColor: "rgba(75,192,192,1)",
  // pointHoverBorderColor: "rgba(220,220,220,1)",
  // pointHoverBorderWidth: 2,
  // pointRadius: 1,
  // pointHitRadius: 10,
};

//Make the text displayed readable and not the raw json object key
export function readableName(xy) {
  switch (xy) {
    case "ebidta":
      return "EBITDA";
    case "debt_to_equity":
      return "Debt-To-Equity Ratio";
    case "costs":
      return "Costs";
    case "qualified_marketing_traffic":
      return "Qualified Marketing Traffic";
    case "debt_ratio":
      return "Debt Ratio";
    case "customer_lifetime_value":
      return "Customer Lifetime Value";
    case "customer_churn":
      return "Customer Churn";
    default:
      return "";
  }
}
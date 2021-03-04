export let others = {
  label: "Comparative Landscape",
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
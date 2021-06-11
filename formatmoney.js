const formatMoney = (unformatted) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(unformatted);
};

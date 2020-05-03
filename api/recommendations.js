export default function (req, res) {
  if (!req.body) {
    return res.status(400).json({ message: "request body is empty" });
  }

  const { meals, foodCategories } = req.body || {};

  if (!meals || !foodCategories) {
    return res
      .status(400)
      .json({ message: "Missing meals and/or foodCategories in request body" });
  }

  return res.status(200).json({ meals, foodCategories });
}

import express from "express";

const PORT = 3100;
const app = express();

app.use(express.json());

const products = [
  { id: 1, name: "Mouse", price: 250 },
  { id: 2, name: "Keyboard", price: 500 },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const findProduct = products.find((item) => item.id === id);
  if (!findProduct) return res.json({ message: "Product Not Found" });
  res.json(findProduct);
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/layouts/mainLayout.jsx", [index("routes/home.jsx")]),

  route("*", "routes/notfound.jsx"),
];

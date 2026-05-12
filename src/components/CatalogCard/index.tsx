import "./styles.css";
import type { ProductDTO } from "../../models/product";
import { Link } from "react-router-dom";

type Props = {
  product: ProductDTO;
};

export default function CatalogCard({ product }: Props) {
  return (
    <Link to={`/product-details/${product.id}`}>
      <div class="dsc-card">
        <div class="dsc-catalog-card-top dsc-line-bottom">
          <img src={product.imgUrl} alt={product.name} />
        </div>
        <div class="dsc-catalog-card-bottom">
          <h3>R$ {product.price.toFixed(2)}</h3>
          <h4>{product.name}</h4>
        </div>
      </div>
    </Link>
  );
}

type ProductCardProps = {
  name: string;
  price: number;
  description?: string;
};

const ProductCard = ({ name, price, description }: ProductCardProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      {description && <p>{description}</p>}
    </div>
  );
};

export default ProductCard;
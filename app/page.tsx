import Banner from "@/components/blocks/Banner/Banner";
import { Product } from "@/components/blocks/Product/Product";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <Banner />
        <Product.Table />
      </div>
    </>
  );
}

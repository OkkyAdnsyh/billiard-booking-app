import Banner from "@/components/blocks/Banner/Banner";
import { Product } from "@/components/blocks/Product/Product";

export default function Home() {
  return (
    <>
      <Banner />
      <Product.Table />
    </>
  );
}

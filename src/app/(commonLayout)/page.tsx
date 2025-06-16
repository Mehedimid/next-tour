import Banner from "@/components/Home/Banner";
import { headers } from "next/headers";

const Home = async () => {
  const headerList =await headers();
  const pathname =  headerList.get("x-current-path");
  console.log(pathname);

  return (
    <section className="min-h-screen">
      <Banner />
    </section>
  );
};

export default Home;

import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { headers } from "next/headers";
const Home = async () => {
  const headerList =await headers();
  const pathname =  headerList.get("x-current-path");
  console.log(pathname);

  return (
    <section className="layout-padding">
      home sections
      <div className="p-4">
        <h1>Welcome to My Page</h1>
        <p className="mb-4">Check out this cool button:</p>

        <PrimaryButton
          label="Explore"
          fromColor="bg-primary"
          toColor="bg-secondary"
        />
        <PrimaryButton
          label="Submit"
          fromColor="bg-secondary"
          toColor="bg-black"
        />
      </div>
    </section>
  );
};

export default Home;

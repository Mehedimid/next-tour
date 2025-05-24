import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import { Button } from "@/components/ui/button";
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
          className=""
        />
        <PrimaryButton
          label="Submit"
          className=""
          fromColor="bg-secondary"
          toColor="bg-black"
        />
        <Button className="w-[200px] cursor-pointer font-base">Find Tours</Button>

        <SecondaryButton label="Secondary Button" />

      </div>
    </section>
  );
};

export default Home;

import Navbar from "@/components/shared/navbar/Navbar";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="layout-padding">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
      </div>
    </div>
  );
}

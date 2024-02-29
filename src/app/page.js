import AllEmployee from "@/components/main-dashboard/allEmployee/AllEmployee";
import MainDashboard from "@/components/main-dashboard/main-dashboard";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home({ children }) {
  return (
    <main>
      <MainDashboard>
        <AllEmployee />
        {children}
      </MainDashboard>
    </main>
  );
}

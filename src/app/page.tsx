import Image from "next/image";
import ComponentHeader from "@/components/Header";
import Main from "@/components/Main";
export default function Home() {
  return (
    <>
      <div className="structurProyect">
        <ComponentHeader />
        <Main />
      </div>
    </>
  );
}

import Header from "@/app/_common/components/header";
import Values from "@/app/_common/components/values";
import Service from "@/app/_common/components/service";
import Step from "@/app/_common/components/step";
import Footer from "@/app/_common/components/footer";


export default function Home() {
  return (
      <div className="bg-[#EBECF2]  ">
        <Header/>
        <Values/>
        <Service/>
        <Step/>
        <Footer/>
      </div>
  );
}

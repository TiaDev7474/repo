import Header from './(component)/header'
import HeaderContent from "@/app/service-public/(component)/header-content";
import Service from "@/app/service-public/(component)/service";



export default function ServicePage() {
    return(
        <section className="bg-primary">
            <Header />
            <HeaderContent   />
            <Service />
        </section>
    )
}

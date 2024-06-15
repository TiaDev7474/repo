import ServiceCard from "@/app/_common/components/service_card";
import ServiceItem from "@/app/service-public/(component)/service-item";


const services = [
    {
        service: "Demande d'acte de naissance",
        description: "Effectuez votre demande d'acte de naissance en ligne rapidement et facilement.",
        link: "#"
    },
    {
        service: "Demande de permis",
        description: "Soumettez votre demande de permis de conduire en quelques étapes simples.",
        link: "#"
    },
    {
        service: "Demande de résidence",
        description: "Déposez votre demande de certificat de résidence en ligne sans tracas.",
        link: "#"
    }
];
export default function Service() {
    return(
        <div className="px-32 py-5 gap-6 h-screen">
            <div className="flex px-12 gap-12">
                {
                    services.map(service => (
                        <ServiceItem title={service.service} description={service.description} link={service.link} />
                    ))
                }
            </div>
        </div>
    )
}

import {CityzenConnectBtn} from "@/app/_common/components/cityzen-connect-btn";



export default function Header() {
    return(
        <div className="px-32 py-6">
            <nav className="w-full flex justify-between">
                <div className="flex justify-evenly items-center">
                    <div className="flex flex-col">
                        <h2 className="text-1xl font-bold text-orange-500">Service</h2>
                        <h2 className="text-md font-bold">PUBLIC</h2>
                    </div>
                    <h2 className="text-5xl font-medium">.MGD</h2>
                </div>
                <div>
                    <CityzenConnectBtn />
                </div>
            </nav>
        </div>

    )
}

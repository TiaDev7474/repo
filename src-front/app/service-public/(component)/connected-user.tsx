// components/UserProfile.js
import {UserIcon} from "lucide-react";

const UserProfile = ({  }) => {
    return (
        <div className="flex items-center">
            <div className="flex flex-col items-center mr-4">
                <UserIcon />
            </div>
            <div className="flex flex-col">
                <div className="text-xl font-medium text-black">Nomena</div>
                <div className="text-xl font-medium text-black">Andrianiana Fanomezantsoa</div>
            </div>
        </div>
    );
};

export default UserProfile;

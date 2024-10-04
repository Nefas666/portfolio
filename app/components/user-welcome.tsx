import data from "../../data.json";

const UserWelcome = async ({ promise }) => {
    const user = await promise;

    return (
        <p className="font-montreal text-gray-50 text-sm">
            Hi, my name is {user.name || data.displayName}
            {". "}
            {user.bio}
        </p>
    );
};

export default UserWelcome;
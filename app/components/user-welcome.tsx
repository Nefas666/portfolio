const UserWelcome = async ({ promise }) => {
    const userData = await promise;

    return (
        <p className="font-montreal text-gray-50 text-sm">
            Hi, my name is {userData.name}
            {". "}
            {userData.bio} 
        </p>
    );
};

export default UserWelcome;
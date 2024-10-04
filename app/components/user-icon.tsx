import Image from "next/image";
import data from "../../data.json";


const UserIcon = async ({ promise }) => {
    const user = await promise;
  
    return (
      <Image
        alt='👨‍💻'
        width={100}
        height={100}
        src={user.avatar_url || data.avatarUrl}
        className='float-right rounded-full mx-4 sm:h-5 sm:w-5'
      />
    );
  };

  export default UserIcon;

{/* in page:  <UserIcon promise={promise} /> */}

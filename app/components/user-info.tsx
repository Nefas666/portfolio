const UserInfo = ({ username, jobrole }) => (
	<section className='row-span-1'>
	  <h1 className='flex items-center z-10 text-2xl font-montreal text-white sm:text-6xl whitespace-nowrap'>
		{username}
	  </h1>
	  <p className='flex items-center z-10 font-montreal text-gray-50 text-sm'>
		{jobrole}
	  </p>
	</section>
  );
  export default UserInfo;
import UpdatePassword from "@/app/_components/ui/UpdatePassword";
import SettingsHeader from "@/app/_components/ui/SettingsHeader";
import UpdateUserEmail from "@/app/_components/ui/UpdateUserEmail";

function Page() {
	return (
		<div className=" flex flex-col items-center- gap-10 w-full pt-10 md:pl-10">
			<SettingsHeader />
			{/* <UpdateUserEmail /> */}
			<UpdatePassword />
		</div>
	);
}

export default Page;

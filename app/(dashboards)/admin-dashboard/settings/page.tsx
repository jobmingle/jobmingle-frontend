import UpdatePassword from "@/app/_components/auth/UpdatePassword";
import SettingsHeader from "@/app/_components/ui/SettingsHeader";

function Page() {
	return (
		<div className=" flex flex-col items-center- gap-10 w-full pt-10 md:pl-10">
			<SettingsHeader />
			<UpdatePassword />
		</div>
	);
}

export default Page;

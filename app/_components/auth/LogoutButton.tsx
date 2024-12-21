import {
	apiSlice,
	useLogoutUserMutation,
} from "@/app/_features/appSlices/apiSlice";
import { clearUser } from "@/app/_features/appSlices/userSlice";
import { useAppDispatch } from "@/app/_hooks/hooks";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
import Cookies from "js-cookie";

interface ButtonProps {
	styleExtra?: string;
	hidden?: boolean;
}

export default function LogoutButton({
	styleExtra,
	hidden = true,
}: ButtonProps) {
	const dispatch = useAppDispatch();
	const [logoutUser, { isLoading: isLoggingOut, error }] =
		useLogoutUserMutation();

	const router = useRouter();

	async function handleLogout() {
		try {
			const res = await logoutUser({}).unwrap();
			toast.success(res?.message);
			dispatch(clearUser());
			dispatch(apiSlice.util.resetApiState());
			sessionStorage.removeItem("userId");
			sessionStorage.removeItem("userEmail");
			localStorage.removeItem("access_token");
			Cookies.remove("access_token", { path: "/" });

			router.push("/");
		} catch (error: any) {
			toast.error(
				error?.data?.message ||
					"You can not perform this request at the moment!"
			);
			console.error(error);
		}
	}

	return (
		<div>
			<button
				onClick={handleLogout}
				className={`flex items-center gap-2 ${styleExtra} hover:text-yellow-500 transition-all 0.3s text-sm lg:text-lg py-3 md:hover:bg-gray-50 text-stone-950 rounded md:rounded-l p-[1rem] md:px-4`}
			>
				<HiMiniArrowLeftStartOnRectangle
					title="Logout"
					className=" text-inherit  w-[1.8rem] h-[1.8rem]"
				/>
				<p className={`${hidden ? "hidden " : ""} lg:flex text-center`}>
					{" "}
					Logout
				</p>
			</button>
		</div>
	);
}

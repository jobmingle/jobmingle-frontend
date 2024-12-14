// Import the RTK Query methods from the React-specific entry point
import { UserTypes } from "@/app/_hooks/Helpers";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userSlice } from "./userSlice";

export const apiSlice = createApi({
	reducerPath: "api",
	refetchOnReconnect: true,
	baseQuery: fetchBaseQuery({
		baseUrl: "https://rosybrown-spider-442940.hostingersite.com/api",
		// baseUrl: "https://0aca-197-211-59-130.ngrok-free.app/api",
		prepareHeaders: (headers, { endpoint }) => {
			const token = localStorage.getItem("access_token");

			if (
				token &&
				endpoint !== "obtainToken" &&
				endpoint !== "forgetPassword" &&
				endpoint !== "resetPassword"
			) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: [
		"AllUsers",
		"StaffClients",
		"SingleJob",
		"SingleCourse",
		"Roles",
		"SingleUser",
		"AuthUser",
		"AllJobs",
		"AllCourses",
		"ListedJobs",
		"ListedCourses",
		"EnrolledCourses",
		"VendorEarnings",
	],
	endpoints: (builder) => ({
		obtainToken: builder.mutation({
			query: (user) => ({
				url: "/login",
				method: "POST",
				body: user,
				credentials: "include",
			}),
		}),
		getAuthUser: builder.query<UserTypes, void>({
			query: () => ({
				url: "/me",
			}),
			providesTags: ["AuthUser"],
		}),

		createUser: builder.mutation({
			query: (data) => ({
				url: "/register",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["SingleUser", "AllUsers"],
		}),

		verifyEmail: builder.mutation({
			query: (pin) => ({
				url: "/verify-email",
				method: "POST",
				body: pin,
			}),
		}),
		resendVerificationPin: builder.mutation({
			query: (email) => ({
				url: "/resend-verification-pin",
				method: "POST",
				body: email,
			}),
		}),
		updateProfile: builder.mutation({
			query: ({ userId, formData }) => ({
				url: `/users/${userId}/update-profile`,
				method: "PUT",
				body: formData,
			}),
			invalidatesTags: ["AuthUser"],
		}),

		forgetPassword: builder.mutation({
			query: (data) => ({
				url: "/forgot-password",
				method: "POST",
				body: data,
			}),
		}),
		resetPassword: builder.mutation({
			query: (data) => ({
				url: "/reset-password",
				method: "POST",
				body: data,
			}),
		}),
		editUser: builder.mutation({
			query: ({ editedUser, userId }) => ({
				url: `/update/user/${userId}`,
				method: "PUT",
				body: editedUser,
			}),
			invalidatesTags: ["SingleUser", "AllUsers"],
		}),

		updatePassword: builder.mutation({
			query: ({ userId, data }) => ({
				url: `/users/${userId}/update-password`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["AuthUser"],
		}),

		updateUserInfo: builder.mutation({
			query: ({ userId, data }) => ({
				url: `/users/${userId}/update-info`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["AuthUser"],
		}),
		updateProfileImage: builder.mutation({
			query: ({ userId, imageData }) => ({
				url: `/users/${userId}/update-image`,
				method: "PUT",
				body: imageData,
			}),
			invalidatesTags: ["AuthUser"],
		}),

		logoutUser: builder.mutation({
			query: () => ({
				url: "/logout", // Your API endpoint for logout
				method: "POST",
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					await queryFulfilled;
					// Clear local auth state on successful logout
					dispatch(userSlice.actions.clearUser()); // Assuming you have an `authSlice`
					dispatch(apiSlice.util.resetApiState()); // Clear RTK Query cache
				} catch (error) {
					console.error("Logout failed:", error);
				}
			},
		}),
		postJob: builder.mutation({
			query: (jobData) => ({
				url: "/jobs/post-job",
				method: "POST",
				body: jobData,
			}),
			invalidatesTags: ["AllJobs", "ListedJobs"],
		}),
		updateJob: builder.mutation({
			query: ({ jobId, data }) => ({
				url: `/jobs/updateJob/${jobId}`,
				method: "PATCH",
				body: data,
			}),
			invalidatesTags: ["AllJobs", "ListedJobs"],
		}),
		getAllJobs: builder.query({
			query: () => ({
				url: "/jobs/getAllJobs",
			}),
			providesTags: ["AllJobs"],
		}),
		getListedJobs: builder.query({
			query: () => ({
				url: "/jobs/my-jobs",
			}),
			providesTags: ["ListedJobs"],
		}),

		deleteJob: builder.mutation({
			query: (jobId) => ({
				url: `/jobs/deleteJob/${jobId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["AllJobs", "ListedJobs"],
			async onQueryStarted(jobId, { dispatch, queryFulfilled }) {
				const filteredResult = dispatch(
					apiSlice.util.updateQueryData("getListedJobs", {}, (oldJobs) => {
						const filteredData = oldJobs?.data?.filter(
							(job: any) => job?.id !== jobId
						);
						return { ...oldJobs, data: filteredData };
					})
				);
				try {
					await queryFulfilled;
				} catch {
					filteredResult.undo();
				}
			},
		}),

		postCourse: builder.mutation({
			query: (courseData) => ({
				url: "/moodle/create-course",
				method: "POST",
				body: courseData,
			}),
			invalidatesTags: ["AllCourses", "ListedCourses", "VendorEarnings"],
		}),
		coursePayment: builder.mutation({
			query: (payData) => ({
				url: "/moodle/pay",
				method: "POST",
				body: payData,
			}),
			invalidatesTags: ["EnrolledCourses"],
		}),

		getAllCourses: builder.query({
			query: () => ({
				url: "/moodle/getallcourses",
			}),
			providesTags: ["AllCourses"],
		}),
		getListedCourses: builder.query({
			query: (userId) => ({
				url: `/moodle/${userId}/get-creator-course`,
			}),
			providesTags: ["ListedCourses"],
		}),
		getCourseById: builder.query({
			query: (courseId) => ({
				url: `/moodle/getcoursebyid/${courseId}`,
			}),
			providesTags: ["SingleCourse"],
		}),
		getJobById: builder.query({
			query: (jobId) => ({
				url: `/jobs/getJobById/${jobId}`,
			}),
			providesTags: ["SingleJob"],
		}),
		getVendorEarning: builder.query({
			query: () => ({
				url: `/moodle/creator-earnings`,
			}),
			providesTags: ["VendorEarnings"],
		}),
		getEnrolledCourses: builder.query({
			query: (userId) => ({
				url: `/moodle/${userId}/get-user-enrolled-courses`,
			}),
			providesTags: ["EnrolledCourses"],
		}),
		submitMessage: builder.mutation({
			query: (data) => ({
				url: `/contact-us`,
				method: "POST",
				body: data,
			}),
		}),
		subscribeNewsletter: builder.mutation({
			query: (data) => ({
				url: `/subscribe`,
				method: "POST",
				body: data,
			}),
		}),
	}),
});

export const {
	useCreateUserMutation,
	useVerifyEmailMutation,
	useEditUserMutation,
	useObtainTokenMutation,
	useGetAuthUserQuery,
	useForgetPasswordMutation,
	useResendVerificationPinMutation,
	useUpdateProfileMutation,
	useResetPasswordMutation,
	useUpdatePasswordMutation,
	useUpdateProfileImageMutation,
	useUpdateUserInfoMutation,
	useLogoutUserMutation,
	usePostCourseMutation,
	usePostJobMutation,
	useGetAllJobsQuery,
	useGetListedJobsQuery,
	useDeleteJobMutation,
	useCoursePaymentMutation,
	useUpdateJobMutation,
	useGetAllCoursesQuery,
	useGetCourseByIdQuery,
	useGetJobByIdQuery,
	useGetListedCoursesQuery,
	useGetEnrolledCoursesQuery,
	useGetVendorEarningQuery,
	useSubmitMessageMutation,
	useSubscribeNewsletterMutation,

	// useGetUserByIdQuery,
} = apiSlice;

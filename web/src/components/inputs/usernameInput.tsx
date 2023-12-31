"use client";
import { useState } from "react";
import useLocalUserData from "@/hooks/useLocalUserData";

const UsernameInput = ({ link }: { link: string }) => {
	const [userData, setUserData] = useLocalUserData();

	const [usernameInput, setUsernameInput] = useState(userData.username);

	function startGame() {
		setUserData({
			...userData,
			username: usernameInput,
		});
		window.location.href = `/play?game=${link}`;
	}
	return (
		<>
			<input
				type="text"
				className="w-[70%] border-[#597BF533] border-2 bg-transparent rounded-xl text-[#A49CD2] text-2xl p-4"
				placeholder="Username"
				defaultValue={usernameInput}
				onChange={(e) => setUsernameInput(e.currentTarget.value)}
				onKeyDown={(e) => e.key === "Enter" && startGame()}
			/>
			<button
				onClick={() => startGame()}
				className="bg-[#CDCDCD] ml-4 p-4 text-black font-bold text-2xl rounded-xl w-[30%]"
			>
				Join now
			</button>
		</>
	);
};

export default UsernameInput;

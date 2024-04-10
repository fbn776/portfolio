"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useCallback, useRef, useState } from "react";
import Loader from "../../components/loader/Loader";
import { IconChecks, IconHourglassEmpty, IconX } from "@tabler/icons-react";

//100s
const timeout = 100000;
export default function Connect() {
	const lastTime = useRef(0);
	const [status, setStatus] = useState<
		null | "error" | "success" | "timeout" | "pending"
	>(null);

	const sendEmail = useCallback((e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (Date.now() - lastTime.current < timeout) {
			setStatus("timeout");
			setTimeout(() => {
				setStatus(null);
			}, timeout);
			return;
		}

		setStatus("pending");

		emailjs
			.sendForm("service_zgv953o", "template_gcnla4o", e.currentTarget, {
				publicKey: "jq2517wjjZvbkt2tD",
			})
			.then(
				() => {
					setStatus("success");
					setTimeout(() => {
						setStatus(null);
					}, 2000);
				},
				(error) => {
					setStatus("error");
					setTimeout(() => {
						setStatus(null);
					}, 2000);
					console.log("FAILED: ", error);
				}
			);

		lastTime.current = Date.now();
	}, []);

	return (
		<form
			onSubmit={sendEmail}
			className="connect-form w-full flex-1 flex flex-col px-[10%] my-5 max-sm:px-0"
		>
			<div className="w-full flex flex-col gap-3 flex-1">
				<label htmlFor="from_name">Name</label>
				<input name="from_name" placeholder="Enter name" type="name" required />

				<label htmlFor="from_email">Email</label>
				<input
					name="from_email"
					type="email"
					placeholder="Enter email"
					required
				/>

				<label htmlFor="message">Message</label>
				<textarea name="message" placeholder="Enter message" required />
			</div>
			<button
				className={`px-5 py-2 flex justify-center gap-2 text-base rounded-md bg-primary max-lg:mt-5 hover:scale-105 disabled:hover:scale-1 transition-transform disabled:bg-primaryDisabled ${
					status === "error" && "bg-red-600"
				} ${status === "success" && "bg-green-600"}`}
				disabled={status === "pending" || status === "timeout"}
			>
				{status === "error" ? (
					<>
						Failed
						<IconX />
					</>
				) : status === "success" ? (
					<>
						Success!
						<IconChecks />
					</>
				) : status === "timeout" ? (
					<>
						Please wait
						<IconHourglassEmpty />
					</>
				) : status === "pending" ? (
					<Loader />
				) : (
					"Send"
				)}
			</button>
		</form>
	);
}

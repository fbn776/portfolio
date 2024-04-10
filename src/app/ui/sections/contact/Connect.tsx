"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import Loader from "../../components/loader/Loader";

let x = 0;
export default function Connect() {
	const [pending, setPending] = useState(false);
	const [status, setStatus] = useState<null | 'error' | 'success'>(null);

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setPending(true);
		setStatus(null);

		if (x % 2 == 0) {
			setTimeout(() => {
				setPending(false);
				setStatus('error');
				x++;
			}, 3000);
		} else {
			setTimeout(() => {
				setPending(false);
				setStatus('success');
				x++;
			}, 3000);
		}
		// emailjs
		// 	.sendForm("service_zgv953o", "template_gcnla4o", e.currentTarget, {
		// 		publicKey: "jq2517wjjZvbkt2tD",
		// 	})
		// 	.then(
		// 		() => {
		// 			setPending(false);
		// 			console.log("Mail Sent");
		// 		},
		// 		(error) => {
		// 			setPending(false);
		// 			setError(error);
		// 			console.log("FAILED: ", error);
		// 		}
		// 	);
	};
	return (
		<form
			onSubmit={sendEmail}
			className="connect-form w-full flex-1 flex flex-col px-[10%] my-5 max-sm:px-0"
		>
			<div className="w-full flex flex-col gap-3 flex-1">
				<label htmlFor="name">Name</label>
				<input name="name" placeholder="Enter name" type="name" required />

				<label htmlFor="email">Email</label>
				<input name="email" type="email" placeholder="Enter email" required />

				<label htmlFor="message">Message</label>
				<textarea name="message" placeholder="Enter message" required />
			</div>
			<button
				className={`px-5 py-2 flex justify-center text-base rounded-md bg-primary max-lg:mt-5 hover:scale-105 disabled:hover:scale-1 transition-transform disabled:bg-primaryDisabled ${
					(status === 'error') && "bg-red-600"
				}`}
				disabled={pending}
			>
				{status === 'error' ? 'Failed to sent message' : pending ? <Loader /> : "Send"}
			</button>
		</form>
	);
}

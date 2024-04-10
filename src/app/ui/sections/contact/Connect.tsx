export default function Connect() {
	return (
		<>
			<form className="connect-form">
				<div className="w-full flex flex-col gap-3">
					<label htmlFor="name">Name</label>
					<input name="name" placeholder="Enter name" type="name" required />

					<label htmlFor="email">Email</label>
					<input name="email" type="email" placeholder="Enter email" required />

					<label htmlFor="message">Message</label>
					<textarea name="message" placeholder="Enter message" required />
				</div>
				<button className="px-5 py-2 rounded-md bg-primary">Send</button>
			</form>
		</>
	);
}

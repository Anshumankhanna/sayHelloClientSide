export default function sayHelloClientSide() {
	if (typeof window !== undefined && typeof window.document !== undefined) {
		console.log("Hello");
	} else {
		throw new Error(
			"You are not supposed to load this module on server side. It is made for client side loading only.",
		);
	}
}

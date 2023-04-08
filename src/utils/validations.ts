export const assert = (validation: boolean, message: string, value?: any) => {
	if (!validation) {
		const errorMessage = !value ? message : message.concat(`: ${value}`)
		throw new Error(errorMessage)
	}
}

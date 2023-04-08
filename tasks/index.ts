import fs from "fs";
import path from "path";


export const loadTasks = () => {
	const tasksPath = path.join(__dirname, '../tasks')

	fs.readdirSync(tasksPath)
		.filter(file => file.endsWith(".ts"))
		.forEach((task) => {
			require(`${tasksPath}/${task}`)
		})
}

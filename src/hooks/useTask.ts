import React from "react";
import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import { delay } from "../helpers/utils";

export default function useTasks() {
	const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
	const [isUpdatingTask, setIsUpdatingTask] = React.useState(false);
	const [isDeletingTask, setIsDeletingTask] = React.useState(false);

	function prepareTask() {
		setTasks([
			...tasks,
			{
				id: Math.random().toString(36).substring(2, 9),
				title: "",
				state: TaskState.Creating,
			},
		]);
	}

	function updateTask(id: string, payload: { title: Task["title"] }) {
		setTasks(
			tasks.map((task) =>
				task.id === id
					? {
							...task,
							state: TaskState.Created,
							...payload,
						}
					: task,
			),
		);
	}

	async function updateTaskStatus(id: string, concluded: boolean) {
		setIsUpdatingTask(true);

		await delay(1000);

		setTasks(
			tasks.map((task) => (task.id === id ? { ...task, concluded } : task)),
		);

		setIsUpdatingTask(false);
	}

	async function deleteTask(id: string) {
		setIsDeletingTask(true);

		await delay(1000);

		setTasks(tasks.filter((task) => task.id !== id));

		setIsDeletingTask(false);
	}

	return {
		prepareTask,
		updateTask,
		updateTaskStatus,
		deleteTask,
		isUpdatingTask,
		isDeletingTask,
	};
}

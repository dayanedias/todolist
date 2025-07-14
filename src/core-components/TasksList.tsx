import React from "react";
import Button from "../components/Button";
import PlusIcon from "../assets/icons/plus.svg?react";
import TaskItem from "./TaskItem";
import useTask from "../hooks/useTask";
import useTasks from "../hooks/useTasks";
import { TaskState, type Task } from "../models/task";

export default function TaskList() {
	const { tasks, isLoadingTasks } = useTasks();
	const { prepareTask } = useTask();

	function handleNewTask() {
		prepareTask();
	}

	return (
		<>
			<section>
				<Button
					icon={PlusIcon}
					className="w-full"
					onClick={handleNewTask}
					disabled={
						tasks.some((task) => task.state === TaskState.Creating) ||
						isLoadingTasks
					}
					handling={isLoadingTasks}
				>
					Nova tarefa
				</Button>
			</section>
			<section>
				{!isLoadingTasks &&
					tasks.map((task) => <TaskItem key={task.id} task={task} />)}

				{isLoadingTasks && (
					<>
						<TaskItem task={{} as Task} loading />
						<TaskItem task={{} as Task} loading />
						<TaskItem task={{} as Task} loading />
					</>
				)}
			</section>
		</>
	);
}

import React from "react";
import Button from "../components/Button";
import PlusIcon from "../assets/icons/plus.svg?react";
import TaskItem from "./TaskItem";

export default function TaskList() {
	return (
		<>
			<section>
				<Button icon={PlusIcon} className="w-full">
					Nova tarefa
				</Button>
			</section>
			<section>
				<TaskItem />
				<TaskItem />
				<TaskItem />
				<TaskItem />
			</section>
		</>
	);
}

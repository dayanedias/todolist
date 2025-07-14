import React from "react";
import Card from "../components/Card";
import InputCheckbox from "../components/InputCheckbox";
import InputText from "../components/InputText";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import Text from "../components/Text";
import ButtonIcon from "../components/ButtonIcon";
import { cx } from "class-variance-authority";
import { TaskState, type Task } from "../models/task";
import useTask from "../hooks/useTask";

interface TaskItemProps {
	task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
	const [isEditing, setIsEditing] = React.useState(
		task?.state === TaskState.Creating,
	);

	const [taskTitle, setTaskTitle] = React.useState(task?.title || "");
	const { updateTask } = useTask();

	function handleEditTask() {
		setIsEditing(true);
	}

	function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		updateTask(task.id, { title: taskTitle });
		setIsEditing(false);
	}

	function handleCancelEditTask() {
		setIsEditing(false);
	}

	function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
		setTaskTitle(e.target.value || "");
	}

	return (
		<Card size="md">
			{isEditing ? (
				<form
					onSubmit={handleSaveTask}
					className="my-2 flex items-center gap-4"
				>
					<InputText
						value={taskTitle}
						className="flex-1"
						onChange={handleChangeTaskTitle}
						required
						autoFocus
					/>
					<div className="flex gap-1">
						<ButtonIcon
							type="button"
							variant="secondary"
							icon={XIcon}
							onClick={handleCancelEditTask}
						/>
						<ButtonIcon type="submit" variant="primary" icon={CheckIcon} />
					</div>
				</form>
			) : (
				<div className="my-2 flex items-center gap-4">
					<InputCheckbox
						value={task?.concluded?.toString()}
						checked={task?.concluded}
					/>
					<Text
						className={cx("flex-1", {
							"line-through": task?.concluded,
						})}
					>
						{task?.title}
					</Text>
					<div className="flex gap-1">
						<ButtonIcon variant="tertiary" icon={TrashIcon} />
						<ButtonIcon
							variant="tertiary"
							icon={PencilIcon}
							onClick={handleEditTask}
						/>
					</div>
				</div>
			)}
		</Card>
	);
}

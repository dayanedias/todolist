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
import Skeleton from "../components/Skeleton";

interface TaskItemProps {
	task: Task;
	loading?: boolean;
}

export default function TaskItem({ task, loading }: TaskItemProps) {
	const [isEditing, setIsEditing] = React.useState(
		task?.state === TaskState.Creating,
	);

	const [taskTitle, setTaskTitle] = React.useState(task?.title || "");
	const {
		updateTask,
		updateTaskStatus,
		deleteTask,
		isUpdatingTask,
		isDeletingTask,
	} = useTask();

	function handleEditTask() {
		setIsEditing(true);
	}

	function handleCancelEditTask() {
		if (task.state === TaskState.Creating) {
			deleteTask(task.id);
		}
		setIsEditing(false);
	}

	function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
		setTaskTitle(e.target.value || "");
	}

	async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		await updateTask(task.id, { title: taskTitle });
		setIsEditing(false);
	}

	function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
		const checked = e.target.checked;
		updateTaskStatus(task.id, checked);
	}

	async function handleDeleteTask() {
		await deleteTask(task.id);
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
						<ButtonIcon
							handling={isUpdatingTask}
							type="submit"
							variant="primary"
							icon={CheckIcon}
						/>
					</div>
				</form>
			) : (
				<div className="my-2 flex items-center gap-4">
					<InputCheckbox
						checked={task?.concluded}
						onChange={handleChangeTaskStatus}
						loading={loading}
					/>
					{!loading ? (
						<Text
							className={cx("flex-1", {
								"line-through": task?.concluded,
							})}
						>
							{task?.title}
						</Text>
					) : (
						<Skeleton className="flex-1 h-6" />
					)}
					<div className="flex gap-1">
						<ButtonIcon
							onClick={handleDeleteTask}
							variant="tertiary"
							icon={TrashIcon}
							loading={loading}
							handling={isDeletingTask}
						/>
						<ButtonIcon
							variant="tertiary"
							icon={PencilIcon}
							onClick={handleEditTask}
							loading={loading}
						/>
					</div>
				</div>
			)}
		</Card>
	);
}

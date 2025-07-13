import React, { useState } from "react";
import Card from "../components/Card";
import InputCheckbox from "../components/InputCheckbox";
import InputText from "../components/InputText";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import Text from "../components/Text";
import ButtonIcon from "../components/ButtonIcon";

export default function TaskItem() {
	const [isEditing, setIsEditing] = useState(false);

	function handleEditTask() {
		setIsEditing(true);
	}

	function handleCancelEditTask() {
		setIsEditing(false);
	}

	return (
		<Card size="md" className="my-2 flex items-center gap-4">
			{isEditing ? (
				<>
					<InputText className="flex-1" />
					<div className="flex gap-1">
						<ButtonIcon
							variant="secondary"
							icon={XIcon}
							onClick={handleCancelEditTask}
						/>
						<ButtonIcon variant="primary" icon={CheckIcon} />
					</div>
				</>
			) : (
				<>
					<InputCheckbox />
					<Text className="flex-1">🛒Fazer compras</Text>
					<div className="flex gap-1">
						<ButtonIcon variant="tertiary" icon={TrashIcon} />
						<ButtonIcon
							variant="tertiary"
							icon={PencilIcon}
							onClick={handleEditTask}
						/>
					</div>
				</>
			)}
		</Card>
	);
}

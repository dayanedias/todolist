import Text from "./components/Text";
import TrashIcon from "./assets/icons/trash.svg?react";
import Icon from "./components/Icon";
import Badge from "./components/Badge";
import Button from "./components/Button";
import ButtonIcon from "./components/ButtonIcon";
import InputText from "./components/InputText";

export default function App() {
	return (
		<div className="grid gap-3">
			<div className="flex flex-col gap-1">
				<Text variant="body-sm-bold" className="text-pink-base">
					Olá mundo
				</Text>
				<Text className="text-green-base">Texto 2</Text>
				<Text variant="body-md-bold" className="text-gray-400">
					Texto 3
				</Text>
				<Button icon={TrashIcon}> Nova Tarefa </Button>
			</div>

			<div className="flex gap-1">
				<Icon svg={TrashIcon} className="fill-pink-base" />
				<Icon svg={TrashIcon} className="fill-pink-base" />
				<Badge variant="primary">5</Badge>
				<Badge variant="secondary">8234</Badge>
			</div>

			<div className="flex gap-1">
				<ButtonIcon icon={TrashIcon} />
				<ButtonIcon variant="secondary" icon={TrashIcon} />
				<ButtonIcon variant="tertiary" icon={TrashIcon} />
			</div>

			<div className="bg-white">
				<InputText />
			</div>
		</div>
	);
}

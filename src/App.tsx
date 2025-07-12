import Text from "./components/Text";
import TrashIcon from "./assets/icons/trash.svg?react";
import Icon from "./components/Icon";

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
			</div>

			<div className="flex gap-1">
				<Icon svg={TrashIcon} className="fill-pink-base" />
				<Icon svg={TrashIcon} className="fill-pink-base" />
			</div>
		</div>
	);
}

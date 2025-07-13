import React from "react";
import Badge from "../components/Badge";
import Button from "../components/Button";
import ButtonIcon from "../components/ButtonIcon";
import Card from "../components/Card";
import Container from "../components/Container";
import Icon from "../components/Icon";
import InputCheckbox from "../components/InputCheckbox";
import InputText from "../components/InputText";
import Skeleton from "../components/Skeleton";
import Text from "../components/Text";
import TrashIcon from "../assets/icons/trash.svg?react";

export default function PageComponents() {
	return (
		<Container>
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
					<Icon svg={TrashIcon} className="fill-pink-base" />
				</div>

				<div className="flex gap-1">
					<Badge variant="primary">5</Badge>
					<Badge variant="secondary">8234</Badge>
					<Badge loading>3 de 8</Badge>
				</div>

				<div className="flex gap-1">
					<InputCheckbox />
					<InputCheckbox loading />
				</div>

				<div className="flex gap-1">
					<ButtonIcon icon={TrashIcon} />
					<ButtonIcon variant="secondary" icon={TrashIcon} />
					<ButtonIcon variant="tertiary" icon={TrashIcon} />
					<ButtonIcon loading icon={TrashIcon} />
				</div>

				<div className="bg-white">
					<InputText />
				</div>
				<div>
					<Card size="md">Oláaaaa </Card>
				</div>
				<div className="space-y-2">
					<Skeleton className="h-6" />
					<Skeleton className="h-6" />
					<Skeleton className="w-96 h-6" />
				</div>
			</div>
		</Container>
	);
}

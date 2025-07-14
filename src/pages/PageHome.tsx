import React from "react";
import Container from "../components/Container";
import TasksSummary from "../core-components/TasksSummary";
import TaskItem from "../core-components/TaskItem";
import TasksList from "../core-components/TasksList";

export default function PageHome() {
	return (
		<Container as="article" className="space-y-3">
			<header className="flex items-center justify-between">
				<TasksSummary />
			</header>
			<TasksList />
		</Container>
	);
}

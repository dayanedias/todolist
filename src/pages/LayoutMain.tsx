import React from "react";
import Container from "../components/Container";
import { NavLink, Outlet } from "react-router";
import Text from "../components/Text";

export default function LayoutMain() {
	return (
		<>
			<Container as="header" className="mt-3 md:mt-20">
				HEADER!!!
			</Container>
			<main className="mt=4 md:mt-8">
				<Outlet />
			</main>
			<footer className="my-5 md:my-10">
				<nav className="flex items-center justify-center gap-4">
					<NavLink to="/">
						<Text variant="body-sm-bold" className="text-gray-300">
							Tarefas
						</Text>
					</NavLink>
					<NavLink to="/components">
						<Text variant="body-sm-bold" className="text-gray-300">
							Components
						</Text>
					</NavLink>
				</nav>
			</footer>
		</>
	);
}

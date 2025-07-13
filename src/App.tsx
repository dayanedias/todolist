import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/PageComponents";
import LayoutMain from "./pages/LayoutMain";
import PageHome from "./pages/PageHome";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutMain />}>
					<Route path="/components" element={<PageComponents />} />
					<Route index element={<PageHome />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

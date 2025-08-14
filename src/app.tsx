// @refresh reload
import "@/app.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { type JSX, Suspense } from "solid-js";

export default function App(): JSX.Element {
	AOS.init();

	return (
		<MetaProvider>
			<Router root={props => <Suspense>{props.children}</Suspense>}>
				<FileRoutes />
			</Router>
		</MetaProvider>
	);
}

import { RouteObject } from "react-router";
import Layout from "../layout";
import Boards from "../pages/Boards";
///////////routeObject من اسمها بيسهل عمليه الstructure
const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				children: [
					{
						path: "",
						element: <Boards />,
					},
				],
			},
		],
	},
];

export default routes;

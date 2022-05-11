import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
const MainPage = lazy(() => import('pages/MainPage'));

const RouteComponent = () => {
	const routes = useRoutes([
		{ path: '/', element: <MainPage /> },
		// {
		// 	path: 'invoices',
		// 	element: <Invoices />,
		// 	// 중첩 라우트의 경우도 Route에서와 같이 children이라는 property를 사용
		// 	children: [
		// 		{ path: ':id', element: <Invoice /> },
		// 		{ path: 'sent', element: <SentInvoices /> },
		// 	],
		// },
		// NotFound 페이지는 다음과 같이 구현할 수 있음
		{
			path: '*',
			element: <MainPage />,
		},
	]);
	return routes;
};

export default RouteComponent;

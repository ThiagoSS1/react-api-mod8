import React from 'react';

const RecadosConfig = {
	settings: {
		layout: {
			config: {
				mode: 'fullwidth',
				scroll: 'content',
				navbar: {
					display: true,
					folded: false,
					position: 'left'
				},
				toolbar: {
					display: true,
					style: 'fixed',
					position: 'below'
				},
				footer: {
					display: false,
					style: 'fixed',
					position: 'below'
				}
			}
		}
	},
	// auth: authRoles.onlyGuest,
	routes: [
		// {
		// 	path: '/cars/:id',
		// 	component: React.lazy(() => import('./show/Car'))
		// },
		// {
		// 	path: '/messages',
		// 	exact: true,
		// 	component: React.lazy(() => import('./list/Messages'))
		// }
	]
};

export default RecadosConfig;
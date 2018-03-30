import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';

// React optimization - code splitting

const componentsRoutes = {
    component: Home,
    path: '/',
    indexRoute: { component: ArtistMain },
    childRoutes: [
        {
            path: 'artists/new',
            getComponent(location, cb) {        //getting child components async. React calling this function automatically
                System.import('./components/artists/ArtistCreate')
                    .then(module => cb(null, module.default))       // cb - callback function
            }
        },
		{
			path: 'artists/:id',
			getComponent(location, cb) {        //getting child components async. React calling this function automatically
				System.import('./components/artists/ArtistDetail')
					.then(module => cb(null, module.default))       // cb - callback function
			}
		},
		{
			path: 'artists/:id/edit',
			getComponent(location, cb) {        //getting child components async. React calling this function automatically
				System.import('./components/artists/ArtistEdit')
					.then(module => cb(null, module.default))       // cb - callback function
			}
		}
    ]
};

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentsRoutes}/>
  );
};

export default Routes;

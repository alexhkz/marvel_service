import {Route, Routes} from "react-router-dom";

import AppBanner from './../appBanner/AppBanner';
import ComicsList from './../comicsList/ComicsList';

const ComicsPage = () => {
	return (
		<>
         <AppBanner/>
			<Routes>
				<Route>
					<Route path="/" element={<ComicsList/>}/>
				</Route>
			</Routes>
      </>
	);
};

export default ComicsPage;
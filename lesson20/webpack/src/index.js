import { PATH, locations } from './shared/locations';
import { links } from './shared/links';
import './style.scss'
window.onload = () => {
	const pathURL = window.location.pathname;
	console.log(pathURL);

	switch (pathURL) {
		case locations.main:
			links();
			break;
		case locations.page1:
			links();
			break;
		case locations.page2:
			links();
			break;
		case locations.page3:
			links();
			break;
		case locations.page4:
			links();
			break;
		default:
			window.locations.href = PATH.main;
			break;
	}
};
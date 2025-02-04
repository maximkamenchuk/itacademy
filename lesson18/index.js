const userName = document.querySelector('#username');
const fullName = document.querySelector('#fullname');
const saveBtn = document.querySelector('#save');
const clearBtn = document.querySelector('#clear');

const userNameInfo = document.querySelector('#last-username');
const userFullNameInfo = document.querySelector('#last-fullname');
const userDateInfo = document.querySelector('#input-date');

saveBtn.onclick = () => {
	const date = new Date();
	const userInfo = {
		id: date.getTime(),
		username: userName.value,
		fullname: fullName.value,
	};
	const arr = [];
	const users = sessionStorage.getItem('users');
	if (users) {
		arr.push(...JSON.parse(users));
	}
	arr.push(userInfo);
	// localStorage.setItem('lastUser', JSON.stringify(userInfo));
	sessionStorage.setItem('users', JSON.stringify(arr));
	console.log(JSON.stringify(userInfo));
	getLastUser();
};

function getLastUser() {
	// const lastUser = localStorage.getItem('lastUser');
	// const lastUser = sessionStorage.getItem('users');
	// if (lastUser) {
	// 	const userInfo = JSON.parse(lastUser);
	// 	userNameInfo.innerText = userInfo.username;
	// 	userFullNameInfo.innerText = userInfo.fullName;
	// 	userDateInfo.innerText = new Date(userInfo.id).toLocaleString();
	// } else {
	// 	userNameInfo.innerText = 'No saved data';
	// 	userFullNameInfo.innerText = 'No saved data';
	// 	userDateInfo.innerText = 'No saved data';
	// }

	const users = sessionStorage.getItem('users');
	if (users) {
		document.querySelector('.last-user').innerHTML = '';
		const arr = JSON.parse(users);
		console.log(arr);

		arr.forEach(user => {
			console.log(user);

			const div = document.createElement('div');
			const p1 = document.createElement('span');
			const p2 = document.createElement('span');
			const p3 = document.createElement('p');

			p1.innerText = user.username + ' ';
			p2.innerText = user.fullname;
			p3.innerText = new Date(user.id).toLocaleString();
			div.append(p1, p2, p3);
			document.querySelector('.last-user').appendChild(div);
		});
	}
}

getLastUser();

clearBtn.onclick = () => {
	sessionStorage.clear();
	document.querySelector('.last-user').innerHTML = '';
};
// clearBtn.onclick = () => localStorage.clear();
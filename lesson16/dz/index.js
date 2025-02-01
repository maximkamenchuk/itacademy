//zadanie 1

// async function fetchUserData() {
// 	try {
// 		const response = await fetch(
// 			'https://jsonplaceholder.typicode.com/users/1'
// 		);
// 		const user = await response.json();
// 		console.log(user);
// 	} catch (error) {
// 		console.error('Error:', error);
// 	}
// }

// fetchUserData();



//zadanie 2
// 	async function postData() {
// 	const data = {
// 		title: 'zagolovok',
// 		body: 'coda',
// 		userId: 1,
// 	};

// 	try {
// 		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
// 			method: 'POST', // Метод запроса
// 			headers: {
// 				'Content-Type': 'application/json', // Указываем тип содержимого
// 			},
// 			body: JSON.stringify(data), // Преобразуем объект в JSON
// 		});

// 		if (!response.ok) {
// 			throw new Error('Network response was not ok');
// 		}

// 		const result = await response.json();
// 		console.log('Success:', result);
// 	} catch (error) {
// 		console.error('Error:', error);
// 	}
// }

// postData();



//zadanie 3 
//method 1 когда пытаемся получить информацию с несуществующего URL
// async function fetchUserData() {
// 	try {
// 		const response = await fetch(
// 			'https://jsonplaceholder.typicode.com/posts/23213123123'
// 		);
// 		const user = await response.json();
// 		console.log(user);
// 	} catch (error) {
// 		console.error(`Error`, error);
// 	}
// }
 
// fetchUserData();


// method 2 когда отправляем свой запрос на несуществующий URL
// 	async function postData() {
// 	const data = {
// 		title: 'zagolovok',
// 		body: 'coda',
// 		userId: 1,
// 	};

// 	try {
// 		const response = await fetch('https://jsonplaceholder.typicode.com/posts/3213122121', {
// 			method: 'POST', // Метод запроса
// 			headers: {
// 				'Content-Type': 'application/json', // Указываем тип содержимого
// 			},
// 			body: JSON.stringify(data), // Преобразуем объект в JSON
// 		});

// 		if (!response.ok) {
// 			throw new Error('Network response was not ok');
// 		}

// 		const result = await response.json();
// 		console.log('Success:', result);
// 	} catch (error) {
// 		console.error('Error:', error);
// 	}
// }

// postData();
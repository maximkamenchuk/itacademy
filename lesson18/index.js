const userName = document.querySelector('#username');
const fullName = document.querySelector('#fullname');
const saveBtn = document.querySelector('#save');

const userNameInfo = document.querySelector('#last-username');
const userFullNameInfo = document.querySelector('#last-fullname');
const userDateInfo = document.querySelector('#input-date');
const clearBtn = document.querySelector('#clear-btn');


saveBtn.onclick = () => {
    const date = new Date()
    const userInfo = {
        id: date.getTime(),
        username: userName.value,
        fullname: fullName.value
    }
    const arr = []
    const users = sessionStorage.getItem('users');
    if (users) {
        arr.push(...JSON.parse(users));
    }
    arr.push(userInfo);
    sessionStorage.setItem('users', JSON.stringify(userInfo))
    



    // console.log(date.toUTCString());
    // console.log(date.toISOString());
    // console.log(date.getTime());
    // localStorage.setItem('lastUser', JSON.stringify(userInfo))



    console.log(userInfo);
    getLastUser();
};

function getLastUser () {
    // const lastUser = localStorage.getItem('lastUser');
    // const lastUser = sessionStorage.getItem('users');
    // if (lastUser) {
    //     const userInfo = JSON.parse(lastUser);
    //     userNameInfo.innerText = userInfo.username;
    //     userFullNameInfo.innerText = userInfo.fullname;
    //     userDateInfo.innerText = new Date(userInfo.id).toLocaleString();
    // } else {
    //     userNameInfo.innerText = 'User Name';
    //     userFullNameInfo.innerText = 'Full Name';
    //     userDateInfo.innerText = 'No saved data';
    // };


    const users = sessionStorage.getItem('users');
    if (users) {
        document.querySelector('.last-user').innerHTML = ''
        const arr = JSON.parse(users);
        console.log(arr);
        
        arr.forEach (user => {
            const div = document.createElement('div');
            const p1 = document.createElement('p');
            const p2 = document.createElement('span');
            const p3 = document.createElement('p');


            p1.innerText = `Username: ${user.username}`;
            p2.innerText = `Full Name: ${user.fullname}`;
            p3.innerText =  `Date: ${new Date(user.id).toLocaleString()}`;
            div.appendChild(p1, p2, p3);
            document.querySelector('.Slast-user').appendChild(div);

        }
        )
    };
}

getLastUser();


clearBtn.onclick = () => {
    sessionStorage.clear();
    document.querySelector('.last-user').innerHTML = '';
}

    
// clearBtn.onclick = () => localStorage.clear();
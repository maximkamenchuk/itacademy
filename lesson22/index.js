const addBtn = document.getElementById("add");
const getBtn = document.getElementById("get");
const putBtn = document.getElementById("put");
const deleteBtn = document.getElementById("delete");

addBtn.onclick = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };

  fetch("https://test-fire-b8bc5-default-rtdb.firebaseio.com/user.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

getBtn.onclick = () => {
  fetch("https://test-fire-b8bc5-default-rtdb.firebaseio.com/user.json")
    .then((response) => response.json())
    .then((data) => {
      const arr = Object.values(data).map((el, i) => {
        return {
          ...el,
          id: Object.keys(data)[i],
        };
      });
      console.log(arr);
    })
    .catch((error) => console.error("Error:", error));
};

putBtn.onclick = () => {
  const userId = "-OJOrqnPw4LrBu1BbE1e";
  const user = {
    firstName: "Jane",
    lastName: "Doe",
    age: 100,
  };

  fetch(
    `https://test-fire-b8bc5-default-rtdb.firebaseio.com/user/${userId}.json`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  )
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

deleteBtn.onclick = () => {
  const userId = "-OJOrr0syx5cV1pTpm_a";
  const user = {
    firstName: "Jane",
    lastName: "Doe",
    age: 100,
  };

  fetch(
    `https://test-fire-b8bc5-default-rtdb.firebaseio.com/user/${userId}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};
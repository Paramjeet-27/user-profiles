export const getUserData = (page = 1) => {
  return fetch(`https://reqres.in/api/users?page=${page}`).then((res) =>
    res.json()
  );
};

export const deleteUser = (data_to_delete) => {
  return fetch(`https://reqres.in/api/users/${data_to_delete}`, {
    method: "DELETE",
  }).then((res) => res.status === 204);
};

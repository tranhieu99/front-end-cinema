const addNewStaff = (user) => {
    return fetch('http://localhost:5555/admin/add-staff', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))

}
const getStaff = () => {
  return fetch("http://localhost:5555/admin/staff-information", {
    method: 'GET',
  }).then((response) => {
    console.log(response)
return response.json()
  }).catch((err) => {
    console.log(err);
  })
}
const  deleteStaff = (user_id) => {
return fetch(`http://localhost:5555/admin/delete-staff/${user_id}`, {
  method: 'DELETE',
}).then((response) => {
  return response.json()
    }).catch((err) => {
      console.log(err);
    })
}

export {
    addNewStaff,
    getStaff,
    deleteStaff
}
const signin = (user) => {
    return fetch('http://localhost:5555/auth/signin', {
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

  const signup = (user) => {
    return fetch('http://localhost:5555/signup', {
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


  export{
      signin,
      signup
  }
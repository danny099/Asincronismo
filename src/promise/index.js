const somethingsWillHappen = () => {
  return new Promise((resolve, reject) =>{
    if (true) {
      resolve('Correct')
    } else {
      reject('error')
    }
  })
}

somethingsWillHappen()
  .then(response => console.log(response))
  .catch(error => console.error(error))

const somethingsWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      setTimeout(() => {
        resolve('True')
      }, 2000)
    } else {
      const error = new Error('error')
      reject(error)
    }
  })
}

somethingsWillHappen2()
  .then(response => console.log(response))
  .catch(error => console.error(error))

Promise.all([somethingsWillHappen(), somethingsWillHappen2()])
  .then(response => {
    console.log('array of results', response)
  })
  .catch(err => {
    console.error(err)
  })

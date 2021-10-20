let isAccountLocked = false
let userRole = 'user'

 if (isAccountLocked) {
   console.log('Account locked')
 } 
 else {
   console.log('Hi Peeps')
 }

  if (isAccountLocked) {
     console.log('Account locked')
  } else if (userRole == 'admin') {
    console.log('Welcome Admin')
  } else {
    console.log('Welcome')
  }

  temp = 105

  if (temp <= 32) {
    console.log("It's freezing")
  } else if (temp >= 100) {
    console.log("It's too hott")
  } else {
    console.log("It's fine")
  }
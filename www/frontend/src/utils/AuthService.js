import decode from 'jwt-decode'

const idToken = 'TRIOGREL_JWT_TOKEN'

export default class AuthService {
  // Initializing important variables
  constructor () {
    this.getProfile = this.getProfile.bind(this)
  }

  isLoggedIn () {
    // Checks if there is a saved token and it's still valid
    // console.log('isloggedin')
    const token = this.getToken() // GEtting token from localstorage
    return !!token && !this.isTokenExpired(token) // handwaiving here
  }

  isTokenExpired (token) {
    try {
      const decoded = decode(token)
      if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
        return true
      } else {
        return false
      }
    } catch (err) {
      return false
    }
  }

  setToken (token) {
    // Saves user token to localStorage
    window.localStorage.setItem(idToken, token)
  }

  getToken () {
    // Retrieves the user token from localStorage
    return window.localStorage.getItem(idToken)
  }

  logout () {
    // Clear user token and profile data from localStorage
    window.localStorage.removeItem(idToken)
  }

  getProfile () {
    // Using jwt-decode npm package to decode the token
    return decode(this.getToken())
  }

  _checkStatus (response) {
    const status = response.meta.response.status
    // raises an error in case response status is not a success
    if (status >= 200 && status < 300) { // Success status lies between 200 to 300
      return response
    } else {
      // var error = new Error(response.statusText)
      // error.response = response
      // throw error
      return false
    }
  }
}

interface HttpRequest {
  body: {
    name?: String,
    email?: String,
    password?: String,
    passwordConfirmation?: String
  }
}

export class SignUpController {

  handle(httpRequest: HttpRequest): any {
    const filds = ['name', 'email', 'password', 'passwordConfirmation']
    let obj

    filds.forEach(key => {
      if(!httpRequest.body[key]) {
        obj =  {
          statusCode: 400,
          body: new Error(`Missing param: ${key}`)
        }

        return obj
      }
    })
    return obj

    // {
    //   statusCode: 400,
    //   body: new Error('Missing param: name')
    // }
  }

}
 
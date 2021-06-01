import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {

  handle(httpRequest: HttpRequest): HttpResponse {
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
 
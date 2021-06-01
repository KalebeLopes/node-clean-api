import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http.helper'

export class SignUpController {

  handle(httpRequest: HttpRequest): HttpResponse {
    const filds = ['name', 'email', 'password', 'passwordConfirmation']
    let obj: HttpResponse
    
    filds.forEach(key => {
      if(!httpRequest.body[key]) {
        return obj = badRequest(new MissingParamError(key))
      }
    })
    return obj
  }

}

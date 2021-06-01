// interface HttpRequest {
//   body: {
//     name?: String,
//     email?: String,
//     password?: String,
//     passwordConfirmation?: String
//   }
// }

export class SignUpController {

  handle(httpRequest: any): any {
    // const filds = ['name', 'email', 'password', 'passwordConfirmation']
    
    // let code = {
    //   statusCode: 200
    // }

    // filds.forEach(key => {
    //   if(httpRequest.body[key] == null) {
    //     return code.statusCode = 400
    //   }
    // })

    return {
      statusCode: 400
    }
  }

}

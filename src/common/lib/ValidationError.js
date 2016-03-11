import {BaseError} from 'make-error'

export default class ValidationError extends BaseError {

  constructor(message, prop) {
    super()
    this.message = message
    this.prop = prop
  }

}

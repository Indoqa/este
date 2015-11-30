import Validation from './lib/validation';
import {format} from './intl/format';

// Localized validation.
export default function validate(state) {

  const intl = state.intl;
  const msg = intl.messages[intl.selectedLanguage];

  class LocalizedValidation extends Validation {

    getRequiredMessage(prop) {
      return format(msg.auth.validation.required, {prop});
    }
  }

  const validate = (object) => new LocalizedValidation(object);

  return validate;
}

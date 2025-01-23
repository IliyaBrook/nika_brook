export interface IContactFormFields {
  name: string
  email: string
  subject: string
  message: string
}

export interface IContactFormErrors {
  nameError?: string
  emailError?: string
  messageError?: string
}

export interface IContactFormStatus {
  errors?: IContactFormErrors
  success?: boolean
}

export interface IContactForm {
  form: IContactFormFields
  status: IContactFormStatus
}




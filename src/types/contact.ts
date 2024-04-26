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

export interface IContactSuccessResponse {
  data: {
    message: string
  }
}

export interface IContactErrorResponse {
  error: {
    status: number
    message: string
  }
}

export type TContactResponse = IContactSuccessResponse | IContactErrorResponse

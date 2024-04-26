import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IContactForm, IContactFormFields } from '@/types/contact'
import { isEmail } from '@/utils/isEmail'

const initialState: IContactForm = {
  form: {
    name: '',
    email: '',
    subject: '',
    message: ''
  },
  status: {
    success: false,
    errors: {
      emailError: undefined,
      messageError: undefined,
      nameError: undefined
    }
  }
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState: initialState,
  reducers: {
    setContactForm: (state, action: PayloadAction<IContactFormFields>) => {
      const payload = action.payload
      if (payload.email) {
        if (isEmail(payload.email)) {
          state.form.email = payload.email
          if (state.status.errors?.emailError) {
            state.status.errors.emailError = undefined
          }
        } else {
          state.status.errors.emailError = 'Invalid email'
        }
      } else {
        state.form.email = ''
        state.status.errors.emailError = 'Email is required'
      }

      if (payload.name) {
        state.form.name = payload.name
        if (state.status.errors?.nameError) {
          state.status.errors.nameError = undefined
        }
      } else {
        state.form.name = ''
        state.status.errors.nameError = 'Name is required'
      }

      if (payload.subject) {
        state.form.subject = payload.subject
      }

      if (payload.message) {
        state.form.message = payload.message
        if (state.status.errors?.messageError) {
          state.status.errors.messageError = undefined
        }
      } else {
        state.form.message = ''
        state.status.errors.messageError = 'Message is required'
      }

      if (
        !state.status.errors?.emailError &&
        !state.status.errors?.nameError &&
        !state.status.errors?.messageError
      ) {
        state.status.errors = undefined
        state.status.success = true
      }
    }
  }
  //  extraReducers: (builder) => {}
})

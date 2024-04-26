import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@/store/store'
import { IContactForm } from '@/types/contact'

const contactState = (state: RootState) => state.contact

export const contactFormSelector = createSelector(
  contactState,
  (contact: IContactForm) => ({
    name: contact.form.name,
    email: contact.form.email,
    subject: contact.form.subject,
    message: contact.form.message,
    emailError: contact.status.errors?.emailError,
    nameError: contact.status.errors?.nameError,
    messageError: contact.status.errors?.messageError,
    success: contact.status.success
  })
)

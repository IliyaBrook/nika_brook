'use client'

import React, { FormEvent, useEffect, useRef } from 'react'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import styles from './contact.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setContactForm } from '@/store/contact'
import { contactFormSelector } from '@/store/contact/selectors'
import classNames from 'classnames'
import { useContactSendEmailMutation } from '@/store/thunks'
import { Toast } from 'primereact/toast'

const ContactForm = () => {
	const {
		name,
		email,
		subject,
		message,
		emailError,
		nameError,
		messageError,
		success
	} = useAppSelector(contactFormSelector)

	const toastRef = useRef(null)
	const formRef = useRef(null)
	const [sendEmailMutation] = useContactSendEmailMutation()

	const dispatch = useAppDispatch()
	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		const formElement = event.target as HTMLFormElement
		const formData: FormData = new FormData(formElement)
		const formProps = Object.fromEntries(formData)
		const name = formProps.name as string
		const email = formProps.email as string
		const subject = formProps.subject as string
		const message = formProps.message as string
		dispatch(setContactForm({ name, email, subject, message }))
	}

	useEffect(() => {
		if (success) {
			sendEmailMutation({ name, email, subject, message }).then(result => {
				if ('data' in result && 'message' in result.data) {
					toastRef.current.show({
						severity: 'success',
						summary: 'Success',
						detail: result.data.message,
						life: 3000
					})
					formRef.current.reset()
				} else {
					if (
						'error' in result &&
						'data' in result.error &&
						typeof result.error.data === 'object' &&
						'message' in result.error.data
					) {
						toastRef.current.show({
							severity: 'error',
							summary: 'Error',
							detail: result.error.data.message,
							life: 3000
						})
					}
				}
			})
		}
	}, [success])

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit} className="p-fluid" ref={formRef}>
				<div className={styles.formField}>
					<label htmlFor="name">Your Name</label>
					<InputText
						className={classNames({ [styles.invalid]: nameError })}
						id="name"
						name="name"
					/>
				</div>
				<div className={styles.formField}>
					<label htmlFor="email">Email Address</label>
					<InputText
						id="email"
						name="email"
						className={classNames({ [styles.invalid]: emailError })}
					/>
				</div>
				<div className={styles.formField}>
					<label htmlFor="subject">Subject</label>
					<InputText id="subject" name="subject" />
				</div>
				<div className={classNames(styles.formField, styles.textarea)}>
					<label htmlFor="message">Message</label>
					<InputTextarea
						id="message"
						name="message"
						className={classNames({ [styles.invalid]: messageError })}
						rows={3}
					/>
				</div>
				<div className={styles.errorsWrapper}>
					<p className="p-error">
						{[emailError, nameError, messageError].filter(Boolean).join(', ')}
					</p>
				</div>
				<Button label="Send Message" className={styles.button} type="submit" />
			</form>
			<Toast ref={toastRef} position="bottom-center" />
		</div>
	)
}

export default ContactForm

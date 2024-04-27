'use client'
import { InputText } from 'primereact/inputtext'
import styles from './authForm.module.scss'
import { Divider } from 'primereact/divider'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import React, { useLayoutEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setAuthForm } from '@/store/authForm'
import classNames from 'classnames'
import { Toast } from 'primereact/toast'
import { signIn, useSession } from 'next-auth/react'
import { setUser } from '@/store/user'
import { useRouter } from 'next/navigation'

export const AuthForm = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { data: session } = useSession()
  const { isError } = useAppSelector((state) => state.authForm)
  const toast = useRef(null)

  const showSuccess = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Success',
      detail: 'You are logged in',
      life: 3000
    })
  }

  const showError = () => {
    toast.current.show({
      severity: 'error',
      summary: 'Error',
      detail: 'Check your username or password',
      life: 3000
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as HTMLFormElement
    const formData = {
      username: (target.elements.namedItem('username') as HTMLInputElement)
        .value,
      password: (target.elements.namedItem('password') as HTMLInputElement)
        .value
    }
    dispatch(setAuthForm(formData))
    const { username, password } = formData

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password
    })
    if (result.error) {
      showError()
    } else {
      showSuccess()
      setTimeout(() => {
        router.push('/')
      }, 3000)
    }
  }

  useLayoutEffect(() => {
    if (session?.user) {
      dispatch(
        setUser({
          username: session?.user?.name,
          email_verified: session?.user.email,
          isAdmin: session?.user?.isAdmin
        })
      )
    }
  }, [dispatch, session?.user])

  return (
    <div className={styles.root}>
      <Card title="Sign in" className={styles.card}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.userNameField}>
            <label htmlFor="username" className="p-sr-only">
              username
            </label>
            <InputText
              id="username"
              name="username"
              placeholder="Username"
              className={classNames({
                'p-invalid': isError
              })}
            />
          </div>
          <div className={styles.passwordField}>
            <label htmlFor="password" className="p-sr-only">
              Password
            </label>
            <InputText
              id="password"
              name="password"
              placeholder="Password"
              className={classNames({
                'p-invalid': isError
              })}
            />
          </div>
          <Divider
            className={classNames({
              [styles.dividerHide]: !isError
            })}
          />

          <div className={styles.submitWrapper}>
            <Button label="Submit" type="submit" />
          </div>
        </form>
      </Card>
      <Toast ref={toast} position="bottom-center" />
    </div>
  )
}

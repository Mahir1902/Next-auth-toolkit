'use client'

import React, { useState } from 'react'
import CardWrapper from './card-wrapper'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import { Form, FormField, FormLabel, FormItem, FormControl, FormMessage } from '../ui/form'
import { LoginSchema } from '@/schemas'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import FormError from '../form-error'
import FormSuccess from '../form-success'
import { login } from '@/actions/login'
import { useTransition } from 'react'

// Refer to shadcn docs for information on form validation using react-hook-form

type Props = {}

export function LoginForm({}: Props) {


    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{
            email: '',
            password: ''
        }
    }) 

    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')

    const handleSubmit = (values: z.infer<typeof LoginSchema> ) => {

        setError('')
        setSuccess('')

        // Use transition is usefull if using next cache or revalidations etc
        startTransition(() => {
            login(values)
            //Lets us use data returned from the server action
            .then((data) =>{
                setError(data?.error)
                setSuccess(data?.success)
            })
        })
        
    }

    


  return (
    <CardWrapper 
    headerLabel='Welcome Back'
    backButtonHref='/auth/register'
    backButtonLabel="Dont't have an account?"
    showSocial
    >
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6'>
                <div className='space-y-4'>
                    <FormField
                        control={form.control}
                        name= 'email'
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder='john.doe@example.com' {...field} type='email' disabled={isPending}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    >
                    </FormField>
                    <FormField
                        control={form.control}
                        name= 'password'
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} type='password' placeholder='******' disabled={isPending}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    >
                    </FormField>
                </div>
                <FormError message={error}/>
                <FormSuccess message={success}/>
                <Button
                    typeof='submit'
                    className='w-full'
                >
                    Login
                </Button>
            </form>
        </Form>
    </CardWrapper>
  )
}
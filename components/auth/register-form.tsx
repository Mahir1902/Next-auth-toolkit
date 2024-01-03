'use client'

import React, { useState } from 'react'
import CardWrapper from './card-wrapper'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import { Form, FormField, FormLabel, FormItem, FormControl, FormMessage } from '../ui/form'
import { RegisterSchema } from '@/schemas'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import FormError from '../form-error'
import FormSuccess from '../form-success'

import { useTransition } from 'react'
import { register } from '@/actions/register'

// Refer to shadcn docs for information on form validation using react-hook-form

type Props = {}

export function RegisterForm({}: Props) {


    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues:{
            email: '',
            password: '',
            name:''
        }
    }) 

    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')

    const handleSubmit = (values: z.infer<typeof RegisterSchema> ) => {

        setError('')
        setSuccess('')

        // Use transition is usefull if using next cache or revalidations etc
        startTransition(() => {
            register(values)
            //Lets us use data returned from the server action
            .then((data) =>{
                setError(data?.error)
                setSuccess(data?.success)
            })
        })
        
    }

    


  return (
    <CardWrapper 
    headerLabel='Create an account'
    backButtonHref='/auth/login'
    backButtonLabel="Already have an account?"
    showSocial
    >
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6'>
                <div className='space-y-4'>
                    <FormField
                        control={form.control}
                        name= 'name'
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder='John Doe' {...field} type='text' disabled={isPending}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    >
                    </FormField>

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
                    Register
                </Button>
            </form>
        </Form>
    </CardWrapper>
  )
}
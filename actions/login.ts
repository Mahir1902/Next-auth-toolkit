'use server'
import { LoginSchema } from '@/schemas';
import z from 'zod'

export const login = async (values: z.infer<typeof LoginSchema>) => {
    
    const validatedFields = LoginSchema.safeParse(values) // Returns boolean based on validated inputs

    if(!validatedFields) {
        return {error: 'Invalid Fields'}
    }
    
    return {
        success: 'Email Sent!'
    }
}
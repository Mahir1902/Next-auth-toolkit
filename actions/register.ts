'use server'
import {  RegisterSchema } from '@/schemas';
import z from 'zod'

import bcrypt from 'bcrypt'

import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/users';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    
    const validatedFields = RegisterSchema.safeParse(values) // Returns a objet with success and data fields
    if(!validatedFields.success) {
        return {error: 'Invalid Fields'}
    }

    // Get all the fields the user input from validataedFields.data
    const { email, password, name } = validatedFields.data

    //Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Check if the emai already exists
    const existingUser = await getUserByEmail(email)

    if(existingUser) {
        return {error: 'Email already exists'}
    }

    // Once check is done create the user
    await db.user.create({
        data: {
            email,
            name,
            password: hashedPassword
        }
    })
    
    

    //TODO: Send verification token email

    return {
        success: 'User Created!'
    }
}
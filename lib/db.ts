import {  PrismaClient } from "@prisma/client";


/*
Due to hot reload in Nextjs we need to set the prisma client to global this so that
 It is not instanciated more than once 
 
 */

declare global {
    var prisma : PrismaClient | undefined
}


export const db = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== 'production') globalThis.prisma = db
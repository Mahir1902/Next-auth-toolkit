import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from 'next-auth/providers/google'

/* 
    This is the new config for the new version of next auth.
    Refer to the docs for more info:https://authjs.dev/guides/upgrade-to-v5
*/ 

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [GitHub, Google],
})



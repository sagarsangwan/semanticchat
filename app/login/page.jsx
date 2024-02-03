import React from 'react'
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { UserAuthForm } from '@/components/user-auth-form'
import { Button, buttonVariants } from '@/components/ui/button'
export const metadata = {
    title: "login",
    description: "Authentication forms built using the components.",
}


function page() {
    return (

        <div className=' flex justify-between h-screen ' >
            <div className='w-1/2 my-auto justify-center hidden lg:block'>
                <img src="/tryit.png" alt="" className='w-auto h-auto' />
            </div>
            <div className=' justify-center items-center flex w-full lg:w-1/2 '>

                <UserAuthForm />


            </div>

        </div>

    )
}

export default page




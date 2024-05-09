"use client"
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { useAuthContext } from '@/context/AuthContext'
import { FaGoogle } from "react-icons/fa";
function GoogleLoginButton() {
    const { login } = useAuthContext();
    return (
        <Button  > <Link onClick={() => login()} href={"#"} >Sign in with <span className="ms-2 flex  my-auto items-center"> <FaGoogle /> </span> </Link></Button>

    )
}

export default GoogleLoginButton

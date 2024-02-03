"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { FaGoogle } from "react-icons/fa";

// interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm() {
    // const [isLoading, setIsLoading] = React.useState([])

    // async function onSubmit(event) {
    //     event.preventDefault()
    //     setIsLoading(true)

    //     setTimeout(() => {
    //         setIsLoading(false)
    //     }, 3000)
    // }

    return (
        <div>
            <form className=" h-full ">
                <div>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        The People of the Kingdom
                    </h2>
                    <p className="justify-center flex ">Enter your email address and password.</p>
                </div>
                <div className="mt-4 flex flex-col">
                    <label className="" for={"email"}>Enter Your Email</label>
                    <Input type={"email"} className={""}></Input>
                    <label for={"password"}>Enter Your Password</label>

                    <Input type={"password"} className={" mb-5"}></Input>

                    <Button >Sign in with Email</Button>
                </div>
            </form>
            <div className="justify-center flex flex-col mt-4">
                <p className="text-xl font-semibold mb-5 ">Or Continue with</p>
                <Button >Sign in with <span className="ms-2 flex my-auto items-center"> <FaGoogle /> </span></Button>

            </div>
        </div>
    )
}
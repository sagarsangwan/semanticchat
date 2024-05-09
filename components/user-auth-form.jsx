// "use client"

import * as React from "react"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useAuthContext } from "@/context/AuthContext"
import GoogleLoginButton from "./GoogleLoginButton"



export function UserAuthForm() {


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
                    <Label className="" htmlFor={"email"}>Enter Your Email</Label>
                    <Input type={"email"} className={""}></Input>
                    <Label htmlFor={"password"}>Enter Your Password</Label>

                    <Input type={"password"} className={" mb-5"}></Input>

                    <Button >Sign in with Email</Button>
                </div>
            </form>
            <div className="justify-center flex flex-col mt-4">
                <p className="text-xl font-semibold mb-5 ">Or Continue with</p>
                <GoogleLoginButton />
            </div>
        </div>
    )
}

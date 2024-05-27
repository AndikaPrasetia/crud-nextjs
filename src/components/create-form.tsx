/** Create Form */

'use client'

import { saveContact } from "@/lib/actions"
import { useFormState } from "react-dom"
import { SubmitButton } from "./button"

export const CreateForm = () => {
    const [state, formAction] = useFormState(saveContact, null)

  return (
    <div>
        <form action={formAction}>
            <div className="mb-5">
                <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-grey-900"
                >
                    Full Name
                </label>

                {/* name input  */}
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="bg-gray-50 border border-gray-300 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Full Name..." 
                />
                {/* error message from 'name' input */}
                <div id="name-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-400">{state?.Error?.name}</p>
                </div>
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium text-grey-900"
                >
                    Phone Number
                </label>

                {/* phone input */}
                <input 
                    type="text" 
                    name="phone" 
                    id="phone" 
                    className="bg-gray-50 border border-gray-300 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Phone Number..." 
                />
                {/* error message from 'phone' input */}
                <div id="phone-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-400">{state?.Error?.phone}</p>
                </div>
            </div>
            <div id="message-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-400">{state?.message}</p>
            </div>

            {/* submit button with loading indicator */}
            <SubmitButton label="save" />
        </form>
    </div>
  )
}

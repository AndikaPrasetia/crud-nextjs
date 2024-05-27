/** Edit form */

'use client'

import { saveContact } from "@/lib/actions"
import { useFormState } from "react-dom"
import { SubmitButton } from "./button"
import type { Contact } from "@prisma/client"

export const UpdateForm = ({contact}: {contact: Contact}) => {
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
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="bg-gray-50 border border-gray-300 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Full Name..." 
                    defaultValue={contact.name}
                />
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
                <input 
                    type="text" 
                    name="phone" 
                    id="phone" 
                    className="bg-gray-50 border border-gray-300 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Phone Number..." 
                    defaultValue={contact.phone}
                />
                <div id="phone-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-400">{state?.Error?.phone}</p>
                </div>
            </div>
            <div id="message-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-400">{state?.message}</p>
            </div>
            <SubmitButton label="update" />
        </form>
    </div>
  )
}
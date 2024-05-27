/** 4. Button component */
'use client'

import Link from "next/link"
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5"
import { useFormStatus } from "react-dom"
import clsx from "clsx"

// export this to /contacts/page.tsx
export const CreateButton = () => {
    return (
        <Link 
            href="/contacts/create" 
            className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm
            text-sm"
        >
            <IoAddSharp size={20} /> {/* react `add` ionic icon */}
            Create
        </Link>
    )
}

export const EditButton = ({id} : {id:string}) => {
    return (
        <Link 
            href={`/contacts/edit/${id}`}
            className="rounded-sm border p-1 hover:bg-grey-100"
        >
            <IoPencil size={20} /> {/* react `Pencil` ionic icon */}
        </Link>
    )
}

export const DeleteButton = () => {
    return (
        <button 
            className="rounded-sm border p-1 hover:bg-grey-100"
        >
            <IoTrashOutline size={20} /> {/* react `Trash` ionic icon */}
        </button>
    )
}

// submit button for loading indicator
export const SubmitButton = ({label}: {label:string}) => {
    const {pending} = useFormStatus()

    const className = clsx("text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
        {
            "opacity-50 cursor-progress" : pending
        }
    )

    return (
        <button 
            type="submit" 
            className={className}
            disabled={pending}
        >
            {label === "save"? (
                <span>{pending ? "Saving..." : "Save"}</span>
            ) : (
                <span>{pending ? "Updating..." : "Update"}</span>
            )}
        </button>
    )
} 
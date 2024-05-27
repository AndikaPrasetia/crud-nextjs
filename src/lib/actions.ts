'use server';

import {z} from "zod";
import {prisma} from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// schema to validate data
const ContactSchema = z.object({
    name: z.string().min(6),
    phone: z.string().min(11),
})

export const saveContact = async (prevState: any, formData: FormData) => {
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));
    // validate the data
    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.contact.create({
            data:{
                name: validatedFields.data.name,
                phone: validatedFields.data.phone,
            }
        })
    } catch (error) {
        return {
            message: "Failed to create contact"
        }
    }
    // revalidate cache to path /contacts
    revalidatePath("/contacts")
    redirect("/contacts")
}
/** 2. Contact Table */

/** 8. Patch the data to react components */

import { getContacts } from '@/lib/data'

// export this to /contacts/page.tsx
export const ContactTable = async () => {
    const contacts = await getContacts();
  return (
    <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-sm text-gray-600 uppercase bg-gray-100">
            <tr>
                {/* columns */}
                <th className="py-3 px-6">#</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Phone Number</th>
                <th className="py-3 px-6">Created At</th>
                <th className="py-3 px-6 text-center">Actions</th>
            </tr>
        </thead>
        <tbody>
            {/* get contacts data */}
            {contacts.map((contact, index) => (
            // eslint-disable-next-line react/jsx-key
            <tr key={contact.id} className="bg-white border-b">
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{contact.name}</td>
                <td className="py-3 px-6">{contact.phone}</td>
                <td className="py-3 px-6">{contact.createdAt.toString()}</td>
                <td></td>
            </tr>
            ))}
            
        </tbody>
    </table>
  )
}

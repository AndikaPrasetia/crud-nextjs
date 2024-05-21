/** 2. Contact Table */

import React from 'react'

// export this to /contacts/page.tsx
export const ContactTable = () => {
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
            <tr>
                <td className="py-3 px-6"></td>
                <td className="py-3 px-6"></td>
                <td className="py-3 px-6"></td>
                <td className="py-3 px-6"></td>
                <td className="py-3 px-6"></td>
            </tr>
        </tbody>
    </table>
  )
}

import React from 'react'

export default function TodoItem() {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            1
        </th>
        <td className="px-6 py-4">
            청소하기
        </td>
        <td className="px-6 py-4">
            깨끗하게 할게요
        </td>
        <td className="px-6 py-4">
            진행중
        </td>
        <td className="px-6 py-4 flex gap-1">
            <button
                className='py-1 px-2 bg-red-500 hover:bg-red-300 text-white'>삭제</button>
            <button
                className='py-1 px-2 bg-green-500 hover:bg-green-300 text-white'>완료</button>
        </td>
    </tr>
  )
}

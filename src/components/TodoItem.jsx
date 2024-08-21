import React from 'react'

export default function TodoItem(
    {key, id, mongoId, title, description, isCompleted, 
        onDeleteHandler, onCompleteHandler}) {

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {id}
        </th>
        <td className="px-6 py-4">
            {title}
        </td>
        <td className="px-6 py-4">
            {description}
        </td>
        <td className="px-6 py-4">
            {isCompleted ? '완료' : '진행중'}
        </td>
        <td className="px-6 py-4 flex gap-1">
            <button
                onClick={() => onDeleteHandler(mongoId)}
                className='py-1 px-2 bg-red-500 hover:bg-red-300 text-white'>삭제</button>
            <button
                onClick={() => onCompleteHandler(mongoId)}
                className='py-1 px-2 bg-green-500 hover:bg-green-300 text-white'>완료</button>
        </td>
    </tr>
  )
}

import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((res) => {
      setComments(res)
      console.log(res)
    })
  }, [])

  return (
    <>
      {comments.length > 0 && (
        <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
          <h3 className="mb-8 border-b  border-orange-500 pb-4 text-xl font-semibold">
            comments:
            <span className="mx-4 rounded-sm bg-orange-500 px-2 text-zinc-100">
              {comments.length}
            </span>
          </h3>
          {comments.map((com) => (
            <div
              key={com.createdAt}
              className="mb-8 border-b border-gray-200 pb-4"
            >
              <p className="mb-4 ">
                <span className="font-semibold">{com.name}</span> on{' '}
                {moment(com.createdAt).format('MMM DD YYYY')}
              </p>
              <p className="white-space-pre-line w-full text-gray-600">
                {parse(com.body)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments

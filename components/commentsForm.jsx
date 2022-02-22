import React, { useState, useEffect, useRef } from 'react'
import { submitComment } from '../services'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
  }, [])

  const handleCommentSubmission = () => {
    setError(false)

    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    }

    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true)
      setTimeout(() => setShowSuccessMessage(false), 3000)
    })
  }

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        Reply to this post
      </h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          className="w-full rounded-lg border-2 border-blue-300 bg-gray-200 p-4 text-gray-700 outline-none  focus:ring-2 focus:ring-gray-200"
          ref={commentEl}
          name="comment"
          id=""
          cols="30"
          rows="10"
          placeholder="Comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          ref={nameEl}
          name="name"
          placeholder="Name"
          required
          className="w-full rounded-lg border-2 border-blue-300 bg-gray-200  py-2 px-4 text-gray-700 outline-none  focus:ring-2 focus:ring-gray-200"
        />{' '}
        <input
          type="text"
          ref={emailEl}
          name="email"
          placeholder="Email"
          required
          className="w-full rounded-lg border-2 border-blue-300 bg-gray-200 py-2 px-4 text-gray-700 outline-none  focus:ring-2 focus:ring-gray-200"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <div>
          <input
            ref={storeDataEl}
            id="storeData"
            type="checkbox"
            name="storeData"
            value={true}
          />
          <label
            htmlFor="storeData"
            className="ml-3 cursor-pointer text-gray-500"
          >
            Save my e-mail and name for the next time I comment.
          </label>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        {error && (
          <p className="w-fit rounded-md bg-gray-800 p-2 text-sm text-red-400">
            All fields are required
          </p>
        )}
        <div className="mt-8">
          <button
            onClick={handleCommentSubmission}
            className="ease inline-block cursor-pointer rounded-lg bg-sky-600 px-8 py-3 text-lg text-white transition duration-300 hover:bg-blue-800"
          >
            Post Comment
          </button>
          {showSuccessMessage && (
            <span className="float-right mt-3 text-xl font-semibold text-green-500">
              Comment submitted for review
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default CommentsForm

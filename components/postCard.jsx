import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  const { featuredImage, title, slug, author, createdAt, excerpt } = post.node

  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          src={featuredImage.url}
          alt={title}
          className="absolute h-80 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <h1 className="m-auto mb-8 block w-fit cursor-pointer text-center text-3xl font-semibold transition duration-300 hover:text-blue-700">
        <Link href={'/post/' + slug}>{title}</Link>
      </h1>
      <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
        <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <img
            height="30px"
            width="30px"
            className="rounded-full align-middle"
            src={author.photo.url}
            alt={author.name}
          />

          <p className="ml-2 inline align-middle text-lg text-gray-700">
            {author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <span>{moment(createdAt).format('MMM DD YYYY')}</span>
        </div>
      </div>
      <p className="mb-8 px-4 text-center text-gray-800 lg:px-20">{excerpt}</p>
      <div className="text-center">
        <Link href={`/post/${slug}`}>
          <span className="inline-block cursor-pointer rounded-xl bg-blue-800 px-8 py-3 font-semibold text-zinc-100 transition duration-150 hover:-translate-y-1 hover:rounded-2xl hover:bg-blue-600">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard

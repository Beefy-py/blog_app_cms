import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

const FeaturedPostCard = ({ post }) => {
  const { featuredImage, createdAt, title, author, slug } = post

  return (
    <div className="relative mx-2 h-72">
      <div
        className="absolute inline-block h-72 w-full rounded-lg bg-cover bg-center bg-no-repeat shadow-md"
        style={{ backgroundImage: `url('${featuredImage.url}')` }}
      />
      <div className="absolute h-72 w-full rounded-lg bg-gradient-to-b from-gray-400 via-gray-700 to-black bg-center opacity-50" />
      <div className="absolute flex h-full w-full flex-col items-center justify-center rounded-lg p-4">
        <p className="text-shadow mb-4 text-xs font-semibold text-white">
          {moment(createdAt).format('MMM DD, YYYY')}
        </p>
        <p className="text-shadow mb-4 text-center text-2xl font-semibold text-white">
          {title}
        </p>
        <div className="absolute bottom-5 flex w-full items-center justify-center">
          <Image
            unoptimized
            alt={author.name}
            height="30px"
            width="30px"
            className="rounded-full align-middle drop-shadow-lg"
            src={author.photo.url}
          />
          <p className="text-shadow ml-2 inline align-middle font-medium text-white">
            {author.name}
          </p>
        </div>
      </div>
      <Link href={`/post/${slug}`}>
        <span className="absolute h-full w-full cursor-pointer" />
      </Link>
    </div>
  )
}

export default FeaturedPostCard

import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="relative mt-20 mb-8 rounded-lg bg-black bg-opacity-30 p-12 text-center">
      <div className="absolute left-0 right-0 -top-10">
        {' '}
        <Image
          src={author.photo.url}
          alt={author.name}
          width="80px"
          height="80px"
          className="rounded-lg align-middle"
          unoptimized
        />
      </div>
      <h3 className="my-4 text-xl font-bold text-white">{author.name}</h3>
      <p className="text-lg text-white">{author.bio}</p>
    </div>
  )
}

export default Author

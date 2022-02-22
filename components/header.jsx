import React from 'react'

import Link from 'next/link'

const categories = [
  { name: 'Posts', slug: 'posts' },
  { name: 'About', slug: 'about' },
]

const Header = () => {
  return (
    <div className="px container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-200 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">
              CMS Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link href={`/content/${category.slug}`} key={category.slug}>
              <span className="mt-2 ml-4 cursor-pointer rounded-md bg-blue-900 px-4 py-1 align-middle font-semibold text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import moment from 'moment'

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <i key={index}>{text}</i>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }

      if (obj.code) {
        modifiedText = <code key={index}>{text}</code>
      }

      if (obj.italic && obj.bold) {
        modifiedText = (
          <strong>
            <em>{text}</em>
          </strong>
        )
      }

      if (obj.underline && obj.bold) {
        modifiedText = (
          <u>
            <b>{text}</b>
          </u>
        )
      }

      if (obj.underline && obj.italic) {
        modifiedText = (
          <u>
            <i>{text}</i>
          </u>
        )
      }

      if (obj.italic && obj.bold && obj.underline) {
        modifiedText = (
          <strong>
            <u>
              <em>{text}</em>
            </u>
          </strong>
        )
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'heading-four':
        return (
          <h4 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )

      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )

      case 'block-quote':
        return <blockquote>haha idk</blockquote>

      case 'bulleted-list':
        return (
          <ul className="mb-4 -mt-4 list-inside list-disc">
            {obj.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemIndex) => {
                getContentFragment(itemIndex, item.text, item)
              })

              return getContentFragment(index, children, typeObj, typeObj.type)
            })}
          </ul>
        )

      case 'numbered-list':
        return (
          <ol className="mb-4 -mt-4 list-inside list-decimal">
            {obj.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemIndex) => {
                console.log(item.children[0].text)
                getContentFragment(itemIndex, item.text, item)
              })

              return getContentFragment(index, children, typeObj, typeObj.type)
            })}
          </ol>
        )

      case 'list-item':
        console.log('object!', obj)
        return <li>{obj.children[0].children[0].text}</li>

      default:
        return modifiedText
    }
  }

  return (
    <div className="mb-8 rounded-lg bg-white pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="h-full w-full rounded-t-lg object-top"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="mb-8 flex w-full items-center">
          <div className="mb-4 mr-8 flex w-full lg:mb-0 lg:w-auto">
            <img
              height="30px"
              width="30px"
              className="rounded-full align-middle"
              src={post.author.photo.url}
              alt={post.author.name}
            />

            <p className="ml-2 inline align-middle text-lg text-gray-700">
              {post.author.name}
            </p>
          </div>
          <div className="w-full text-right font-medium text-gray-700">
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
            <span>{moment(post.createdAt).format('MMM DD YYYY')}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          )

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}

export default PostDetail

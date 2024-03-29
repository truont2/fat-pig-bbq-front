import Markdown from "react-markdown"
import classNames from "classnames"
import { MdClose } from "react-icons/md"

const NotificationBanner = ({ data: { text, type, status }, closeSelf }) => {
  return (
    <>
    {status ? <div
      className={classNames(
        // Common classes
        "text-white px-2 py-2",
        {
          // Apply theme based on notification type
          "bg-slate-400": type === "info",
          "bg-orange-600": type === "warning",
          "bg-red-600": type === "alert",
        }
      )}
    >
      <div className="container flex flex-row justify-center items-center mx-auto">
        <div className="rich-text-banner flex-1">
          <Markdown>{text}</Markdown>
        </div>
        <button onClick={closeSelf} className="px-1 py-1 flex-shrink-0">
          <MdClose className="h-6 w-auto" color="#fff" />
        </button>
      </div>
    </div>
  : ""}
    </>
  )
}

export default NotificationBanner

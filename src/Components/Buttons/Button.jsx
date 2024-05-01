import Link from "next/link"

function Button({ children, href, ...props }) {
  return (
    <Link href={href} {...props} className="text-bg rounded-2xl font-semibold bg-[#F8F6E3] sm:px-5 sm:py-3 px-2 py-1 flex items-center gap-x-1 flex-shrink-0 text-base xl:text-h6 2xl:text-h5">
        <span>{children}</span>
    </Link>
  )
}

export default Button

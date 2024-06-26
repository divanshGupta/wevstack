"use client"

import { CopyToClipboard } from "react-copy-to-clipboard"
import { useState } from "react"

function Clipboard() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }

  return (
    <CopyToClipboard text="divyanshg556@gmail.com" onCopy={handleCopy}>
        <span className="leading-tight text-light-gray font-normal cursor-pointer hover:underline">
            {copied ? "Copied to clipboard!" : "divyanshg556@gmail.com"}
        </span>
    </CopyToClipboard>
  )
}

export default Clipboard

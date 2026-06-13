"use client"

import { QRCodeSVG } from "qrcode.react"
import { company } from "@/lib/site"

/* vCard content used for the QR + download */
export function buildVCard() {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:Labs;NextGen;;;`,
    `FN:NextGen Labs`,
    `ORG:NextGen Labs`,
    `TITLE:Technology Startup`,
    `TEL;TYPE=WORK,VOICE:${company.phoneRaw}`,
    `EMAIL;TYPE=WORK:${company.email}`,
    `URL:${company.website}`,
    `ADR;TYPE=WORK:;;${company.address};;;;`,
    `X-SOCIALPROFILE;TYPE=linkedin:${company.social.linkedin}`,
    `X-SOCIALPROFILE;TYPE=github:${company.social.github}`,
    "END:VCARD",
  ].join("\n")
}

export function downloadVCard() {
  const blob = new Blob([buildVCard()], { type: "text/vcard;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "nextgen-labs.vcf"
  a.click()
  URL.revokeObjectURL(url)
}

export function BrandQR({ size = 160, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`inline-flex rounded-2xl bg-white p-3 ring-1 ring-border ${className}`}>
      <QRCodeSVG
        value={`${company.website}/contact`}
        size={size}
        bgColor="#ffffff"
        fgColor="#031b4e"
        level="M"
        marginSize={0}
      />
    </div>
  )
}

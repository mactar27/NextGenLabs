import Image from "next/image"
import Link from "next/link"

export function Logo({ className = "", showText = false }: { className?: string; showText?: boolean }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`} aria-label="NextGen Labs home">
      <Image
        src="/images/nextgen-labs-logo.png"
        alt="NextGen Labs logo"
        width={300}
        height={300}
        className="h-16 sm:h-20 w-auto object-contain dark:brightness-0 dark:invert"
        priority
      />
      {showText && (
        <span className="text-lg font-semibold tracking-tight text-foreground">
          NextGen <span className="text-cyan">Labs</span>
        </span>
      )}
    </Link>
  )
}

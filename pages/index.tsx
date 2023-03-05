import Link from 'next/link'

export default function IndexPage() {
  return (
    <>
    <div>
      Hello World. <Link href="/about">About</Link>
    </div>
    <div>
      click directory day  <Link href="/day/index">About</Link>
    </div>
    </>
  )
}

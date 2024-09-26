import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <ul>
    <Link href="/home"> <li>Home</li></Link>
    <Link href="/about"> <li>About Us</li></Link>
    <Link href="/career"> <li>Career</li></Link>
    <Link href="/contact"> <li>Contact</li></Link>
    <Link href="/projects"> <li>Project</li></Link>
 </ul>
 </>
  )
}

export default page

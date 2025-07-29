"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import classes from "./HeaderLink.module.css"

const HeaderLink = ({ href, children }) => {
    const path = usePathname();// this gives path after the main domain

  return (
      <Link
          href={href}
          className={path.startsWith(href) ? `${classes.link} ${classes.active}` : `${classes.link}`}
      >
          {children}
      </Link>
  )
}

export default HeaderLink;

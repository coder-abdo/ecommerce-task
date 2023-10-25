"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between bg-black px-5 py-4 items-center">
      <h1 className="text-yellow-500 text-2xl uppercase">shop</h1>
      <ul className="text-yellow-500 flex items-center gap-5">
        <li>
          <Link href={"/categories/mens"}>Men&apos;s Clothes</Link>
        </li>
        <li>
          <Link href={"/categories/womens"}>Women&apos;s Clothes</Link>
        </li>
        <li>
          <Link href={"/categories/jewelery"}>jewelery</Link>
        </li>
        <li>
          <Link href={"/categories/electronics"}>electronics</Link>
        </li>
      </ul>
    </nav>
  );
};

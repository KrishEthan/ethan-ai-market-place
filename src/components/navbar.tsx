import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/icons/logo.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 mt-4 rounded-full border-2 border-gray-200 bg-white sticky top-4">
      <div className="flex items-center">
        <Image src={Logo} alt="Company Logo" width={120} height={120} />
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}
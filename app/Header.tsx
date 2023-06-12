import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <nav className="flex mb-2 space-x-4">
      <Link href="/" className="px-4 py-2 bg-blue-200 rounded">
        Home
      </Link>
      <Link href="/quote" className="px-4 py-2 bg-red-200 rounded">
        Quote
      </Link>
      <Link href="/spanish" className="px-4 py-2 rounded bg-cyan-200">
        Spanish
      </Link>
    </nav>
  );
}

export default Header;

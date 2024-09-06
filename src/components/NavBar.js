// components/Navbar.js
import Link from 'next/link';

export function Navbar() {
  return (
    <ul>
        <Link href="/">Logo </Link>
        <Link href="/events">events </Link>
        <Link href="/reservations">reservations </Link>
        <Link href="/contact">contact us </Link>
    </ul>
    
        
        
  );
};


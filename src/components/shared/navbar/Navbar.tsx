import Link from 'next/link';
import { FaPhone, FaSearch } from 'react-icons/fa'; // Using react-icons for the phone and search icons

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Tours', href: '/tours' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Pages', href: '/pages' },
  { label: 'News', href: '/news' },
  { label: 'Contact Us', href: '/contact' },
];

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <a href="mailto:Info@Example.Com" className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline-block mr-1">
                <path d="M3 4a2 2 0 00-2 2v1.161A5 5 0 019.485 15H11a2 2 0 002-2v-1a2 2 0 00-2-2H9.5a4 4 0 00-4-4V6a2 2 0 002-2h10a2 2 0 002 2v1.161A5 5 0 0110.515 15H9a2 2 0 00-2 2v1a2 2 0 002 2h2.015a5 5 0 006.485-5V6a2 2 0 00-2-2H3z" />
              </svg>
              Info@Example.Com
            </a>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline-block mr-1">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.35l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              132, Tie St, Wingston, New York 12401
            </span>
          </div>
          <div>
            <a href="#" className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v8h4v-8h3l1-4h-4v-3c0-1 1-2 2-2h1v-3h-2c-2 0-3 1-3 3v3h-3z"/></svg>
            </a>
            <a href="#" className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.893-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.084-.205-7.719-2.165-10.148-5.144-.423.726-.694 1.567-.694 2.468 0 1.719.879 3.245 2.212 4.128-.764-.025-1.482-.234-2.118-.583v.06c0 2.385 1.693 4.372 3.952 4.83-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.605 3.41-1.68 1.32-3.806 2.108-6.112 2.108-.397 0-.79-.023-1.175-.068 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 14.307-14.307 0-.217-.01-.434-.02-.653.989-.719 1.648-1.793 2.01-2.969z"/></svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M4.999 3h14.002c2.209 0 3.999 1.791 3.999 4v10c0 2.209-1.79 4-3.999 4H5c-2.208 0-4-1.791-4-4V7c0-2.209 1.792-4 4-4zm2 8l4-4 4 4v6H7v-6z"/></svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3l-1.948.007c-1.012 0-1.347-.739-1.347-1.7v-3.71c0-.749.339-1.281 1.347-1.281l1.934-.007v-1.79h-2.965c-1.515 0-2.5-1.045-2.5-2.3v-1.055s1.702 1.379 3.913 1.457v5.205l-1.948-.007c-1.012 0-1.347-.739-1.347-1.7v-3.71c0-.749.339-1.281 1.347-1.281l1.934-.007v-1.79h-2.965c-1.515 0-2.5-1.045-2.5-2.3v-1.055s1.702 1.379 3.913 1.457v5.205"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-extrabold text-2xl" style={{ color: '#f97316' }}>
          <span style={{ color: '#6366f1' }}>Tra</span>vil
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700 hover:text-gray-900">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Call Us & Search */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            <div className="bg-orange-500 text-white rounded-full p-2">
              <FaPhone />
            </div>
            <div className="ml-2 text-sm">
              <span className="text-gray-700">Call Us</span>
              <p className="font-semibold text-gray-900">+88 (09) 53 33 09</p>
            </div>
          </div>
          <button className="text-gray-700 hover:text-gray-900">
            <FaSearch />
          </button>
        </div>

        {/* Reservation Button */}
        <Link href="/reservation" className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md text-sm font-semibold hidden md:inline-block">
          Reservation <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline-block ml-1">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 5.29a.75.75 0 011.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06.02z" clipRule="evenodd" />
          </svg>
        </Link>

        {/* Mobile Menu Button (you'll need to implement the toggle functionality) */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default, needs toggle functionality) */}
      <div className="md:hidden bg-gray-100 py-2">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
            {link.label}
          </Link>
        ))}
        <div className="px-4 py-2">
          <Link href="/reservation" className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md text-sm font-semibold block text-center">
            Reservation <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline-block ml-1">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 5.29a.75.75 0 011.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06.02z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-orange-500 text-white rounded-full p-2">
              <FaPhone />
            </div>
            <div className="ml-2 text-sm">
              <span className="text-gray-700">Call Us</span>
              <p className="font-semibold text-gray-900">+88 (09) 53 33 09</p>
            </div>
          </div>
          <button className="text-gray-700 hover:text-gray-900">
            <FaSearch />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
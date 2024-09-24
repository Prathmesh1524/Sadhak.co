import Link from 'next/link';

function Navbar() {
  return (
    <div>
    <nav className="flex justify-between p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-blue-500 hover:text-blue-800">
            Home
          </Link>
        </li>
        <li>
          <Link href={'private_jobs'} className="text-blue-500 hover:text-blue-800">
            Private Jobs
          </Link>
        </li>
        <li>
          <Link href={'gov_jobs'} className="text-blue-500 hover:text-blue-800">
            Goverment Jobs
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;

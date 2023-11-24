import headerStyles from "../styles/header.module.css"
import { useRouter } from 'next/router'
import Link from 'next/link';

const Header = () => {
  const router=useRouter();
  return (
    <div className={headerStyles.header}>
      <nav className="container ">
        <ul className=' flex justify-start gap-6 ms-5'>
          <Link href={"/"} >
          <li> Home</li>
          </Link>
          <Link href={"/about"} >
          <li> About</li>
          </Link>
          <Link href={"/product"} >
          <li> Product</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header
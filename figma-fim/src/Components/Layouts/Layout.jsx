import { Link } from "react-router-dom"
import styles from "./styles.module.css";

const Layout = () => {
  return (
    <div className={styles.layout}>
<div className="leftlay  ">
    <a href="" className="text-[28px]">Logo</a>
</div>
<div className="righttlay text-blue-200 ">
    <ul className="flex justify-between gap-5">
        <Link className="text-lg" to >Populer Tv Series</Link>
        <Link className="text-lg" to >Populer Movies</Link>
    </ul>
</div>
    </div>
  )
}

export default Layout
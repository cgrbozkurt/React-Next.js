import { Link } from "react-router-dom"
import styles from "./styles.module.css";

const Layout = () => {
  return (
    <div className={styles.layout}>
<div className="leftlay">
    <span>Logo</span>
</div>
<div className="righttlay">
    <ul>
        <Link to >Populer Tv Series</Link>
        <Link to >Populer Movies</Link>
    </ul>
</div>
    </div>
  )
}

export default Layout
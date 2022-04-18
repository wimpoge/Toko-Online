import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'



const Navbar = () => {
    return (
        <nav>
            <div className={styles.navbar}>
                <Image src="/googlelogo_color_160x56dp.png" alt="logo" width="320px" height="112px"/>
                <ul>
                    <li>
                        <Link href="/Baju">
                            <a>Baju</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Celana</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Sepatu</a>
                        </Link>
                    </li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                            <input
                                type="text"
                                className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                                placeholder="Search Here..." />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
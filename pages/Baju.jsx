import styles from '../styles/Baju.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return {
        props: { 
            clothes: data
        }
    }
}

const Baju = ({ clothes }) => {
    return (
        <div className={styles.container}>
            <ul className={styles.grid}>
                {
                    clothes.map(clothe => 
                    <li key={clothe.id} className={styles.row}>
                        {clothe.title},
                        <img src={clothe.image} width="100px" height="100px" ></img>
                        <p>$ {clothe.price}</p>
                        <button>Add to Cart</button>
                    </li>
                    )
                }   
            </ul>
        </div>
    )
}

export default Baju;
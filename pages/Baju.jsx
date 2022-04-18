import styles from '../styles/Baju.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return {
        props: { 
            ninjas: data
        }
    }
}

const Baju = ({ ninjas }) => {
    return (
        <div className={styles.container}>
            <ul className={styles.grid}>
                {
                    ninjas.map(ninja => 
                    <li key={ninja.id} className={styles.row}>
                        {ninja.title},
                        <img src={ninja.image} width="100px" height="100px" ></img>
                        <p>{ninja.price}</p>
                        <button>Add to Cart</button>
                    </li>
                    )
                }   
            </ul>
        </div>
    )
}

export default Baju;

interface Cardinterface {
    destination: string
    price: string
    departuredate: string
    returndate: string
}

const Card = ({ destination, price, departuredate, returndate }: Cardinterface) => {
    return (
        <div>
            <h1>{destination}</h1>
            <h1>{price}</h1>
            <ul>
                <li>{departuredate}</li>
                <li>{returndate}</li>
            </ul>
        </div>
    )
}

export default Card;
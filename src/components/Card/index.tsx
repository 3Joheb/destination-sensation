import PixabayLogo from '../../assets/pixabay.svg'

interface Cardinterface {
    destination: string
    price: string
    departureDate: string
    returnDate: string
    image: {
        link: string,
        redirect: string
    }
}

/* Todo
- Layout and styling
    - Image
    - Ul
- Pixabay redirect

*/

const Card = ({ destination, price, departureDate, returnDate, image }: Cardinterface) => {
    return (
        <div>
            <div className='relative w-52 h-52'>
                <img src={image.link} alt={`Image of ${destination}`} />
            </div>
            <h1>{destination}</h1>
            <h1>{`€${price}`}</h1>
            <ul>
                <li>{departureDate}</li>
                <li>{returnDate}</li>
            </ul>
        </div>
    )
}

export default Card;
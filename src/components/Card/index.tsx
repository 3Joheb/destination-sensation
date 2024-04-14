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
            <div className='relative w-64 h-64'>
                <img src={image.link} alt={`Image of ${destination}`} className='w-full h-full object-cover' />
                <a href={image.redirect} target="_blank" rel="noopener noreferrer">
                    <img src={PixabayLogo} alt='Pixabay Logo' className='absolute bottom-0 right-0 w-24' />
                </a>
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
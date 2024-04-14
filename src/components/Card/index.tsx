import PixabayLogo from '../../assets/pixabay.svg'

interface Cardinterface {
    iata: string
    destination: string
    price: string
    departureDate: string
    returnDate: string
    image: {
        link: string,
        redirect: string
    }
}

const Card = ({ iata, destination, price, departureDate, returnDate, image }: Cardinterface) => {
    const redirectToHolidayDetails = () => {
        // Redirect to holiday details
        console.log('redirecting')

        const origin = 'MAD'
        const destination = 'OPO'
        const departureDate = '2024-05-05'
        const returnDate = '2024-05-17'
        const maxPrice = '500'

        const url = `/holiday/details?origin=${origin}&destination=${destination}&departureDate=${departureDate}&returnDate=${returnDate}&maxPrice=${maxPrice}`
        window.location.href = url
    }

    return (
        <div className='flex gap-8 w-fit' onClick={() => redirectToHolidayDetails()}>
            <div className='relative w-64 h-64'>
                <img src={image.link} alt={`Image of ${destination}`} className='w-64 h-64 object-cover relative' />
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-black' />
                <a href={image.redirect} target="_blank" rel="noopener noreferrer">
                    <img src={PixabayLogo} alt='Pixabay Logo' className='absolute bottom-0 right-0 w-24' />
                </a>
            </div>
            <div>
                <h1>{destination}</h1>
                <ul className='flex gap-4'>
                    <li>From: {departureDate}</li>
                    <li>To: {returnDate}</li>
                </ul>
                <span>{`€${price}`}</span>
            </div>
        </div>
    )
}

export default Card;
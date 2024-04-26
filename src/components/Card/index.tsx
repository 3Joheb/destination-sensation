import PixabayLogo from '../../assets/pixabay.svg'

interface Cardinterface {
    origin: { iata: string }
    destination: { iata: string, city: string }
    price: string
    departureDate: string
    returnDate: string
    image: {
        hotLink: string,
        redirect: string
    }
}

const Card = ({ origin, destination, price, departureDate, returnDate, image }: Cardinterface) => {
    const redirectToHolidayDetails = () => {
        // Redirect to holiday details
        console.log('redirecting')

        const url = `/holiday/details?origin=${origin.iata}&destination=${destination.iata}&departureDate=${departureDate}&returnDate=${returnDate}&maxPrice=${price}`
        window.location.href = url
    }

    return (
        <div className='flex gap-14 max-w-2xl w-full bg-white py-4 px-6 rounded-md shadow-md cursor-pointer hover:bg-neutral-50' onClick={() => redirectToHolidayDetails()}>
            <div className='relative w-64 h-64 rounded-md overflow-hidden'>
                <img src={image.hotLink} alt={`Image of ${destination}`} className='w-64 h-64 object-cover relative' />
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-black' />
                <a href={image.redirect} target="_blank" rel="noopener noreferrer">
                    <img src={PixabayLogo} alt='Pixabay Logo' className='absolute bottom-0 right-0 w-24' />
                </a>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='w-64 text-3xl font-medium'>{destination.city}</h1>
                <ul className='flex justify-between font-medium text-neutral-600'>
                    <li>{departureDate}</li>
                    <li>{returnDate}</li>
                </ul>
                <div className='flex justify-center mt-auto bg-sky-400 rounded-md'>
                    <span className='font-medium text-lg text-white'>from {`€${price}`}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;
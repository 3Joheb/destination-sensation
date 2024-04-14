import porto from "../assets/porto.jpg"
import rome from "../assets/rome.jpg"
import venice from "../assets/venice.jpg"

export default () => {

    return (
        <div className="flex flex-col justify-center items-center h-svh gap-14">
            <span className="text-3xl">Welcome!</span>
            <p className="max-w-2xl text-xl text-center"> Hi there us fellow members of <span className="font-medium">Destination Sensation</span> are bringing this new holiday package website to you! We aim to help
                making your holiday descision easier by making the biggest factor in your holiday way easier to chose , you
                give us a price and time we will find you the places best suited to your budget!
            </p>
            <div className="home-imgs">
                <div className="img-wrap">
                    <img src={porto} className="w-72" />
                    <span>Porto</span>
                </div>
                <div className="img-wrap">
                    <img src={rome} className="w-72" />
                    <span>Rome</span>
                </div>
                <div className="img-wrap">
                    <img src={venice} className="w-72" />
                    <span>Venice</span>
                </div>
            </div>
        </div>
    )
}
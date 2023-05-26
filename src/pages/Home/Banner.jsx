import image from "../../assets/bannerImage.webp";

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
                <img data-aos="fade-right" className="rounded-lg" src={image} />
                <div data-aos="fade-left">
                    <h1 className="text-2xl md:text-5xl font-bold">I AM IRON MAN</h1>
                    <p className="md:pt-6">Unleash the power of Iron Man with our Endgame Snap Toy! Inspired by the iconic moment from the movie, this collectible brings the action and excitement of the Marvel Cinematic Universe to your fingertips. With its stunning detail, it's a must-have for any Marvel enthusiast. Relive the epic battles and heroic sacrifices as you shape the destiny of the universe. Shop now and embrace the power of the snap!</p>
                    <p className="py-3 font-bold">Buy the Iron Man toy when he was snapping in Avengers: End Game</p>
                    <button className="btn btn-primary">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXl9d0WdJPCPSimIvJhspBjYKNmcPuUw2MQ&usqp=CAU
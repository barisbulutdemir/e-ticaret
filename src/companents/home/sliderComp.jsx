import React from 'react'
import Slider from 'react-slick'


const SliderComp = () => {
    const settings = {
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <div>
            <Slider {...settings}>
            <div className="!flex items-center justify-between ">
                <div className="text-sm">
                    <div className="text-2xl font-bold">En Kaliteli Ayakkabılar Burada</div>
                    <div className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas </div>
                    <div className="bg-gray-200 cursor-pointer rounded-3xl px-5 py-2 inline-block w-auto">İncele</div>
                </div>
                 <img alt="" className="w-1/3 " src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e6a85daa-1a77-45b9-a892-b4e72124060f/air-force-1-07-shoes-PdDjkL.png"/>
            </div>
                <div className="!flex items-center justify-between ">
                    <div className="text-sm">
                        <div className="text-2xl font-bold">En Kaliteli Ayakkabılar Burada</div>
                        <div className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas </div>
                        <div className="bg-gray-200 cursor-pointer rounded-3xl px-5 py-2 inline-block w-auto">İncele</div>
                    </div>
                    <img alt="" className="w-1/3" src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ae13300b-a77a-4733-a8b7-eb817b0bc920/air-force-1-shadow-shoes-6q0Lmb.png"/>
                </div>

        </Slider>
        </div>
    )
}

export default SliderComp;
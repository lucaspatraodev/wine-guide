import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import React from "react";
import Slider from "react-slick";

export default function WineTypesSection() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-screen ">
      <div className="p-8 min-[600px]:p-24 bg-[#FCA311]">
        <Slider {...settings}>
          {data.map((wine) => (
            <div className="bg-[#FFF0DF] text-black h-[580px] p-4 rouded-xl flex flex-col">
              <div className="rouded-t-xl w-auto flex justify-center">
                <img
                  src={wine.imgPath}
                  alt={wine.imgAlt}
                  className="h-[300px] w-full"
                />
              </div>
              <div className="p-2 flex-col items-center text-left">
                <p className="text-lg font-bold">{wine.headline}</p>
                <p className="text-md font-semibold">{wine.subhead}</p>
                <p className="text-md font-light">{wine.description}</p>
                <div className="my-2 h-[3px] w-full bg-[#C4C4C4] flex gap-2"></div>
                <p className="my-2">Tags</p>
                <div className="flex gap-2 flex-wrap">
                  <div className="w-20 h-4 rounded-full border-2 border-black p-4 flex justify-center items-center">
                    <p className="font-light text-sm">Tag 1</p>
                  </div>
                  <div className="w-20 h-4 rounded-full border-2 border-black p-4 flex justify-center items-center">
                    <p className="font-light text-sm">Tag 2</p>
                  </div>

                  <div className="w-20 h-4 rounded-full border-2 border-black p-4 flex justify-center items-center">
                    <p className="font-light text-sm">Tag 3</p>
                  </div>
                  <div className="w-20 h-4 rounded-full border-2 border-black p-4 flex justify-center items-center">
                    <p className="font-light text-sm">Tag 4</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

const data = [
  {
    headline: "Headline",
    subhead: "Subhead",
    description:
      "Please add you content here. Keep it short and simple. and smile :)",
    imgPath: "/wineTypes/red-wine2.jpg",
    imgAlt: "testing alt",
  },
  {
    headline: "Headline",
    subhead: "Subhead",
    description:
      "Please add you content here. Keep it short and simple. and smile :)",
    imgPath: "/wineTypes/red-wine.jpg",
    imgAlt: "testing alt",
  },
  {
    headline: "Headline",
    subhead: "Subhead",
    description:
      "Please add you content here. Keep it short and simple. and smile :)",
    imgPath: "/wineTypes/red-wine.jpg",
    imgAlt: "testing alt",
  },
  {
    headline: "Headline",
    subhead: "Subhead",
    description:
      "Please add you content here. Keep it short and simple. and smile :)",
    imgPath: "/wineTypes/red-wine.jpg",
    imgAlt: "testing alt",
  },
  {
    headline: "Headline",
    subhead: "Subhead",
    description:
      "Please add you content here. Keep it short and simple. and smile :)",
    imgPath: "/wineTypes/red-wine.jpg",
    imgAlt: "testing alt",
  },
  {
    headline: "Headline",
    subhead: "Subhead",
    description:
      "Please add you content here. Keep it short and simple. and smile :)",
    imgPath: "/wineTypes/red-wine.jpg",
    imgAlt: "testing alt",
  },
];

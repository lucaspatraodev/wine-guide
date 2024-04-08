import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import Slider from "react-slick";
import WineTypePairingTag from "../WineTypePairingTag";

export default function WineTypesSection() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
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
    <section className="max-w-screen">
      <div className="p-8 min-[600px]:p-24 bg-[#FCA311]">
        <div className="flex flex-col gap-3 text-center pb-4 md:pb-12">
          <h1 className="text-[#14213D] font-bold text-3xl md:text-4xl">
            Our wines and pairings
          </h1>
          <p className="text-[#14213D] font-semibold text-center text-md">
            Discover the perfect wine for your meal
          </p>
        </div>
        <Slider {...settings}>
          {data.map((wine) => (
            <div
              key={wine.id}
              className="bg-[#FFF0DF] text-black h-[580px] p-4 rouded-xl flex flex-col"
            >
              <div className="rouded-t-xl w-auto flex justify-center">
                <img
                  src={wine.imgPath}
                  alt={wine.imgAlt}
                  className="h-[300px] w-full"
                />
              </div>
              <div className="p-2 flex flex-col gap-2 text-left">
                <p className="text-md font-bold">{wine.headline}</p>
                <p className="text-xs font-light">{wine.description}</p>
                <div className="h-[3px] w-full bg-[#C4C4C4]"></div>
                <p className="my-2">Pairing</p>
                <div className="flex gap-2 flex-wrap">
                  {wine.pairing.map((tag) => (
                    <WineTypePairingTag
                      key={tag.tagTitle}
                      tagTitle={tag.tagTitle}
                      tagColor={tag.tagColor}
                    />
                  ))}
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
    headline: "Chardonnay",
    description:
      "Great wine pairing with Salmon. A dry, medium-bodied Chardonnay pair great with light meats like fish and other seafood in flavorful sauces. ",
    imgPath: "/wineTypes/chardonnay.jpg",
    imgAlt: "Chardonnay Wine glass",
    pairing: [
      { tagTitle: "Salmon", tagColor: "#FE5D9F" },
      { tagTitle: "Pizza", tagColor: "orange" },
    ],
    id: "1",
  },
  {
    headline: "Rosé",
    description:
      "Fresh and fruity. Think a light red, like grenache, with some extra brightness and crispness. Expect the following flavors when you take a sip: Red fruits like strawberries, cherries, and raspberries.",
    imgPath: "/wineTypes/rose.jpg",
    imgAlt: "Rosé Wine glass",
    pairing: [
      { tagTitle: "Salmon", tagColor: "red" },
      { tagTitle: "Cheese", tagColor: "#E6CC00" },
    ],
    id: "2",
  },
  {
    headline: "Cabernet",
    description:
      "A rich wine needs a rich dish. That’s why Cabernet and red meat pair so well together.",
    imgPath: "/wineTypes/cabernet.jpg",
    imgAlt: "Cabernet Wine glass",
    pairing: [{ tagTitle: "Red Meat", tagColor: "red" }],
    id: "3",
  },
  {
    headline: "Pinot Noir",
    description:
      "A dry, light- to medium-bodied, with bright acidity, silky tannins",
    imgPath: "/wineTypes/pinot-noir.jpg",
    imgAlt: "Pinot Noir Wine glass",
    pairing: [
      { tagTitle: "Seafood", tagColor: "green" },
      { tagTitle: "Pizza", tagColor: "orange" },
    ],
    id: "4",
  },
  {
    headline: "Sauvignon Blanc",
    description:
      "Sip a piquant Sauvignon Blanc and pair it with a tart dressing or sauce for a flavorful zing.",
    imgPath: "/wineTypes/sauvignon-blanc.jpg",
    imgAlt: "Sauvignon Blanc Wine glass",
    pairing: [{ tagTitle: "Fish", tagColor: "blue" }],
    id: "5",
  },
];

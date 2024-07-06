import Slider from "react-slick";

export default function FoodCategoryCarousel() {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [],
  };
  return (
    <div className="w-full px-10 h-fit overflow-hidden ">
      <Slider {...settings}>
        <div className="p-3 mx-3">
          <img
            src="./menu/categoryCard/burger.avif"
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="p-3 mx-3">
          <img
            src="./menu/categoryCard/chicken.avif"
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="p-3 mx-3">
          <img
            src="./menu/categoryCard/dosa.avif"
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="p-3 mx-3">
          <img
            src="./menu/categoryCard/northIndian.avif"
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="p-3 mx-3">
          <img
            src="./menu/categoryCard/paneer.avif"
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="p-3 mx-3">
          <img
            src="./menu/categoryCard/paratha.avif"
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="p-3 mx-3 rounded-full">
          <img
            src="./menu/categoryCard/pizza.avif"
            className="rounded-full"
            alt=""
          />
        </div>
        <div className="p-3 mx-3 overflow-clip rounded-full">
          <img
            src="./menu/categoryCard/coffee.webp"
            alt=""
            className="rounded-full h-1/2"
          />
        </div>
        <div className="p-3 mx-3">
          <img
            src="./menu/categoryCard/roll.avif"
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="p-3 mx-3">
          <img
            src="./menu/categoryCard/thali.avif"
            alt=""
            className="rounded-full"
          />
        </div>
      </Slider>
    </div>
  );
}

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} bg-black rounded-full overflow-clip hover:bg-slate-600`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black rounded-full hover:bg-slate-600`}
      onClick={onClick}
    />
  );
}

import React, { useRef, useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Product, MediaType } from "@/type";

interface Carousel {
  title: string;
  products: Product[];
  type: MediaType;
}

const Carousel = (props: Carousel) => {
  const { title, products, type } = props;
  const carouselRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLDivElement>(null);
  const nextBtnRef = useRef<HTMLDivElement>(null);

  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      carouselRef.current && setCarouselWidth(carouselRef.current.offsetWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLeftNavClick = () => {
    carouselRef?.current?.scrollBy({
      left: -carouselWidth,
      behavior: "smooth",
    });
  };
  const handleRightNavClick = () => {
    carouselRef?.current?.scrollBy({ left: carouselWidth, behavior: "smooth" });
  };

  const handleCarouselScroll = () => {
    if (carouselRef.current && prevBtnRef.current && nextBtnRef.current) {
      const scrollPos = carouselRef.current.scrollLeft;
      const maxScrollPos =
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

      if (scrollPos === 0) {
        prevBtnRef.current.style.display = "none";
      } else if (scrollPos === maxScrollPos) {
        nextBtnRef.current.style.display = "none";
      } else {
        nextBtnRef.current.style.display = "flex";
        prevBtnRef.current.style.display = "flex";
      }
    }
  };

  return (
    <div className="mb-4">
      <div className={"flex justify-between"}>
        <span className={"text-lg mb-2"}>{title}</span>
      </div>
      <div className="flex items-center relative">
        <div
          onClick={handleLeftNavClick}
          ref={prevBtnRef}
          className="absolute left-[-15px] rounded-full hidden h-[35px] w-[35px] justify-center items-center border z-10  bg-slate-50 font-bold cursor-pointer"
        >
          {"<"}
        </div>
        <div
          className="flex flex-initial w-full overflow-auto"
          ref={carouselRef}
          onScroll={handleCarouselScroll}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              type={type}
            ></ProductCard>
          ))}
        </div>
        <div
          onClick={handleRightNavClick}
          ref={nextBtnRef}
          className="absolute right-[-15px] rounded-full flex h-[35px] w-[35px] justify-center items-center border z-10  bg-slate-50 font-bold cursor-pointer"
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

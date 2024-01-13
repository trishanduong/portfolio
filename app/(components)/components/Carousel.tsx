import { Carousel, CarouselProps } from 'flowbite-react';
import Image from 'next/image';

interface Props {
  images: string[],
}

const CarouselComponent: React.FC<Props> = ({
  images
}) => {
  // console.log(images)
  return (
    <div className="h-96">
      <Carousel>
        { images && (
          images.map((pic, index) => (
            <div key={index} >
              <img src={pic} alt="..." />
            </div>
           ))
          )
        }
      </Carousel>
    </div>
  );
}
export default CarouselComponent;
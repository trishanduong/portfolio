import { Carousel } from 'flowbite-react';
import Image from 'next/image';

interface Props {
  images: string[],
}

const CarouselComponent: React.FC<Props> = ({
  images
}) => {
  // console.log(images)
  return (
    <div className="h-56 lg:h-96 mr-3">
      <Carousel>
        { images && (
          images.map((pic, index) => (
            <div key={index} >
              <Image 
                src={pic} 
                alt={pic}
                width={750} 
                height={350} 
                style={{
                  width: '100%',
                  height: 'auto',
              }}/>
            </div>
           ))
          )
        }
      </Carousel>
    </div>
  );
}
export default CarouselComponent;
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

/* importar las imagenes que van a ir en el Slider */
import banner1 from '@/public/assets/img-banner/banner1.png'
import banner2 from '@/public/assets/img-banner/banner2.png'
import banner3 from '@/public/assets/img-banner/banner3.png'

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: 'linear'
  }

  return (
        <>
            <Slider {...settings} className='w-full overflow-hidden'>
                <Image
                    src={banner1}
                    width={1440}
                    height={640}
                    alt="Picture of the author"
                    className='max-w-screen'
                />
                <Image
                    src={banner2}
                    width={1440}
                    height={640}
                    alt="Picture of the author"
                    className='max-w-screen'
                />
                <Image
                    src={banner3}
                    width={1440}
                    height={640}
                    alt="Picture of the author"
                    className='max-w-screen'
                />
            </Slider>
        </>
  )
}

export default Banner
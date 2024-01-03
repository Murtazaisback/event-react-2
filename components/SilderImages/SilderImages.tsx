import { Des_1, Des_2, Des_3 } from '@/public'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './styles.css';

const SilderImages = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Assuming 768px as the breakpoint for mobile
        };

        // Initial check
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
      if (isMobile) {
        return (
            <>
            <h2 className='heading_b'>Create your events with ease.</h2>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination,]}
                className="mySwiper mobile_imgs"
            >
                <SwiperSlide>
                    <Image src={Des_2} alt='des_2' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Des_1} alt='des_1' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Des_3} alt='des_3' className='mobile_imgs'/> 
                </SwiperSlide>
            </Swiper>
            </>
        );
    }
  
    return (
        <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: -200 }}  // Starts off screen to the left
            animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : -100 }}  // Slide in when in view
            transition={{ duration: 0.5 }}
        >
            <div className="show_imgs">
                <Image src={Des_1} alt='des_1' />
                <Image src={Des_2} alt='des_2' />  {/* Fixed the alt text */}
                <Image src={Des_3} alt='des_3' />  {/* Fixed the alt text */}
            </div>
        </motion.div>
    );
}

export default SilderImages

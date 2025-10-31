import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';

const OfferCards = ({offer}) => {
    return (
        <div>
            <div className='relative'>
                                <Image
                                    src={offer.img}
                                    alt="Logo"
                                    width={1920}
                                    height={1080}
                                    className='object-cover rounded-2xl'
                                />
                                <div className="absolute inset-0 flex flex-col justify-center pl-10 items-start rounded-3xl  text-white ">
                                    <h1 className="text-xl md:text-3xl font-bold mb-4 text-gray-700">
                                        {offer.titlePart1}
                                        <br />
                                        {offer.titlePart2}
                                    </h1>
                                    <Link href={'/products'}>
                                    <button className='flex items-center gap-4 btn text-white bg-[#3BB77E]'>Shop Now<FaArrowRight />  </button>
                                    </Link>
                                </div>
                            </div>
        </div>
    );
};

export default OfferCards;
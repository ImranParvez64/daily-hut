
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import OfferCards from './HomeComponents/OfferCards';


const Offer = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/offer`)
    const offers = await res.json();
    return (
        <div className='container mx-auto py-10'>
            <div className='flex justify-between items-center gap-4'>
                {
                    offers.slice(0, 3)
                        .map(offer => (
                            <OfferCards key={offer.id} offer={offer}></OfferCards>
                        ))
                }
            </div>
        </div>
    );
};

export default Offer;
"use client";

import React, { useEffect } from 'react';
import OfferCards from './HomeComponents/OfferCards';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOffers } from '@/redux/slice/offerSlice';

const Offer = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.offers);

    useEffect(() => {
        dispatch(fetchOffers());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className='container mx-auto py-4 md:py-10'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 p-4 md:p-0 justify-between items-center gap-4'>
                {items.slice(0, 3).map((offer) => (
                    <OfferCards key={offer.id} offer={offer} />
                ))}
            </div>
        </div>
    );
};

export default Offer;

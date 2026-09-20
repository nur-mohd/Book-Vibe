import Image from 'next/image';
import React from 'react';
import BannerImage from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
        <section className=" py-10">
        <div className="container mx-auto bg-slate-300 rounded-2xl p-4 grid grid-cols-2 items-center gap-2">
            <div className='space-y-4'>
                <h2 className='font-bold text-5xl'>Books to freshen up <br/> your bookshelf</h2>
                <button className="btn btn-primary">View The List </button>
            </div>

            <div>
                <Image src={BannerImage} alt="Banner" />
            </div>
        </div>
        </section>
    );
};

export default Banner;
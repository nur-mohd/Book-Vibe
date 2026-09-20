
import Image from "next/image";
import React from "react";
import BannerImage from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="px-4 py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 px-6 py-1 md:px-3 md:py-4 shadow-xl">
    
          <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">
            
            {/* Content */}
            <div className="space-y-2 text-white">
              <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                📚 Discover Your Next Favorite Book
              </span>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Books to freshen up
                <span className="block text-primary">
                  your bookshelf
                </span>
              </h1>

              <p className="max-w-lg text-base leading-7 text-slate-300 md:text-lg">
                Explore amazing books, discover new authors, and find your
                next great read—all in one place.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary rounded-full px-7 shadow-lg transition hover:scale-105">
                  View The List
                </button>

                <button className="btn btn-outline rounded-full border-white px-7 text-white hover:border-white hover:bg-white hover:text-slate-900">
                  Explore Books
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
                <Image
                  src={BannerImage}
                  alt="Books collection"
                  className="h-auto w-full rounded-xl object-cover transition duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
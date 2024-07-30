import React from 'react';
import PropTypes from 'prop-types';
import index_book_1 from '/@/images/webp/index_book_1.webp';
import index_book_2 from '/@/images/webp/index_book_2.webp';
function Banner() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-neutral-200 h-4/5 px-4">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl mb-5">
          一本書的精華，只需幾分鐘。
        </h1>
        <h2 className="font-light text-lg sm:text-xl md:text-2xl">
          聚焦書籍的核心思想，幫助你快速理解精髓。
        </h2>
        <input
          type="text"
          placeholder="輸入書名"
          className="input h-10 input-bordered w-full input-sm max-w-xs input-secondary mt-5"
        />
      </div>
      <div className="flex items-center justify-center w-1/2 max-w-6xl px-4 space-x-4 mt-16 md:mt-0">
        <img src={index_book_1} alt="book_1" className="w-1/2 max-w-xs h-auto object-contain" />
        <img src={index_book_2} alt="book_2" className="w-1/2 max-w-xs h-auto object-contain" />
      </div>
    </div>
  );
}

Banner.propTypes = {};

export default Banner;

import React from 'react';

const BangladeshMap = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      width="500"
      height="300"
      style={{ display: 'block', margin: '0 auto' }}
    >
      {/* সবুজ ব্যাকগ্রাউন্ড */}
      <rect width="100%" height="100%" fill="#006a4e" />

      {/* লাল বৃত্ত */}
      <circle cx="500" cy="400" r="150" fill="#f42a41" />
    </svg>
  );
};

export default BangladeshMap;

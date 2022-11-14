import React, { Suspense } from 'react';

const Home = () => {
  // 굳이 필요가 없??
  return (
    <div>
      <Suspense fallback={<p className="text-red-500">loading...</p>}>
        <div>home</div>
      </Suspense>
    </div>
  );
};

export default Home;

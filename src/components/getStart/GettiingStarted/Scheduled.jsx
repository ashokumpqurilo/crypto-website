import React from 'react';

const Scheduled = () => {
  return (
    <div className="bg-white p-6 " id="scheduled">
      <h2 className="text-2xl font-bold mb-4">Scheduled</h2>
      
      <p className="text-gray-700">
        Cron expressions are used to specify the schedule. If you are not familiar with cron expressions, you can use AI (from our UI) to generate one for you.
      </p>
    </div>
  );
};

export default Scheduled;

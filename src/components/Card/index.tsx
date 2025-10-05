import React, { useEffect, useState } from "react";

interface StatItem {
  label: string;
  value: number;
}

const stats: StatItem[] = [
  { label: "Books Available", value: 124000 },
  { label: "Daily Visitors", value: 18500 },
  { label: "Registered Users", value: 9050 },
  { label: "Authors Contributed", value: 320 },
];

const Counter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(interval);
  }, [end]);

  return <span>{count.toLocaleString()}</span>;
};

const StatsCounterSection: React.FC = () => {
  return (
    <section className="bg-[#461356] text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
      

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-3xl font-extrabold text-[#d8b4fe] drop-shadow">
                <Counter end={stat.value} />
              </h3>
              <p className="mt-2 text-lg font-medium text-gray-200">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounterSection;

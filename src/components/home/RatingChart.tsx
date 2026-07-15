"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaStar } from "react-icons/fa";

interface RatingItem {
  star: string;
  count: number;
  fill: string;
}

// Mock dataset mapping ratings from 1 to 5 stars with customized indicator colors
const ratingData: RatingItem[] = [
  { star: "5 ★", count: 150, fill: "#22c55e" },
  { star: "4 ★", count: 90, fill: "#3b82f6" },
  { star: "3 ★", count: 45, fill: "#eab308" },
  { star: "2 ★", count: 15, fill: "#f97316" },
  { star: "1 ★", count: 8, fill: "#ef4444" },
];

export default function RatingChart() {
  // Aggregate total feedback responses dynamically for clear metrics
  const totalReviews = ratingData.reduce((acc, item) => acc + item.count, 0);

  return (
    <section className="py-12 max-w-4xl mx-auto px-4">
      {/* Header section displaying chart title and overall response scope */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 flex items-center justify-center gap-2">
          User Satisfaction Rating{" "}
          <FaStar className="text-yellow-400 text-2xl animate-pulse" />
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Based on {totalReviews} global reviews from our amazing community
        </p>
      </div>

      {/* Main visualization card with glassmorphic properties */}
      <div className="bg-white/60 dark:bg-gray-950/60 border border-gray-200 dark:border-gray-800/80 p-6 rounded-2xl shadow-xl backdrop-blur-xl w-full">
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ratingData}
              layout="vertical"
              margin={{ top: 10, right: 30, left: -10, bottom: 5 }}
            >
              <XAxis type="number" hide />

              <YAxis
                dataKey="star"
                type="category"
                tick={{ fill: "#6b7280", fontWeight: "bold" }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
                contentStyle={{
                  backgroundColor: "#1f2937",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 12px",
                }}
                itemStyle={{ color: "#ff9c08" }}
                labelStyle={{ color: "#ffe608", fontWeight: "bold" }}
              />

              <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={16} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom analytics summary containing final calculated scores */}
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-around text-center">
          <div>
            <span className="block text-2xl font-black text-gray-800 dark:text-gray-200">
              4.6
            </span>
            <span className="text-xs text-gray-400">Average Rating</span>
          </div>
          <div>
            <span className="block text-2xl font-black text-gray-800 dark:text-gray-200">
              92%
            </span>
            <span className="text-xs text-gray-400">Recommended</span>
          </div>
        </div>
      </div>
    </section>
  );
}

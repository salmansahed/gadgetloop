"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
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

export default function RatingChart() {
  const [ratingData, setRatingData] = useState<RatingItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch analytics data on component mount
  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
        const res = await fetch(`${baseUrl}/api/products/rating-analytics`);

        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data)) {
            setRatingData(json.data);
          }
        }
      } catch (error) {
        console.error("Error fetching analytics in client:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
  }, []);

  // Calculate chart metrics from fetched data
  const totalReviews = ratingData.reduce(
    (acc, item) => acc + (item.count || 0),
    0,
  );

  const totalStarsEarned = ratingData.reduce((acc, item) => {
    const starNumber = parseInt(item.star) || 0;
    return acc + starNumber * (item.count || 0);
  }, 0);

  const averageRating =
    totalReviews > 0 ? Number((totalStarsEarned / totalReviews).toFixed(1)) : 0;

  const positiveReviews = ratingData
    .filter((item) => item.star.includes("5") || item.star.includes("4"))
    .reduce((acc, item) => acc + (item.count || 0), 0);

  const recommendedPercentage =
    totalReviews > 0 ? Math.round((positiveReviews / totalReviews) * 100) : 0;

  // Handle loading state
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-64 w-full">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-600"></div>
        <p className="mt-2 text-gray-500">Loading charts...</p>
      </div>
    );
  }

  return (
    <section className="py-12 max-w-4xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 flex items-center justify-center gap-2">
          User Satisfaction Rating{" "}
          <FaStar className="text-yellow-400 text-2xl animate-pulse" />
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Based on {totalReviews} verified ratings from our global customers
        </p>
      </div>

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

              <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={16}>
                {ratingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-around text-center">
          <div>
            <span className="block text-2xl font-black text-gray-800 dark:text-gray-200">
              {averageRating}
            </span>
            <span className="text-xs text-gray-400">Average Rating</span>
          </div>
          <div>
            <span className="block text-2xl font-black text-gray-800 dark:text-gray-200">
              {recommendedPercentage}%
            </span>
            <span className="text-xs text-gray-400">Recommended</span>
          </div>
        </div>
      </div>
    </section>
  );
}

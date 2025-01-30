import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from "chart.js";
import { Interface } from "readline";


Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const BidChart =   () => {
 
  const data = {
    labels: ["12:00", "13:00", "14:00", "15:00", "16:00"], // Time points
    datasets: [
      {
        label: "Bid Price (ETH)",
        data: [4.8, 4.9, 5.0, 5.1, 5.25], // Bid values
        borderColor: "#8B5CF6", // Purple color
        backgroundColor: "rgba(139, 92, 246, 0.2)", // Light fill
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#8B5CF6",
      },
    ],
  };

  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#fff" },
      },
      y: {
        grid: { color: "#444" },
        ticks: { color: "#fff", callback: (value: number | String) => `${value} ETH` }, 
      },
    },
  };

  return (
    <div className="h-40">
      <Line data={data} options={options} />
    </div>
  );
};

export default BidChart;
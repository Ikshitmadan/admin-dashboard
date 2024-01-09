import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import  './ChartBox.scss'
const ChartBox = ({color,chartData,dataKey,percentage,title,icon,number}) => {

    console.log(chartData);
    return (
      <div className="chartBox">
        <div className="boxInfo">
          <div className="title">
            <img src={icon} alt="" />
            <span>{title}</span>
          </div>
          <h1>{number}</h1>
          <Link to="/" style={{ color:color }}>
            View all
          </Link>
        </div>
        <div className="chartInfo">
          <div className="chart" >
            <ResponsiveContainer width="99%" height="100%">
              <LineChart data={chartData}>
                <Tooltip
                  contentStyle={{ background: "transparent", border: "none" }}
                  labelStyle={{ display: "none" }}
                  position={{ x: 10, y: 70 }}
                />
                <Line
                  type="monotone"
                  dataKey={dataKey}
                  stroke={color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="texts">
            <div
              className="percentage"
              style={{ color:percentage < 0 ? "tomato" : "limegreen",marginLeft:'3px'}}
            >
              {percentage}%
            </div>
            <div className="duration">this month</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ChartBox
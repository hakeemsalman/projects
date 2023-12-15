import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
import './barChartBox.scss'

const BarChartBox = (props) => {
  return (
    <div className='barChartBox'>
      <h1>{props.title}hiii</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: '#2e3447', borderRadius: '5px' }}
              labelStyle={{ display: 'none' }}
              cursor={{fill: 'none'}}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarChartBox
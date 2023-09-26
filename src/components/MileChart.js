import React from 'react'
import {ResponsiveContainer, BarChart, Bar, XAxis, Tooltip} from 'recharts';
import { mileStatics } from './mileStatics';


export const MileChart = () => {
  return (
    <ResponsiveContainer width='100%' >
    <BarChart data={mileStatics}>
      <XAxis dataKey='name' stroke="#00b33c" />
      <Bar dataKey='mileStats' stroke="#00b33c" fill="#00b33c"   barSize={30} />
      <Tooltip />
    </BarChart>
    </ResponsiveContainer>
  )
}



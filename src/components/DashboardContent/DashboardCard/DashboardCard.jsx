import React from 'react'
import './DashboardCard.css'
export const DashboardCard = ({title, value, icon, subtitle}) => {
  return (
    <div className='dashboard-card-content'>
        <div className='area-text-icon'>
            <div className='area-title-value'>
                <h3 className='card-title'>{title}</h3>
                <span className='card-value'>{value}</span>
                <span className='card-extra-info'>{subtitle}</span>
            </div>
            <div className='card-icon-area'>
                {icon}
            </div>
        </div>

    </div>
  )
}

/*<div className="bg-white dark:bg-card rounded-xl p-5 card-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
          <p className="text-2xl font-semibold mt-1">{value}</p>
          {subtitle && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>
          )}
        </div>
        <div className="p-2.5 bg-lumis-100 dark:bg-lumis-900/40 rounded-lg text-lumis-600 dark:text-lumis-400">
          {icon}
        </div>
      </div>
      {trend && (
        <div className="flex items-center mt-2">
          <span
            className={`text-xs font-medium flex items-center ${
              trend.isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {trend.isPositive ? "+" : "-"}
            {Math.abs(trend.value)}%
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1.5">desde o último mês</span>
        </div>
      )}
    </div>
*/
import React, { useEffect } from 'react';
import { Chart } from 'react-google-charts';

const GoogleChart: React.FC = () => {
  useEffect(() => {
    // Check if Google Charts API is loaded
    if (typeof google !== 'undefined') {
      google.charts.load('current', { packages: ['corechart'] });
      google.charts.setOnLoadCallback(drawStuff);
    }

    function drawStuff() {
      const data = new google.visualization.DataTable();
      data.addColumn('string', 'Country');
      data.addColumn('number', 'GDP');
      data.addRows([
        ['1', 7000.00],
        ['2', 10990.00],
        ['3', 4998.00],
      ]);

      const options = {
        width: 500,
        height: 350,
        legend: 'none' as const,
        backgroundColor: 'transparent',
        colors: ['limegreen', '#52FF00'],
        bar: { groupWidth: '35%' },
        baselineColor: '#fff',
        gridlineColor: '#000',
        vAxis: { gridlines: { count: 1 }, textStyle: { color: '#FFF' } },
        hAxis: { textStyle: { color: '#FFF' } },
      };

      const chart = new google.visualization.ColumnChart(document.getElementById('number_format_chart')!);
      chart.draw(data, options);
    }

    // Handle window resize
    window.addEventListener('resize', drawStuff);
    
    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', drawStuff);
    };
  }, []); // empty dependency array ensures this useEffect runs once on component mount

  return (
    <div id="number_format_chart">
      <Chart
        width={'500px'}
        height={'350px'}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Country', 'GDP'],
          ['1', 7000.00],
          ['2', 10990.00],
          ['3', 4998.00],
        ]}
        options={{
          legend: 'none',
          backgroundColor: 'transparent',
          colors: ['limegreen', '#52FF00'],
          bar: { groupWidth: '35%' },
          baselineColor: '#fff',
          gridlineColor: '#000',
          vAxis: { gridlines: { count: 1 }, textStyle: { color: '#FFF' } },
          hAxis: { textStyle: { color: '#FFF' } },
        }}
      />
    </div>
  );
};

export default GoogleChart;

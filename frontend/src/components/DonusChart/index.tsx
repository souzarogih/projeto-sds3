
import Chart from 'react-apexcharts';

const DonusChart = () => {

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088, 140232],
        labels: ['Barry Allen', 'Paulo', 'Marcos', 'Pedro', 'João', 'Thiago']
    }

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: mockData.labels }}
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonusChart;
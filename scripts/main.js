Highcharts.chart('cpuShare', {
    chart: {
        type: 'area'
    },
    title: {
        useHTML: true,
        text: 'CPU Marketshare Among PC Users by Manufacturer',
        align: 'left'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://store.steampowered.com/hwsurvey"' +
            'target="_blank">Steam Hardware Survey</a>' + ', ' + '<a href="https://observablehq.com/@myagues/trends-from-the-steam-hardware-software-survey"' +
            'target="_blank">@myagues on ObservableHQ</a>',
        align: 'left'
    },
    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. {point.category}, {point.percentage:.1f}%.'
        }
    },
    yAxis: {
        labels: {
            format: '{value}%'
        },
        title: {
            enabled: false
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>' +
            ': <b>{point.percentage:.1f}%</b> <br/>',
        split: true
    },
    plotOptions: {
        series: {
            pointStart: 2012
        },
        area: {
            stacking: 'percent',
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'AMD',
        data: [
            26.83, 26.77, 25.89, 27.74, 23.74, 21.57, 8.71, 17.58, 16.06, 24.33, 39.96
        ]
    }, {
        name: 'Intel',
        data: [
            73.17, 73.22, 74.11, 74.26, 76.26, 78.41, 91.11, 82.4, 83.92, 75.67, 69.02
        ]
    }]
});

Highcharts.chart('freeDriveSpace', {
    chart: {
        type: 'column'
    },
    title: {
        align: 'left',
        text: 'Free Hard Drive Space September, 2024'
    },
    subtitle: {
        align: 'left',
        text: 'Source: <a href="https://store.steampowered.com/hwsurvey" target="_blank">Steam Hardware Survey</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Percent of users'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: ' +
            '<b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: 'Browsers',
            colorByPoint: true,
            data: [
                {
                    name: 'Above 4 TB',
                    y: 6.99
                },
                {
                    name: '3 TB to 4 TB',
                    y: 2.43
                },
                {
                    name: '2 TB to 3 TB',
                    y: 3.07
                },
                {
                    name: '1 TB to 2 TB',
                    y: 9.77
                },
                {
                    name: '750 GB to 999 GB',
                    y: 8.78
                },
                {
                    name: '500 GB to 749 GB',
                    y: 10.78
                },
                {
                    name: '250 GB to 499 GB',
                    y: 21.32
                },
                {
                    name: '100 GB to 249 GB',
                    y: 21.89
                },
                {
                    name: '10 GB to 99GB',
                    y: 14.23
                },
                {
                    name: 'Less than 10GB',
                    y: 0.74
                }
            ]
        }
    ]
    }
);

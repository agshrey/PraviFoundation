var canvasElement = document.getElementById("cookieChart");

var config = {
    type: "bar",
    data: {
        labels: ["Average Student in the United States", "Average Student in New Jersey", "Average Student at Bridgewater-Raritan", "Pranav Karra"], 
        datasets: [
            {
                label: "Plugs per day",
                data:[3, 5, 7, 39],
                backgroundColor: [
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                ],
                borderColor: [
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                ],
                borderWidth: 1,
            },
        ],
    },
    options: {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Plugs per Day'
              } ,       
        },
    },
};

var cookieChart = new Chart(canvasElement, config);
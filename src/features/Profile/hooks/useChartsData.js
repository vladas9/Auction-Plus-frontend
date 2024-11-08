export const useChartsData = (user_data) =>{
    const boughtData = {
        labels: user_data.stats.bought_stats.labels,
        datasets: [
            {
                borderRadius: 6,
                label: "Items bought",
                data: user_data.stats.bought_stats.data,
                backgroundColor: [
                    "#FF3A20",
                    "#29ADB2",
                    "#C5E898",
                    "#0766AD",
                    "#F3F3F3",
                ],
                hoverOffset: 40,
            },
        ],
    };

    const soldData = {
        labels: user_data.stats.sold_stats.labels,
        datasets: [
            {
                borderRadius: 6,
                label: "Items sold",
                data: user_data.stats.sold_stats.data,
                backgroundColor: [
                    "#FF3A20",
                    "#29ADB2",
                    "#C5E898",
                    "#0766AD",
                    "#F3F3F3",
                ],
                hoverOffset: 40,
            },
        ],
    };
    const barData = {
        labels: user_data.stats.price_range_stats.labels,
        datasets: [
            {
                type: "bar",
                borderRadius: 6,
                label: "Bought lots",
                data: user_data.stats.price_range_stats.bought_data,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "#0766AD",
            },
            {
                type: "bar",
                label: "Sold lots",
                borderRadius: 6,
                fill: false,
                data: user_data.stats.price_range_stats.sold_data,
                borderColor: "rgb(54, 162, 235)",
                backgroundColor: "#C5E898",
            },
        ],
    };
    return {boughtData, soldData, barData};
}

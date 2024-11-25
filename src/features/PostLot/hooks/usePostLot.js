export var postLot = async (formData) => {
    var updatedDate = formData.end_date.concat(":00Z");
    var toSend = { ...formData, end_date: updatedDate };
    console.log(toSend);
    try {
        var response = await fetch("http://localhost:1169/api/auction/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
            },
            body: JSON.stringify(toSend),
        });
        var res = await response.json();
        if(res.auctionId){
            console.log("lot posted");
        }else{
            console.log("ID not returned")
        }
    } catch (err) {
        console.error(err.message);
    }
};

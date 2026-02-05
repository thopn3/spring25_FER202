const data = {
    "movies": [
        {
            _id:ObjectId(),
            title:"",
            description:"",
            duration:0,
            genre: [""],
            releaseDate:"",
            rating:0,
            status:""
        }
    ],
    "rooms": [
        {
            _id:ObjectId(),
            roomName: "",
            totalSeats:0,
            seatLayout:"",
            seats:[
                {
                    _id:ObjectId(),
                    row:0,
                    column:0,
                    type:""
                }
            ]
        }
    ],
    "showtimes": [
        {
            _id:ObjectId(),
            movieId,
            roomId,
            startTime,
            endTime,
            price
        }
    ],
    "users":[
        {
            _id:ObjectId(),
            name,
            email,
            role:"customer" | "admin"
        }
    ],
    "tickets":[
        {
            _id:ObjectId(),
            showTimeId,
            seatId,
            userId,
            price,
            status: "booked | paid | canceled"
        }
    ]
}
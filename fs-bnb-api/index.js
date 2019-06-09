const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:false}));

const User = require("./user");

const Property = require("./property");

const Booking = require("./booking");

const Provider = require("./provider");



app.post("/users/authentication",  (req, res) => {
    const user = req.body;
    const bodyEmail = user.email;
    const bodyPassword = user.password;

    User.getUserByEmail(bodyEmail, (err, result) => {
        if (err) {
            return res.status(404).json({message: "User not found"});
        } else {
            if (result[0].password === bodyPassword) {
                return res.json(result[0]);
            }
            else {
                return res.status(404).json({message: "Incorrect password"});
            }
            
        }
    })

})


app.post("/providers/authentication",  (req, res) => {
    const user = req.body;
    const bodyEmail = user.email;
    const bodyPassword = user.password;

    Provider.getProviderByEmail(bodyEmail, (err, result) => {
        if (err) {
            return res.status(404).json({message: "User not found"});
        } else {
            if (result[0].password === bodyPassword) {
                return res.json(result[0]);
            }
            else {
                return res.status(404).json({message: "Incorrect password"});
            }
            
        }
    })

})

app.post("/users", (req, res) => {
    const newUser = req.body;
    const bodyEmail = newUser.email;
    
    User.createUser(newUser, (err, result) => {
        console.log(err);
        console.log(result);
        var responseUser = {
            id: result,
            name: newUser.name,
            role: newUser.role,
            email: newUser.email,
            password: newUser.password
          };
          res.json(responseUser);
        
    })
    
    
    
})


app.post("/properties", (req, res) => {
    const newProperty = req.body;
    Property.createProperty(newProperty, (err, result) => {
        console.log(err);
        console.log(result);
        res.json(newProperty);
    })
})

app.post("/providers", (req, res) => {
    const newProvider = req.body;
    Provider.createProvider(newProvider, (err, result) => {
        var responseUser = {
            id: result,
            name: newProvider.name,
            role: newProvider.role,
            email: newProvider.email,
            password: newProvider.password
          };
        console.log(err);
        console.log(result);
        res.json(responseUser);
    })
})

app.post("/bookings", (req, res) => {
    const newBooking = req.body;
    Booking.createBooking(newBooking, (err, result) => {
        console.log(err);
        console.log(result);
        res.json(newBooking);
    })
})






app.get("/users/allusers", (req, res) => {
    User.getAllUsers((err, result) => {
        console.log(err);
        console.log(result);
        res.json(result);
    })
})

app.get("/properties/allproperties", (req, res) => {
    Property.getAllProperties((err, result) => {
        console.log(err);
        console.log(result);
        res.json(result);
    })
})

app.get("/providers/allproviders", (req, res) => {
    Provider.getAllProviders((err, result) => {
        console.log(err);
        console.log(result);
        res.json(result);
    })
})

app.get("/bookings/allbookings", (req, res) => {
    Booking.getAllBookings((err, result) => {
        console.log(err);
        console.log(result);
        res.json(result);
    })
})






app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    const numberUserId = parseInt(userId);
    if (isNaN(numberUserId)) {
        return res.status(400).json({message: "I am expecting an integer"});
    }
    if (!userId) {
        return res.status(400).json({message: "Please pass in a userId"});
    }
    User.getUserById(userId, (err, result) => {
        console.log(err);
        console.log(result);
        res.json(result);
    })
})

app.get("/properties/:id", (req, res) => {
    const propId = req.params.id;
    const numberPropId = parseInt(propId);
    if (isNaN(numberPropId)) {
        return res.status(400).json({message: "I am expecting an integer"});
    }
    if (!propId) {
        return res.status(400).json({message: "Please pass in a propId"});
    }
    Property.getPropertyById(propId, (err, result) => {
        console.log(err);
        console.log(result);
        res.json(result);
    })
})

app.get("/providers/:id", (req, res) => {
    const providerId = req.params.id;
    const numberProviderId = parseInt(providerId);
    if (isNaN(numberProviderId)) {
        return res.status(400).json({message: "I am expecting an integer"});
    }
    if (!providerId) {
        return res.status(400).json({message: "Please pass in a providerId"});
    }
    Provider.getProviderById(providerId, (err, result) => {
        console.log(err);
        console.log(result);
        res.json(result);
    })
})

app.get("/bookings/:id", (req, res) => {
    const bookingId = req.params.id;
    const numberBookingId = parseInt(bookingId);
    if (isNaN(numberBookingId)) {
        return res.status(400).json({message: "I am expecting an integer"});
    }
    if (!bookingId) {
        return res.status(400).json({message: "Please pass in a bookingId"});
    }
    Booking.getBookingById(bookingId, (err, result) => {
        console.log(error);
        console.log(result);
        res.json(result);
    })
})






// app.patch("/user/:id", (req, res) => {
//     const userId = req.params.id;
//     const newUser = req.body;
//     User.updateUserById(userId, newUser.name, newUser.role, newUser.email, newUser.password, (err, result) => {
//         console.log(err);
//         console.log(result);
//     })
// })

// app.patch("/provider/:id", (req, res) => {
//     const providerId = req.params.id;
//     const newProvider = req.body;
//     Provider.updateProviderById(providerId, newProvider.name, newProvider.role, newProvider.email, newProvider.password, (err, result) => {
//         console.log(err);
//         console.log(result);
//     })
// })

// app.patch("/property/:id", (req, res) => {
//     const propertyId = req.params.id;
//     const newProperty = req.body;
//     Property.updatePropertyById(propertyId, newProperty.houseName, newProperty.hostName, newProperty.pricePerNight, newProperty.location, newProperty.imageUrl, newProperty.providerId, (err, result) => {
//         console.log(err);
//         console.log(result);
//     })
// })

// app.patch("/booking/:id", (req, res) => {
//     const bookingId = req.params.id;
//     const newBooking = req.body;
//     Booking.updateBookingbyId(BookingId, newBooking.dateTo, newBooking.dateFrom, newBooking.propertyId, newBooking.userId, (err, result) => {
//         console.log(err);
//         console.log(result);
//     })
// })





app.get("/users/:id/delete", (req, res) => {
    var id = req.params.id;
    User.removeUser(id, (err, result) => {
        console.log(err);
        console.log(result);
        res.json(1);

    })
})

app.get("/properties/:id/delete", (req, res) => {
    var id = req.params.id;
    Property.removeProperty(id, (err, result) => {
        console.log(err);
        console.log(result);
        res.json(1);
    })
})

app.get("/providers/:id/delete", (req, res) => {
    var id = req.params.id;
    Provider.removeProvider(id, (err, result) => {
        console.log(err);
        console.log(result);
        res.json(1);
    })
})
app.get("/bookings/:id/delete", (req, res) => {
    var id = req.params.id;

    Booking.removeBooking(id, (err, result) => {
        console.log(err);
        console.log(result);
        res.json(1);
    })
})


// app.post("/properties/:id/bookings", (req, res) => {
//     const bookingRequest = req.body;
//     // const bodyDateFrom = bookingRequest.dateFrom;
//     // const bodyDateTo = bookingRequest.dateTo;
//     // const bodyUserId = bookingRequest.userId;

//     // var newBookingReq  = {
//     //     id: ++bookingsCount,
//     //     dateFrom: bodyDateFrom,
//     //     dateTo: bodyDateTo,
//     //     userId: bodyUserId,
//     //     propertyId: req.params.id,
//     //     status: "NEW"
//     // }
//     // bookingReqs.push(newBookingReq);
//     // res.json(newBookingReq);

//     Booking.createBooking(bookingRequest, (err, result) => {
//         console.log(err);
//         console.log(result);
//     })
// })

app.get("/properties/:id/bookings", (req, res) => {
    const propertyId = req.params.id;
    const numberPropId = parseInt(propertyId);
    var propertiesofBookings = new Array();
    var bookingsforUser = new Array();
    if (isNaN(numberPropId)) {
        return res.status(400).json({message: "I am expecting an integer"});
    }
    if (!propertyId) {
        return res.status(400).json({message: "Please pass in a propertyId"});
    }
    Booking.getAllBookings((err, result) => {
        propertiesofBookings = result;
        console.log(propertiesofBookings);
        for (var k = 0; k < propertiesofBookings.length; ++k) {
            if (propertiesofBookings[k].propertyId == propertyId) {
                bookingsforUser.push(propertiesofBookings[k]);
            }
        }
        res.json(bookingsforUser);
    })
    // return res.status(404).json({message: "Booking Request not found"});
})

app.get("/users/:id/bookings", (req, res) => {
        const userId = req.params.id;
        const numberPropId = parseInt(userId);
        var propertiesofBookings = new Array();
        var bookingsforUser = new Array();
        if (isNaN(numberPropId)) {
            return res.status(400).json({message: "I am expecting an integer"});
        }
        if (!userId) {
            return res.status(400).json({message: "Please pass in a propertyId"});
        }
    

        Booking.getAllBookings((err, result) => {
            propertiesofBookings = result;
            console.log(propertiesofBookings);
            for (var k = 0; k < propertiesofBookings.length; ++k) {
                if (propertiesofBookings[k].userId == userId) {
                    bookingsforUser.push(propertiesofBookings[k]);
                }
            }
            res.json(bookingsforUser);
        })
        
        // return res.status(404).json({message: "Booking Request not found"});
    })


    app.get("/providers/:id/properties", (req, res) => {
        const providerId = req.params.id;
        const numberPropId = parseInt(providerId);
        var propertiesofBookings = new Array();
        var bookingsforUser = new Array();
        if (isNaN(numberPropId)) {
            return res.status(400).json({message: "I am expecting an integer"});
        }
        if (!providerId) {
            return res.status(400).json({message: "Please pass in a propertyId"});
        }
    

        Property.getAllProperties((err, result) => {
            propertiesofBookings = result;
            console.log(propertiesofBookings);
            for (var k = 0; k < propertiesofBookings.length; ++k) {
                if (propertiesofBookings[k].providerId == providerId) {
                    bookingsforUser.push(propertiesofBookings[k]);
                }
            }
            res.json(bookingsforUser);
        })
        
        // return res.status(404).json({message: "Booking Request not found"});
    })



app.listen(3000, () => console.log("Server is runningn"));

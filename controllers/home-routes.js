const router = require("express").Router();
const sequelize = require("../config/connection");
const { Car, User, Trip } = require("../models");

//get all trip information
// router.get("/", (req, res) => {
//   Trip.findAll({
//     attributes: ["id", "nb_passangers", "user_id", "car_id"],
//     include: [
//       {
//         model: User,
//         attributes: ["id", "name", "email", "password"],
//       },
//       {
//         model: Car,
//         attributes: ["id", "make", "description"],
//       },
//     ],
//   })
//     .then((dbUserData) => {
//       const user = dbUserData.map((user) => user.get({ plain: true }));
//       console.log(user);
//       res.render("homepage", {
//         user,
//         loggedIn: req.session.loggedIn,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
router.get("/", (req, res) => {
  Trip.findAll({
    include: [
      {
        model: User,
        attributes: { exclude: ["password"] },
      },
      {
        model: Car,
      },
    ],
    raw: true,
    nest: true,
  })
    .then((dbTripsData) => {
      // console.log(dbTripsData);
      res.render("homepage", {
        trips: dbTripsData,
        logged_in: req.session.logged_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get specific and one trip information that user wants
router.get("/trip/:id", (req, res) => {
  Trip.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [["id", "nb_passengers", "user_id", "car_id"]],
    include: [
      {
        model: User,
        attributes: ["id", "name", "email", "password"],
      },
      {
        model: Car,
        attributes: ["id", "make", "description"],
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No trip is found with this id" });
      }

      const post = dbUserData.get({ plain: true });

      // res.render('one-trip', {trip})
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/one-way', (req, res) => {
  res.render('one-way')
})

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/booking", (req,res)=>{
  res.render("booking")
})

module.exports = router;


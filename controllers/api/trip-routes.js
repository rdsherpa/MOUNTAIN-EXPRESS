const router = require("express").Router();
const { Trip } = require("../../models");

// The `/api/trips` endpoint

// router.get("/", (req, res) => {
//   // find all categories
//   Category.findAll({
//     include: [
//       {
//         model: Trip,
//       },
//     ],
//   })
//     .then((dbCategoryData) => res.json(dbCategoryData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
//   // be sure to include its associated Products
// });

// router.get("/:id", (req, res) => {
//   // find one category by its `id` value
//   // be sure to include its associated Products
//   Category.findOne({
//     where: {
//       id: req.params.id,
//     },
//     include: [
//       {
//         model: Trip,
//       },
//     ],
//   })
//     .then((dbCategoryData) => {
//       if (!dbCategoryData) {
//         res.status(404).json({ message: "No category is found with this id" });
//         return;
//       }
//       res.json(dbCategoryData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).join(err);
//     });
// });

// router.post("/", (req, res) => {
//   // create a new category
//   Category.create({
//     category_name: req.body.category_name,
//   })
//     .then((dbCategoryData) => res.json(dbCategoryData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.post('/one-way', (req, res) => {
  Trip.create(req.body)
  .then((dbTripData) => res.json(dbTripData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router;

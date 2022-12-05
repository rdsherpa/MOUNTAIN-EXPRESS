const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
//const hbs = exphbs.create({defaultLayout: "main"})

// middleware
const app = express();
const PORT = process.env.PORT || 3001;

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// need to set up cookeies, secret

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// const helpers
const hbs = exphbs.create({
  /*helpers*/
});

app.use(session(sess));

// View engine setup
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static folder
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

app.get("/", (req, res) => {
  res.render("contact");
});

app.post("/send", (req, res) => {
  // console.log(req.body);
  const output = `<p>You have a new contact request <p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Name: ${req.body.company}</li>
    <li>Name: ${req.body.email}</li>
    <li>Name: ${req.body.phone}</li>
    <li>Name: ${req.body.name}</li>
  </ul>
  <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.mountainexpress.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'test@mountainexpress.com', // generated ethereal user
      pass: 'password123', // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false //adding a parameter
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Nodemailer Contact 👻" <test@mountainexpress.com>', // sender address
    to: "sherpariwa@gmail.com", // list of receivers
    subject: "Node Contact Request", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  res.render('contact', {msg:'Email has been sent'})
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("app is now listening"));
});

// http://localhost:3001/

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt-nodejs';
import knex from 'knex';

import { InjectionTest } from './Tools/InjectionTest';
import { GenerateSalt } from './Tools/GenerateSalt';

import Signin from './Components/Signin';
import Register from './Components/Register';
import UpdateTable from './Components/UpdateTable';
import FetchData from './Components/FetchData';
import AddData from './Components/AddData';
import Ingredient from './Components/Ingredient';
import Allergy from './Components/Allergy';
import Equipment from './Components/Equipment';
import RemoveData from './Components/RemoveData';
import Socials from './Components/Socials';
import Reservations from './Components/Reservations';
import GetAll from './Components/GetAll';
import BookingAllergies from './Components/BookingAllergies';
import BookingIngredients from './Components/BookingIngredients';
import BookingEquipment from './Components/BookingEquipment';
import NoWorkDays from './Components/NoWorkDays';
import Messaging from './Components/Messaging';

const PORT = process.env.HTTP_PORT || 4001;
const app = express();

const db = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'liamfudge',
		password: '',
		database: 'chefdb'
	}
});

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
	res.json('this is the server');
})

app.post('/register', (req,res) => {Register.Register(req, res, bcrypt, db) });

app.post('/signin', (req, res) => {Signin.Signin(req, res, bcrypt, db) });

app.post('/update', (req, res) => {UpdateTable.UpdateTable(req, res, db) });

app.post('/fetch', (req, res) => {FetchData.FetchData(req, res, db) });

app.post('/addData', (req, res) => {AddData.AddData(req, res, db) });

app.post('/ingredient', (req, res) => {Ingredient.Ingredient(req, res, db) });

app.post('/allergies', (req, res) => {Allergy.Allergy(req, res, db) });

app.post('/equipment', (req, res) => {Equipment.Equipment(req, res, db) });

app.post('/remove', (req, res) => {RemoveData.RemoveData(req, res, db) });

app.post('/socials', (req, res) => {Socials.Socials(req, res, db)});

app.post('/reservations', (req, res) => {Reservations.Reservations(req, res, db)});


app.post('/messaging', (req, res) => {Messaging.Messaging(req, res, db)});



app.post('/getall', (req, res) => {GetAll.GetAll(req, res, db)});

app.post('/bookingAllergies', (req, res) => {BookingAllergies.BookingAllergies(req, res, db)});

app.post('/bookingIngredients', (req, res) => {BookingIngredients.BookingIngredients(req, res, db)});

app.post('/bookingEquipment', (req, res) => {BookingEquipment.BookingEquipment(req, res, db)});

app.post('/noworkdays', (req, res) => {NoWorkDays.NoWorkDays(req, res, db)});




app.listen(PORT, () => {
	console.log(`Server listening at port ${PORT}.`);
});








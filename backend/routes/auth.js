import express from 'express';
import db from '../config/db.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

router.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    const checkEmailQuery = 'select * from user_data where email = ?';
    db.query(
        checkEmailQuery,
        [email],
        (err, result) => {
            if (err) {
                return res.send({ messsage: "Error while adding user", error: err })
            }

            console.log(result)
            if (result.length > 0) {
                return res.send({ message: "Email already exists!" })
            }

            // Hash password
            const hashedPassword = bcrypt.hashSync(password, 10);
            const insertQuery = 'insert into user_data (name, email, password) values (?, ? ,?)';
            db.query(
                insertQuery,
                [name, email, hashedPassword],
                (err, result) => {
                    if (err) return res.send({ message: "Error inserting user", error: err })
                    return res.send({ message: "user added successfully!" })
                }
            )
        }
    )
})

export default router;
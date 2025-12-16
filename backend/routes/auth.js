import express from 'express';
import db from '../config/db.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    const checkEmailQuery = 'select * from user_data where email = ?';
    db.query(
        checkEmailQuery,
        [email],
        (err, result) => {
            if (err) {
                return res.send({ messsage: "Error while checking mail", error: err })
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


router.post('/login', (req, res) => {
    const { email, password } = req.body;

    //checkEmailQuery
    const checkEmailQuery = "Select * from user_data where email = ?";
    db.query(checkEmailQuery, [email], (err, result) => {
        if (err) {
            return res.send({ message: "Error in checking mail id", error: err })
        }
        if (result.length === 0) {
            return res.send({ message: "User doesn't exist" })
        }

        const user = result[0];
        //check password
        const isPasswordCorrect = bcrypt.compareSync(password, user.PASSWORD);
        if (!isPasswordCorrect) {
            return res.send({ message: "Password doesn't match" })
        }

        //token generate
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            }, process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )

        //store cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        })
        return res.status(200).json({
            message: "Login successful"
        });

    })
})

export default router;

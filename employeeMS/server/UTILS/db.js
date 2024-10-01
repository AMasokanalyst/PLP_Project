// creating connection to mysql
import mysql from 'mysql2'

const con = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: 'ClientsMS'
})

con.connect((err) =>{
    if(err){
        console.log('database connection', err)
    } else {
        console.log("connected to the database succefully")
    }
})

export default con;
import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "**********",
    database: "test"
})

con.connect(function(err) {
    if(err) {
        console.log("connection error")
        console.log(err)
    } else {
        console.log("Connected")
    }
})

export default con;

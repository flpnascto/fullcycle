const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};
const mysql = require('mysql2/promise')
const connection = mysql.createPool(config)
connection.execute(`CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))`)

// const sql = `INSERT INTO people(name) values('Wesley')`
// connection.query(sql)
// connection.end()

// const queryNames = `SELECT name FROM nodedb.people`
// const { results } = connection.query(queryNames)
// connection.end()

// console.log('SELECT: ', results)

// const listHtml = selectNames.map(name => `<li>${name}</li>`).join('')
// const html = `<h1>Full Cycle Rocks!</h1><ul>${listHtml}</ul>`


app.get('/', async (req, res) => {
  const values = [
    [1, 'Wesley'],
    [2, 'Felipe']
  ]
  await connection.execute("INSERT INTO people (name) VALUES ('Felipe')")
  const [ rows ]  = await connection.execute(`SELECT name FROM people`)

  const listHtml = rows.map(row => `<li>${row.name}</li>`).join('')
  const html = `<h1>Full Cycle Rocks!</h1><ul>${listHtml}</ul>`


  // connection.end()

  res.send(html)
});

app.listen(port, () => console.log(`Running on port ${port}!`))
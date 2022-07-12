const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, create_date, modified_date 
     FROM team`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data
  }
}

async function create(team) {
  const result = await db.query(
    `INSERT INTO team (name, create_date, modified_date)
     VALUES
     ("${team.name}", "${team.create_date}", "${team.modified_date}")`
  );

  let message = 'Error in creating new artifact';

  if (result.affectedRows) {
    message = 'Team created successfully';
  }

  return {message};
}

async function update(id, team) {
  const result = await db.query(
    `UPDATE team
     SET name="${team.name}", modified_date="${team.modified_date}"
     WHERE id=${id}`
  );
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM team WHERE id=${id}`
  );
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}
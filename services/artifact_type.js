const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, create_date, modified_date 
     FROM artifact_type`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data
  }
}

async function create(artifact_type) {
  const result = await db.query(
    `INSERT INTO artifact_type (name, create_date, modified_date)
     VALUES
     ("${artifact_type.name}", "${artifact_type.create_date}", "${artifact_type.modified_date}")`
  );

  let message = 'Error in creating new artifact type';

  if (result.affectedRows) {
    message = 'Artifact Type created successfully';
  }

  return {message};
}

async function update(id, artifact_type) {
  const result = await db.query(
    `UPDATE artifact_type
     SET name="${artifact_type.name}", modified_date="${artifact_type.modified_date}"
     WHERE id=${id}`
  );
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM artifact_type WHERE id=${id}`
  );
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}
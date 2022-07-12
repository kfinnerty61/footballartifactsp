const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const res = require('express/lib/response');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, team_id, artifact_type_id, create_date, modified_date 
     FROM artifact`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data
  }
}

async function create(artifact) {
  const result = await db.query(
    `INSERT INTO artifact (team_id, artifact_type_id, create_date, modified_date)
     VALUES
     (${artifact.team_id}, ${artifact.artifact_type_id}, ${artifact.create_date}, ${artifact.modified_date})`
  );

  let message = 'Error in creating new artifact';

  if (result.affectedRows) {
    message = 'Artifact created successfully';
  }

  return {message};
}

async function update(id, artifact) {
  const result = await db.query(
    `UPDATE artifact
     SET team_id="${artifact.team_id}", artifact_type_id="${artifact.artifact_type_id}",
         modified_date="${artifact.modified_date}"
     WHERE id=${id}`
  );
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM artifact WHERE id=${id}`
  );
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}
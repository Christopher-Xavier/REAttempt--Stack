const pool = require('../../databasePool');

class TraitTable {
  static getTraitId({ traitType, traitValue }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT id FROM trait
        WHERE "traitType" = $1 AND "traitValue" = $2`,
        [traitType, traitValue],
        (error, response) => {
          if (error) {
            return reject(error);
          }

          resolve({ traitId: response.rows[0].id });
        }
      )
    })
  }
}

const data = async function getData() {
  const testTraitId = await TraitTable.getTraitId({ traitType: 'backgroundColor', traitValue: 'gold' })

  console.log("testTraitId", testTraitId);

};
data();


module.exports = TraitTable;

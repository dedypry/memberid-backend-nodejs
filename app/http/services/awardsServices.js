const AwardsModel = require('../../models/awards');

async function list(query) {
  return await AwardsModel.query()
      .where((bulder)=> {
        if (query.point) {
          bulder.whereBetween('point', [10000, query.point]);
        }
        if (query.type) {
          const sp = query.type.split(',').map((e)=> e.toUpperCase());
          bulder.whereIn('type', sp);
        }
      })
      .page(query.page || 0, query.count || 10);
}

module.exports={
  list,
};

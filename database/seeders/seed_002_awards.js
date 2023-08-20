const AwardsModel = require('../../app/models/awards');

exports.seed = async function(knex) {
  const array = ['VOUCHER', 'PRODUCT', 'GIFTCARD'];
  const array2 = ['Gift Card', 'Old Fashion Cake'];
  const images = [
    'https://hips.hearstapps.com/hmg-prod/images/best-gift-cards-2021-1637270343.jpg?crop=0.771xw:1.00xh;0.115xw,0&resize=980:*',
    'https://www.niemanlab.org/images/Viktoriaa-Liutova-e1624366176190.png',
    'https://www.photojaanic.sg/blog/wp-content/uploads/sites/3/2020/04/image2-1080x720.jpg',
  ];
  const numberOfIterations = 100;
  const minRange = 10000;
  const maxRange = 1000000;

  for (let i = 0; i < numberOfIterations; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomIndex2 = Math.floor(Math.random() * array2.length);
    const randomImages = Math.floor(Math.random() * images.length);
    const randomImage = images[randomImages];
    const randomItem = array[randomIndex];
    const randomName = array2[randomIndex2];
    const randomPrice = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    const randomPoint = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

    await AwardsModel.query().insert({
      name: randomName,
      point: randomPoint,
      price: randomPrice,
      type: randomItem,
      image: randomImage,
    });
  }
};

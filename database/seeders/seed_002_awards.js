const AwardsModel = require('../../app/models/awards');

exports.seed = async function(knex) {
  const array = ['VOUCHER', 'PRODUCT', 'GIFTCARD'];
  const array2 = ['Gift Card', 'Old Fashion Cake'];
  const images = [
    'https://firebasestorage.googleapis.com/v0/b/member-id-7d308.appspot.com/o/img33%20(2).png?alt=media&token=766ee35b-6185-4da7-84d1-e83be9887eb6',
    'https://firebasestorage.googleapis.com/v0/b/member-id-7d308.appspot.com/o/img2%20(2).jpeg?alt=media&token=f1e5a756-5c9e-48b1-8eaf-9fca6a316820',
    'https://firebasestorage.googleapis.com/v0/b/member-id-7d308.appspot.com/o/image1-2.jpeg?alt=media&token=35b2cf90-a853-4010-a3ee-8aee438b2be0',
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

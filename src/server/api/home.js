import express from 'express';

const router = express.Router();

let calls = 0;

router.route('/time')
  .get((req, res) => {
    calls++;
    setTimeout(() => {
      if (calls % 10 !== 0) {
        const time = new Date();
        res.status(200).send({time}).end();
      } else {
        res.status(500).send({errorMessage: 'Happens every 10th time.'});
      }
    }, 200);

  });

export default router;

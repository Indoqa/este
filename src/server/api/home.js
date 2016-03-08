import express from 'express';

const router = express.Router();

let calls = 0;

router.route('/time')
  .get((req, res) => {
    calls++;
    setTimeout(() => {
      if (calls % 10 !== 0) {
        const time = new Date();
        res.status(200).send({time: time}).end();
      } else {
        res.status(500).send({errorMessage: 'Happens every second time.'});
      }
    }, 200);

  });

export default router;

import express from 'express';

const router = express.Router();

var calls = 0;

router.route('/time')
  .get((req, res, next) => {
    calls++;
    // Simulate async access.
    setTimeout(() => {
      if(calls % 2 == 0){
        const time = new Date();
        res.status(200).send({time: time}).end();
      }else{
        res.status(500).send({errorMessage : 'Happens every second time.'});
      }
    }, 50);

  });

export default router;

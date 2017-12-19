let express = require('express');
let router = express.Router();
let model = require('../model/tasks')();

/* GET home page. */
router.get('/', (req, res, next) => {
  model.find(null, (err, tasks) => {
    if(err) {
      throw err;
    }
    res.render('index', { title: 'Agenda', tasks: tasks });
  });
});

router.post('/add', (req, res, next) => {
  let body = req.body;
  body.status = false;
  model.create(body, (err, task) => {
    if(err) {
      throw err;
    }
    res.redirect('/'); 
  })
})

router.get('/details/:id', (req, res, next) => {
  let id = req.params.id;
  model.findById(id, (err, task) => {
    if(err) {
      throw err;
    }
    res.send(task)
  })
})

router.get('/turn/:id', (req, res, next) => {
  let id = req.params.id;
  model.findById(id, (err, task) => {
    if(err) {
      throw err;
    }
    task.status = !task.status;
    task.save(() => {
      res.redirect('/');
    });
  })
})

router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id;
  model.findByIdAndRemove(id, (err, task) => {
    if(err) {
      throw err;
    }
    res.redirect('/');
  })
})

module.exports = router;

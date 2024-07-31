const router = require('express').Router();
const { Feedback, User, CoffeeShop } = require('../../models');
const withAuth = require('../../utils/auth');

// This route is for creating a new feedback - endpoint: /localhost:3001/api/feedbacks/id
router.post('/:id', withAuth, async (req, res) => {
    console.log(req.body);
    try {
        const currentDate = new Date();
        const newFeedback = await Feedback.create({
            description: req.body.description,
            date: currentDate,
            user_id: req.session.user_id,
            coffee_shop_id: req.params.id,
        });

        res.status(200).json(newFeedback);
        console.log(newFeedback);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id/edit', withAuth, async (req, res) => {
    console.log(req.params.id);
    try {
        const feedback = await Feedback.findByPk(req.params.id, {
            include: [
              {
                model: CoffeeShop,
                attributes: ['name'],
              },
              {
                model: User,
                attributes: ['username', 'email', 'id'],
                include: [
                  {
                    model: CoffeeShop,
                    attributes: ['name'],
                  },
                ],
              }
            ],
          });
        console.log(feedback);
        const feedbackData = feedback.get({ plain: true });
        console.log(feedbackData);
        
        res.render('editFeedback', { 
            ...feedbackData,
            loggedIn: req.session.loggedIn,
        });
        
    } catch (error) {
        console.log(error);
    }
    

});


router.put('/:id', withAuth, async (req, res) => {
    try {
        const [affectedRows] = await Feedback.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if(affectedRows > 0) {
            res.status(200).end();
            // res.redirect('/api/coffeeshops/:id'); //Change this line
        } else {
            res.status(404).end();
        }
        
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    console.log("DELETE FEEDBACK ROUTE!");
    try {
        const affectedRows = await Feedback.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).end();
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
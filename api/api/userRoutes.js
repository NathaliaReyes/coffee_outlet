const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// This route is for creating a new user - endpoint: /localhost:3001/api/users  --TESTED CHECK!
router.post('/', async (req, res) => {
  console.log('Request body: ', req.body);  
  try {
        const userData = await User.create(req.body);
        console.log('UserData: ', userData);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;
            res.status(200).json(userData);
        });
    } catch (err) {
      console.log(err);
        res.status(400).json(err);
    }
});

// This route is for finding a user by name - endpoint: /localhost:3001/api/users/profile --TESTED CHECK!
// router.get('/profile', withAuth, async (req, res) => {
//     try {
//         const userData = await User.findOne({
//             where: { username: req.body.username }
//         });
//         if (!userData) {
//             res.status(400).json({ message: 'No user found with that username!' });
//             return;
//         }
//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// This route is for logging in a user - endpoint: /localhost:3001/api/users/login --TESTED CHECK!
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ 
        where: { 
          email: req.body.email 
        } 
      });
      console.log(userData);
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
});

// This route is for logging out a user - endpoint: /localhost:3001/api/users/logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
      console.log('You are now logged out!');
    } else {
      res.status(404).end();
    }
});

module.exports = router;
const router = require('express').Router();
const { CoffeeShop, Feedback, User } = require('../../models');
const withAuth = require('../../utils/auth');
const upload = require('../../public/js/uploadFile.js');

router.get('/city/:city', async (req, res) => {
    try {
        const coffeeshops = await CoffeeShop.findAll({
            where: {
                city: req.params.city,
            },
        });
        const coffeeShopPlain = coffeeshops.map(coffeeshop => coffeeshop.toJSON());
        res.render('city', {
            coffeeshops: coffeeShopPlain,
            loggedIn: req.session.loggedIn,
        });
        console.log(coffeeShopPlain);
    } catch (err) {
        res.status(500).json(err);
    }
});

// This route is for creating a new coffee shop - endpoint: /localhost:3001/api/coffeeshops/addCoffeeshop
router.post('/addCoffeeshop', withAuth, upload.single('coffeeShopPicture'), async (req, res) => {
    console.log(req.body);
    try {
        let picture;
        if (req.file) {
            // If a file was uploaded, use the file path
            picture = req.file.path.replace(/\\/g, '/');
            if(picture.startsWith('/upload/images/upload/images/')){
                picture = picture.replace('/upload/images/upload/images/', '/upload/images/');
            }
        } else if (req.body.pictureUrl) {
            // If a URL was entered, use the URL
            picture = req.body.pictureUrl;
        }

        const newCoffeeShop = await CoffeeShop.create({
            ...req.body,
            user_id: req.session.user_id,
            picture: picture,
            // picture: req.file.path.replace(/\\/g, '/'),
        });
        res.status(200).json(newCoffeeShop);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



// This route is for updating a coffee shop - endpoint: /localhost:3001/api/coffeeshops/:id
// TESTED CHECK!
router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatedCoffeeShop = await CoffeeShop.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!updatedCoffeeShop[0]) {
            res.status(404).json({ message: 'No coffee shop found with this id!' });
            return;
        }

        res.status(200).json(updatedCoffeeShop);
    } catch (err) {
        res.status(500).json(err);
    }
});

// This route is for deleting a coffee shop - endpoint: /localhost:3001/api/coffeeshops/:id
// TESTED CHECK!
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deletedCoffeeShop = await CoffeeShop.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!deletedCoffeeShop) {
            res.status(404).json({ message: 'No coffee shop found with this id!' });
            return;
        }

        res.status(200).json(deletedCoffeeShop);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get a specific coffee shop
router.get('/:id', withAuth, async (req, res) => {
    try {
        const coffeeShopData = await CoffeeShop.findByPk(req.params.id, {

            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Feedback,
                    attributes: ['id', 'description', 'created_on', 'user_id', 'coffee_shop_id'],
                    include: {
                        model: User,
                        attributes: ['username'],
                    }
                },
            ],
        });
        console.log("CoffeeShop data HERE: ",coffeeShopData);
        if (!coffeeShopData) {
            res.status(404).json({ message: 'No coffee shop found with this id!' });
            return;
        }
        const coffeeShop = coffeeShopData.get({ plain: true });
        console.log(coffeeShop);
        // coffeeShop.picture = `/${coffeeShop.picture}`
        // coffeeShop.Feedbacks.forEach(feedback => {

        //     console.log(`Feedback ID: ${feedback.id}`);
        // });
        res.render('coffeeshop', {
            ...coffeeShop,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
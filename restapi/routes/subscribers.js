const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber.js')

router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', getSubscriber, (req, res) => {
    res.json(subscriber)
});

router.post('/', async (req, res) => {
    const subscribers = new Subscriber({
        userName: req.body.userName,
        userChanel: req.body.userChanel
    });
    try {
        const newSubscriber = await subscribers.save()
        res.status(201).json(newSubscriber)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

router.patch('/:id', getSubscriber, async (req, res) => {
    if (req.body.userName != null) {
        res.subscriber.userName = req.body.userName
    }
    if (req.body.userChanel != null) {
        res.subscriber.userChanel = req.body.userChanel
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});

router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await res.subscriber.deleteOne()
        res.json({message: 'Subscriber was deleted'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

async function getSubscriber(req, res, next) {
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({message: "Subscriber not found!"})
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

    res.subscriber = subscriber
    next()
}

module.exports = router;
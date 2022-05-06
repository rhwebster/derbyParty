const express = require("express");

const router = express.Router()
const horses = require('../../../horseData');

router.get('/', asyncHandler(async (req, res) => {
    const horseList = horses;
    res.json({ horseList });
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const horseId = req.params.id-1;
    const horse = horses[horseId];
    res.json({ horse });
}));

router.put('/:id/edit', asyncHandler( async (req, res) => {
    let { id, name, bettor } = req.body;
    const horseId = req.params.id - 1
    const horse = await horses[horseId];
    horse.bettor = bettor;
}))
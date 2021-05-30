// Dependencies here!
const router = require('express').Router();
const { Commentss } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Commentss.findAll()
        .then(dbCommentssData => res.json(dbCommentssData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    Commentss.create({
        Commentss_text: req.body.Commentss_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id
    })
        .then(dbCommentssData => res.json(dbCommentssData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
    Commentss.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentssData => {
            if (!dbCommentssData) {
                res.status(404).json({ message: 'No Commentss found for this id!' });
                return;
            }
            res.json(dbCommentssData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
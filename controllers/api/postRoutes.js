const router = require('express').Router();
const sequelize = require('../../config/connections');
const { Post, User, Commentss } = require('../../models');
const withAuth = require('../../utils/auth');

// Users all here!!
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      order: [['createdAt', 'DESC']],
      attributes: [
        'id',
        'body',
        'title',
        'createdAt'
        
        
      ],
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Commentss,
          attributes: ['id', 'body', 'post_id', 'user_id', 'createdAt'],
          
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_text',
            'title',
            'createdAt',
        ],
        include: [
          {
            model: Commentss,
            attributes: ['id', 'Commentss_text', 'post_id', 'user_id', 'createdAt'],
            include: {
                model: User,
                attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username']
          }
      ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found for this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        post_text: req.body.post_text,
        user_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', withAuth, (req, res) => {
    Post.update(
        {
            title: req.body.title,
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found for this id'});
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete(':/id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Post.destroy({
        where: {
           id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found for this id'});
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;

const router = require("express").Router();
const { Comment} = require("../../models/");
const withAuth = require("../../utils/auth");


router.get('/', (req, res) => {
  Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//router.post("/", withAuth, (req, res) => {
  router.post('/', (req, res)=>{

    const postId=parseInt(req.body.postId);

    console.log('adding comments: ', req.body);
    console.log(req.session);
  Comment.create({
    post_id: postId,
    comment_text: req.body.comment_text,
    user_id: 1}) //req.session.userId })
  
    .then(newComment => {
      console.log('trying this too!')
      res.json(newComment);
    })
    .catch(err => {
      res.status(500).json(err);
      console.log('error is: ', err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

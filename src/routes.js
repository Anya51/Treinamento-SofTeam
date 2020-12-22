const router = require('express').Router()
const animeController = require('./Controllers/AnimeController')

router.get('/' , (req, res) => {
  res.status(200).json({welcome_message: 'Olá, bem vindo a minha API de animes'})
})

router.get('/animes', animeController.index)
router.get('/anime/:id', animeController.show)
router.post('/store', animeController.store)
router.put('/update/:id', animeController.update)
router.delete('/delete/:id', animeController.destroy)



module.exports = router

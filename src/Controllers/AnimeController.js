const jikan = require('../Api/jikan')
const Anime = require('../Models/anime')

const AnimeController = {

  // Get All
  async index(req, res) {
      const animes = await Anime.find({});
      return res.status(200).json(animes);
  },


  // Get
  async show(req, res) {
      const id = req.params.id;
      const anime = await Anime.findById(id);

      if (!anime) {
        return res.status(400).json({ message: "Anime não encontrado!" });
      }

      return res.status(200).json(anime);
  },

  // Create
  async store(req, res) {
      if(Object.keys(req.body).length === 0){
        const topAnimes  = await jikan()
        for (const anime of topAnimes) {
          let { end_date, episodes, rank, score, start_date, title} = anime
          const titleExists = await Anime.findOne({ title });

          if (titleExists) {
            return res.status(400).json({ message: "Título já existente!" });
          }

          await Anime.create({
            end_date,
            episodes,
            rank,
            score,
            start_date,
            title
          });

        }
        return res.status(200).json(topAnimes)
      }


      const { end_date, episodes, rank, score, start_date, title} = req.body;
      const titleExists = await Anime.findOne({ title });

      if (titleExists) {
        return res.status(400).json({ message: "Título já existente!" });
      }

      const anime = await Anime.create({
        end_date,
        episodes,
        rank,
        score,
        start_date,
        title
      });


      return res.status(201).json(anime)
  },

  async update(req, res) {
      const id = req.params.id;
      const data = req.body;

      const anime = await Anime.updateOne(
        { _id: id },
        {
          $set: { ...data },
        }
      );

      if (!anime) {
        return res.status(400).json({ message: "Anime não encontrado!" });
      }

      return res.status(200).json(anime);
  },

  // Delete
  async destroy(req, res) {
      const id = req.params.id;
      const anime = await Anime.findByIdAndDelete(id);

      if (!anime) {
        return res.status(400).json({ message: "Anime não encontrado!" });
      }

      return res.status(200).json(anime);
  },
}

module.exports = AnimeController
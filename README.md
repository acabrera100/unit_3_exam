# Unit 3 Exam

A marine biology research team needs our help! Their old database wasn't doing a great job at organizing their research data. They do a lot of work in the field, and they keep track of all of it- they log every sighting of an animal species, they place GPS tags on animals to keep track of them, and they make sure to keep track of which habitats are home to which species.

Therefore, we are going to create a database for them with the following tables:

- **Researchers**: Rows represent each individual member of the research team.
- **Species**: Rows represent each different type of animal species (e.g. dolphin or sting ray).
- **Animals**: Rows represent each animal researchers have found and tagged.
- **Habitats**: Rows represent different types of habitats in the researchers' area (e.g. reef, beach, shallows, deeps).
- **Taggings**: Rows represents each individual time a researcher found and tagged a specific animal.
- **Sightings**: Rows represent each time a researcher saw a specific species in a particular habitat.

Based on these descriptions, we can conclude:

- Researchers have many Taggings (they tag animals), and Sightings (they see species).

- SPECIES HAVE MANY ANIMALS (ANIMALS HAVE SPECIES), AND MANY SIGHTINGS (DIFFERENT SPECIES ARE SEEN IN DIFFERENT ENVIRONMENTS).

- Animals have one Species (a dolphin is a dolphin) and many Taggings (different researchers might tag the same animal).
- Taggings have one Researcher and one Animal (a researcher tags an animal - this is a join table).
- Sightings have one Researcher, one Species, and one Habitat (a particular researcher sees a species in a habitat - this is a join table).
- Habitats have many sightings (many sightings happen in a specific habitat).

Take a look at `schema.md` in this repo for a detailed description of what the tables should look like, as well as seed data describing what they should contain.

Once we create our database, we need to provide the research team with a robust RESTful API to make it easy for them to see and update information. Take a look at `routes.md` for a full list of the routes this API should have. Please make sure to link it up with your Postgres database!

The format for all responses should be a JSON object with up to three keys:

- `status` - Either `success` or `error`
- `message` - Either `got all users` or an error message
- `body` - Your response from SQL (if necessary - not necessary for POST or DELETE requests).

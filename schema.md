## Tables and Columns

- **Researchers**
  <!-- - `id`: Integer, primary key. -->
  <!-- - `name`: String. -->
  <!-- - `job_title`: String. -->
- **Species**
  <!-- - `id`: Integer, primary key. -->
  <!-- - `name`: String. -->
  <!-- - `is_mammal`: Boolean. -->
- **Animals**
  <!-- - `id`: Integer, primary key. -->
  <!-- - `species_id`: Integer, foreign key referencing `id` column in Species table. -->
  <!-- - `nickname`: String. -->
- **Habitats**
  <!-- - `id`: Integer, primary key. -->
  <!-- - `category`: String. -->
- **Taggings**
  <!-- - `id`: Integer, primary key. -->
  <!-- - `animal_id`: Integer, foreign key referencing `id` column in Animals table. Add "ON DELETE CASCADE". -->
  <!-- - `researcher_id`: Integer, foreign key referencing `id` column in Researchers table. Add "ON DELETE SET NULL". -->
- **Sightings**
  <!-- - `id`: Integer, primary key. -->
  <!-- - `researcher_id`: Integer, foreign key referencing `id` column in Researchers table. Add "ON DELETE SET NULL". -->
  <!-- - `species_id`: Integer, foreign key referencing `id` column in Species table. Add "ON DELETE CASCADE". -->
  <!-- - `habitat_id`: Integer, foreign key referencing `id` column in Habitats table. -->

## Seed Data

- **Researchers**
  <!-- - Mariana Aleta, Job Title: Project Lead. -->
  <!-- - Javed Patrick, Job Title: Senior Field Researcher. -->
  <!-- - Carolina Itai, Job Title: Field Researcher. -->
  <!-- - Jazmyn Gottfried, Job Title: Field Researcher. -->
  <!-- - Ezra Flip, Job Title: Research Intern. -->
- **Species**
  <!-- - Dolphin, Mammal: `true`. -->
  <!-- - Moray Eel, Mammal: `false`. -->
  <!-- - Tiger Shark, Mammal: `false`. -->
  <!-- - Orca Whale, Mammal: `true`. -->
  <!-- - Moon Jelly, Mammal: `false`. -->
- **Animals**
  <!-- - Two Dolphins, Nicknames: "Flip" and "Skip". -->
  <!-- - One Moray Eel, Nickname: "Jenkins". -->
  <!-- - One Tiger Shark, Nickname: "Sally". -->
  <!-- - Three Moon Jellies, Nicknames: "Flapjack", "Gibbous", and "Nox" -->
- **Habitats**
  <!-- - Category: Shallows. -->
  <!-- - Category: Coral Reef. -->
  <!-- - Category: Tide Pools. -->
  <!-- - Category: Deeps. -->
- **Taggings**
  <!-- - "Flip" was tagged by Ezra Flip and Jazmyn Gottfried. -->
  <!-- - "Skip" was tagged by Carolina Itai. -->
  <!-- - "Jenkins" was tagged by Mariana Aleta. -->
  <!-- - "Sally" was tagged by Javed Patrick. -->
  <!-- - "Flapjack" and "Gibbous" were tagged by Jazmyn Gottfried. -->
  <!-- - "Nox" was tagged by Javed Patrick. -->
- **Sightings**
  <!-- - An Orca Whale was spotted by Jazmyn Gottfried in the Deeps. -->
  <!-- - A Tiger Shark was spotted by Mariana Aleta in the Deeps. -->
  <!-- - A Moon Jelly was spotted by Carolina Itai in the Tide Pools. -->
  <!-- - A Moray Eel was spotted by Ezra Flip in the Coral Reef. -->
  <!-- - A Dolphin was spotted by Javed Patrick in the Shallows. -->
  <!-- - A Moray Eel was spotted by Ezra Flip in the Shallows. -->

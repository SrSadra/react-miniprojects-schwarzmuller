import sql from "better-sqlite3"
import slugify from 'slugify';
import xss from 'xss';


const db = sql("meals.db") // since default compnent in next are server component we dont need to use useEffect to fetch data
// we are already on server side

export async function getMeals() {
    return db.prepare("SELECT * FROM meals").all(); // all is for fetching data and run is for posting data (like inserting data)
    // since its multiple row we use all and not get
}


export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop(); 
  const fileName = `${meal.slug}.${extension}`; // cuz storing the image files on server side is a bad idea we store it on file system

//   const bufferedImage = await meal.image.arrayBuffer();

//   s3.putObject({
//     Bucket: 'maxschwarzmueller-nextjs-demo-users-image',
//     Key: fileName,
//     Body: Buffer.from(bufferedImage),
//     ContentType: meal.image.type,
//   });


  meal.image = fileName;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}

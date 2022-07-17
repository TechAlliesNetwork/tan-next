import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "clg401ej", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: "2021-07-18",
  useCdn: true,
});
const builder = ImageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}

export default client;

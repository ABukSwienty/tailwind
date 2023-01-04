import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: "udc82uq4",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default sanityClient;

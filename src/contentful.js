import { createClient } from 'contentful';

// Ensure the spaceId and accessToken are correctly loaded from the environment
const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Initialize Contentful client if both spaceId and accessToken are available
let client;
if (!spaceId || !accessToken) {
  console.error('Missing Contentful space ID or access token');
} else {
  client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });
}

// Function to fetch content, defaulting to 'chefProfile' content type
export async function fetchContent(contentType = 'chefProfile', limit = 100, skip = 0) {
  if (!client) {
    console.error('Contentful client is not initialized');
    return [];
  }

  try {
    // Ensure the correct content type is being passed
    const response = await client.getEntries({
      content_type: contentType,  // Ensure this matches the Content Type ID in Contentful
      limit: limit,
      skip: skip,
    });

    // Check if any items are returned
    if (!response.items.length) {
      console.warn(`No content found for content type: ${contentType}`);
      return [];
    }

    // Return the fields from each content entry
    return response.items.map((item) => item.fields);
  } catch (error) {
    console.error('Error fetching data from Contentful:', error);
    return [];
  }
}

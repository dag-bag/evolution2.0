export interface WikiData {
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
}

export async function fetchWikiData(title: string): Promise<WikiData | null> {
  try {
    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
    );
    if (!response.ok) return null;
    const data = await response.json();
    return {
      title: data.title,
      extract: data.extract,
      thumbnail: data.thumbnail,
    };
  } catch (error) {
    console.error(`Failed to fetch data for ${title}`, error);
    return null;
  }
}

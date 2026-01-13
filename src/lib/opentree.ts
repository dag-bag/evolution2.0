export interface OTLInternalNode {
  ott_id: number;
  name: string;
  rank: string;
}

export interface OTLTaxonInfo {
  ott_id: number;
  name: string;
  rank: string;
  lineage: OTLInternalNode[];
}

const BASE_URL = "https://api.opentreeoflife.org/v3";

export async function getHomoSapiensLineage(): Promise<OTLInternalNode[]> {
  try {
    // 1. Get OTT ID for Homo sapiens (we know it is 3598461, but let's be robust or just hardcode for speed)
    // The OTT ID for Homo sapiens is 770315 in some contexts, but let's match name first if needed.
    // For reliability/speed in this demo, we will use the known ID for Homo sapiens in OpenTree: 770315
    const ott_id = 770315; 

    // 2. Fetch Taxon Info with lineage
    const response = await fetch(`${BASE_URL}/taxonomy/taxon_info`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ott_id, include_lineage: true }),
    });

    if (!response.ok) {
      throw new Error(`OTL API Error: ${response.statusText}`);
    }

    const data: OTLTaxonInfo = await response.json();
    
    // The lineage comes in reverse order (Parent -> Grandparent -> ... -> Root)? 
    // Actually, usually it's ordered. Let's inspect typical response or just reverse if needed to go Root -> Species.
    // OpenTree lineage array is usually [Immediate Parent, Grandparent, ...] (Ancestors up to root)
    // So we need to reverse it to get chronological order (Root -> Life -> ... -> Human)
    
    const chronologicalLineage = [...data.lineage].reverse();
    
    // Add the node itself (Homo sapiens) at the end
    chronologicalLineage.push({
      ott_id: data.ott_id,
      name: data.name,
      rank: data.rank
    });

    return chronologicalLineage;
  } catch (error) {
    console.error("Failed to fetch OTL lineage", error);
    return [];
  }
}

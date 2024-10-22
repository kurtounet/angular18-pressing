export interface IFeatureCollection {
  type: "FeatureCollection";
  version: string;
  features: IFeature[];
  attribution: string;
  licence: string;
  query: string;
  limit: number;
}

export interface IFeature {
  type: "Feature";
  geometry: IGeometry;
  properties: IProperties;
}

export interface IGeometry {
  type: "Point";
  coordinates: [number, number];
}

export interface IProperties {
  label: string;
  score: number;
  housenumber: string;
  id: string;
  type: string;
  name: string;
  postcode: string;
  citycode: string;
  x: number;
  y: number;
  city: string;
  context: string;
  importance: number;
  street: string;
}


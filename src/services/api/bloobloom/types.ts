export type CollectionItem = {
  id: number;
  name: string;
  configuration_name: string;
};

type MetaData = {
  total_count: number;
};

type Media = {
  id: number;
  medium_type: 'colour' | 'image';
  original_file_name: string;
  url: string;
  position: number;
};

type GlassItem = {
  id: number;
  name: string;
  configuration_name: string;
  glass_variants: GlassVariant[];
};

type GlassVariant = {
  id: number;
  frame_variant: {
    id: number;
    name: string;
    configuration_name: string;
    colour: {
      id: number;
      name: string;
      media: Media[];
    };
  };
  media: Media[];
};

export type CollectionResponse = {
  collections: CollectionItem[];
  meta: MetaData;
};

export type GlassResponse = {
  glasses: GlassItem[];
  meta: MetaData;
};

export type FilterCriteria = {
  category: string;
  'page[limit]': number;
  // TODO add more
};

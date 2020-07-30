export class Search {
  tracks: Track;
  artists: Artist;
}

export class Artist {
  hits: object[];
}

export class Track {
  hits: Hit[];
}

export class Hit {
  track: HitTrack;
}

export class HitTrack {
  layout: number;
  type: string;
  key: string;
  title: string;
  subtitle: string;
  subject: string;
  share: Share;
  images: Images;
  hub: Hub;
  artists: HitArtist[];
  url: string;
  lyricWordCount: number;
}

export class Share {
  subject: string;
  text: string;
  href: string;
  image: string;
  twitter: string;
  html: string;
  avatar: string;
  snapchat: string;
}

export class Images {
  background: string;
  coverart: string;
  coverarthq: string;
}

export class Hub {
  type: string;
  image: string;
  actions: Action[];
  options: Option[];
  providers: Provider[];
  explicit: boolean;
  displayname: string;
}

export class Action {
  name: string;
  type: string;
  id: string;
  uri: string;
}

export class Provider {
  caption: string;
  images: Image;
  actions: Action[];
  type: string;
}

export class Image {
  overflow: string;
  default: string;
}

export class Option {
  caption: string;
  actions: Action[];
  beacondata: BeaconData;
  image: string;
  listcaption: string;
  overflowimage: string;
  colouroverflowimage: boolean;
}

export class BeaconData {
  type: string;
  providername: string;
}

export class HitArtist {
  id: string;
  adamid: string;
}

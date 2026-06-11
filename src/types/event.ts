export interface EventOrganizer {
  name: string;
  logo: string;
}

export interface EventLinks {
  linkedin?: string;
  facebook?: string;
  youtube?: string;
  other?: string;
}

export interface BlogEvent {
  slug: string;
  title: string;
  role: string;
  date: string;
  city: string;
  description: string;
  organizer: EventOrganizer;
  photos: string[];
  links: EventLinks;
}

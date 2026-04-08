import { createClient } from "contentful";
import assetFixture from "../../test/fixtures/contentful/asset";
import eventContainerPartsFixture from "../../test/fixtures/contentful/eventContainerParts";
import eventContainersFixture from "../../test/fixtures/contentful/eventContainers";
import sessionsFixture from "../../test/fixtures/contentful/sessions";
import speakersFixture from "../../test/fixtures/contentful/speakers";
import sponsorsFixture from "../../test/fixtures/contentful/sponsors";
import timeTableSectionsFixture from "../../test/fixtures/contentful/timeTableSections";
import type { Asset, AssetLink } from "~/types/contentful";
import type EventContainerPart from "~/types/eventContainerPart";
import type EventContainer from "~/types/eventContainer";
import type Session from "~/types/session";
import type Speaker from "~/types/speaker";
import type Sponsor from "~/types/sponsor";
import type SponsorPlan from "~/types/sponsorPlan";
import type TimeTableSection from "~/types/timeTableSection";

export interface SiteData {
  speakers: Speaker[];
  sessions: Session[];
  timeTableSections: TimeTableSection[];
  eventContainers: EventContainer[];
  eventContainerParts: EventContainerPart[];
  sponsors: Sponsor[];
  sponsorPlans: SponsorPlan[];
}

export const sponsorPlans: SponsorPlan[] = [
  { plan: "platinum", name: "PLATINUM" },
  { plan: "gold", name: "GOLD" },
  { plan: "silver", name: "SILVER" },
  { plan: "bronze", name: "BRONZE" },
  { plan: "special", name: "SPECIAL" },
  { plan: "room", name: "ROOM" },
  { plan: "translation", name: "同時通訳" },
  { plan: "commercial", name: "幕間 CM" },
  { plan: "toast", name: "カンパイ" },
  { plan: "lunch", name: "LUNCH" },
  { plan: "refreshment", name: "REFRESHMENT" },
  { plan: "video", name: "VIDEO" },
  { plan: "media", name: "MEDIA" },
];

const speakerDisplayOrder = [
  "ulivz",
  "jlooper",
  "blackawa",
  "yamanoku",
  "retty-y-takase",
  "takefumi-yoshii",
  "keinuma",
  "keimakai",
  "konu96",
  "chrisvfritz",
  "masaakikunsan",
  "ninjinkun",
  "tejitak",
  "octref",
  "alexchopin",
  "Atinux",
  "yyx990803",
] as const;

const speakerDisplayOrderMap = new Map<string, number>(
  speakerDisplayOrder.map((github, index) => [github, index]),
);

const speakerAvatarImageUrls: Record<
  string,
  { avatar: string; avatar2x: string }
> = {
  ulivz: {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/3HZzgwGbJR175TAcUoIqt0/03c988d99c985b1647c47941af75c3c9/ulivz.png",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/6nNq4Avq7neelwqnhuYDa7/d5f9c9b4502b40eb314b38083d6850cd/ulivz_2x.png",
  },
  jlooper: {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/1Bqb7VVTxdnL3zZIh8FNJD/ba31d2b26ab370284345ebaf82196f7e/jlooper.jpg",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/1nDz7yqeU9ykdxJOQKyOVc/7665b9fea2dc899209755732aab1f245/jlooper_2x.jpg",
  },
  blackawa: {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/34swEtd98MBeaXZ5Cp5nN2/de2dd72ccca4c01ea8af0ec00e79cf29/blackawa.jpg",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/5P0nv2NctX9NPabqyFNsrl/615a80229ece82e6e1a1a16998b36ce3/blackawa_2x.jpg",
  },
  yamanoku: {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/6xCWLl6w13ag0farJIoby0/a581b955202e17be3853acbb038fa096/yamanoku.jpg",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/52lbdiNOCjZyIhtlcvpspe/afed824d2a218c0437b9055ea9bc1dc4/yamanoku_2x.jpg",
  },
  "retty-y-takase": {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/1ZLR3HqBPUPL9TicbE9vfE/80317a45308056511d5edfd1d14cc9c7/retty-y-takase.jpg",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/4ToBIFg8HnmqnOhUNnDXnQ/541c6f1d4c61a70d034d280353f26bc7/retty-y-takase_2x.jpg",
  },
  "takefumi-yoshii": {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/3z3kjbx5KdUdZkbgbcx4rl/0010c3908281d550477d135064cb5428/takefumi-yoshii.jpg",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/4i8gaVESt5zcIrPNWWd0zn/f2f7994b3f52146873b7ea56e70f953e/takefumi-yoshii_2x.jpg",
  },
  keinuma: {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/6LoC8VRCqltizKTEYjAcUP/e583bea15f7be9e9f39d8e46212386d1/keinuma.jpg",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/20NGISnV3ejA3CdjGoWfHm/94889dcfe29e41e5d1ef463074a90562/keinuma_2x.jpg",
  },
  keimakai: {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/PuCjgucYXQJIazrwHH0O8/94dce3b92843b75c267bdc386bbdc475/keimakai.jpg",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/536NGEpaCPN4G76mQuG2wE/7f695fcd7991288dc596823453c859da/keimakai_2x.jpg",
  },
  konu96: {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/4Lidfz2f9qCnKki6UUTtJe/8582cbb388945be06d8f49246ce61137/konu96.jpg",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/48JFajH7V65lQDe5inETdW/54669e419eff27c7653171bda7284454/konu96_2x.jpg",
  },
  chrisvfritz: {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/2OtxAnAwc77d240ByI3t6Y/8a1eb0273ba6f8571af882d2bf40bfd3/chrisvfritz.jpg",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/6q9X6lRiw998jyiipgH72m/97a2a3321ba29e1b44fef13de9df4430/chrisvfritz_2x.jpg",
  },
  masaakikunsan: {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/5x58csQonmS5RBCWXXKPom/94220ee5491204b1c54a645a4a8195e5/masaakikunsan.jpg",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/2TMhY3K20EhrONyMQ3ZKaV/9f1fc04c26326bff43ae4b9d30479681/masaakikunsan_2x.jpg",
  },
  ninjinkun: {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/27AfDLTXhUeZHEnrSqCUVA/05114230f7fa875d39d4c644e364de78/ninjinkun.png",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/5ZqLjRLiE01Pbzi0aorN0g/c9c955b3e6b4c0570bcac2cb27ac84ad/ninjinkun_2x.png",
  },
  tejitak: {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/7z76s7OZVUfNyKjLnQ2zBu/90177682a7ec26c29d254ab493199950/tejitak.jpg",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/5QHloDfRqhGamp1IfcfgAS/afa70fad97398d820bad6109801bfc77/tejitak_2x.jpg",
  },
  octref: {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/2UFRrCsnVof30cWcX2Mvve/0e648b2042b39cdde118397931cae489/octref.jpg",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/23wgmzghJMNbXAgysNgAFo/4696c116367849e8451b4b4e05f59a5e/octref_2x.jpg",
  },
  alexchopin: {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/4Nh5YADlfW9d6mTQElYcO8/4932cda3dfaff2d7670ded794c5cb6a5/alexchopin.jpg",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/3gGKasMLSIF33OFHOaEAff/17dce3fba2baf43a379d9e749c37aa4c/alexchopin_2x.jpg",
  },
  Atinux: {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/12RlQ1n2J1mhKVJqZt5W5i/c801a1bd84341dc91934d87065092e2a/Atinux.jpg",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/575eFXXAjyzdl01Z5P2mF7/a68d8a91da5506432139998ffcacbc83/Atinux_2x.jpg",
  },
  yyx990803: {
    avatar:
      "https://images.ctfassets.net/makqrw5hfm9d/65PL15Kw0Siheq5LDRG66F/51df84a16de73932c131abd8d97ef803/yyx990803.jpg",
    avatar2x:
      "https://images.ctfassets.net/makqrw5hfm9d/2X8fB06lUIbesMR8NVSJJd/99d18e6e1f9f4319b1343716d9176c85/yyx990803_2x.jpg",
  },
};

interface ContentfulClientLike {
  getEntries(query: Record<string, unknown>): Promise<{ items: unknown[] }>;
  getAsset(id: string): Promise<unknown>;
}

function isAsset(value: Asset | AssetLink): value is Asset {
  return "fields" in value;
}

function normalizeAssetUrl(url: string): string {
  return url.startsWith("//") ? `https:${url}` : url;
}

function normalizeAsset(asset: Asset): Asset {
  return {
    ...asset,
    fields: {
      ...asset.fields,
      file: {
        ...asset.fields.file,
        url: normalizeAssetUrl(asset.fields.file.url),
      },
    },
  };
}

function cloneAsset(): Asset {
  return structuredClone(assetFixture);
}

function createRemoteImageAsset(config: {
  id: string;
  title: string;
  url: string;
  size: number;
}): Asset {
  const asset = cloneAsset();
  const normalizedUrl = normalizeAssetUrl(config.url);
  const fileName =
    new URL(normalizedUrl).pathname.split("/").pop() || `${config.title}.png`;

  asset.sys.id = config.id;
  asset.fields.title = config.title;
  asset.fields.file.url = normalizedUrl;
  asset.fields.file.fileName = fileName;
  asset.fields.file.contentType = fileName.endsWith(".png")
    ? "image/png"
    : "image/jpeg";
  asset.fields.file.details.image = {
    width: config.size,
    height: config.size,
  };

  return asset;
}

function createGithubAvatarAsset(github: string, size: number): Asset {
  return createRemoteImageAsset({
    id: `${github}-${size}`,
    title: github,
    url: `https://github.com/${github}.png?size=${size}`,
    size,
  });
}

function createSpeakerAvatarAsset(github: string, size: 500 | 1000): Asset {
  const avatarImageUrls = speakerAvatarImageUrls[github];

  if (!avatarImageUrls) {
    return createGithubAvatarAsset(github, size);
  }

  return createRemoteImageAsset({
    id: `${github}-${size}`,
    title: github,
    url: size === 500 ? avatarImageUrls.avatar : avatarImageUrls.avatar2x,
    size,
  });
}

function createSessionOgAsset(github: string): Asset {
  const asset = cloneAsset();

  asset.sys.id = `${github}-og`;
  asset.fields.title = github;
  asset.fields.file.url = `https://vuefes.jp/2019/session-og-images/${github}.jpg`;
  asset.fields.file.fileName = `${github}.jpg`;
  asset.fields.file.contentType = "image/jpeg";
  asset.fields.file.details.image = {
    width: 1200,
    height: 630,
  };

  return asset;
}

function resolveSpeakerAssetsWithFallback(speaker: Speaker): Speaker {
  const nextSpeaker = structuredClone(speaker);

  nextSpeaker.fields.avatar = isAsset(speaker.fields.avatar)
    ? normalizeAsset(speaker.fields.avatar)
    : createSpeakerAvatarAsset(speaker.fields.github, 500);
  nextSpeaker.fields.avatar2x = isAsset(speaker.fields.avatar2x)
    ? normalizeAsset(speaker.fields.avatar2x)
    : createSpeakerAvatarAsset(speaker.fields.github, 1000);

  return nextSpeaker;
}

function resolveSessionAssetsWithFallback(
  session: Session,
  speakers: Speaker[],
): Session {
  const nextSession = structuredClone(session);
  const primarySpeakerId = session.fields.speakers[0]?.sys.id;
  const primarySpeaker = speakers.find(
    (speaker) => speaker.sys.id === primarySpeakerId,
  );

  nextSession.fields.ogImage = isAsset(session.fields.ogImage)
    ? normalizeAsset(session.fields.ogImage)
    : createSessionOgAsset(primarySpeaker?.fields.github || "default");

  return nextSession;
}

function normalizeSponsors(sponsors: Sponsor[]): Sponsor[] {
  return sponsors.map((sponsor) => ({
    ...sponsor,
    fields: {
      ...sponsor.fields,
      banner: normalizeAsset(sponsor.fields.banner),
    },
  }));
}

function sortSpeakersForDisplay(speakers: Speaker[]): Speaker[] {
  return [...speakers].sort((left, right) => {
    const leftIndex =
      speakerDisplayOrderMap.get(left.fields.github) ?? Number.MAX_SAFE_INTEGER;
    const rightIndex =
      speakerDisplayOrderMap.get(right.fields.github) ??
      Number.MAX_SAFE_INTEGER;

    return leftIndex - rightIndex;
  });
}

function createFallbackSpeakers(): Speaker[] {
  return sortSpeakersForDisplay(
    structuredClone(speakersFixture).map(resolveSpeakerAssetsWithFallback),
  );
}

function createFallbackSessions(speakers: Speaker[]): Session[] {
  return structuredClone(sessionsFixture).map((session) =>
    resolveSessionAssetsWithFallback(session, speakers),
  );
}

export function createFallbackSiteData(): SiteData {
  const speakers = createFallbackSpeakers();

  return {
    speakers,
    sessions: createFallbackSessions(speakers),
    timeTableSections: structuredClone(timeTableSectionsFixture),
    eventContainers: structuredClone(eventContainersFixture),
    eventContainerParts: structuredClone(eventContainerPartsFixture),
    sponsors: normalizeSponsors(structuredClone(sponsorsFixture)),
    sponsorPlans: structuredClone(sponsorPlans),
  };
}

async function fetchEntries<T>(
  client: ContentfulClientLike,
  query: Record<string, unknown>,
): Promise<T[]> {
  const response = await client.getEntries(query);
  return response.items as T[];
}

async function fetchAsset(
  client: ContentfulClientLike,
  id: string,
): Promise<Asset> {
  const asset = (await client.getAsset(id)) as Asset;
  return normalizeAsset(asset);
}

export async function loadSiteData(config: {
  contentfulSpaceId?: string;
  contentfulAccessToken?: string;
}): Promise<SiteData> {
  const { contentfulSpaceId = "", contentfulAccessToken = "" } = config;

  if (!contentfulSpaceId || !contentfulAccessToken) {
    return createFallbackSiteData();
  }

  const clientWithResolveLinks = createClient({
    space: contentfulSpaceId,
    accessToken: contentfulAccessToken,
  });

  const clientWithoutResolveLinks =
    clientWithResolveLinks.withoutLinkResolution;

  const [
    rawSpeakers,
    rawSessions,
    timeTableSections,
    eventContainers,
    eventContainerParts,
    rawSponsors,
  ] = await Promise.all([
    fetchEntries<Speaker>(clientWithoutResolveLinks, {
      content_type: "speaker",
    }),
    fetchEntries<Session>(clientWithoutResolveLinks, {
      content_type: "session",
    }),
    fetchEntries<TimeTableSection>(clientWithoutResolveLinks, {
      content_type: "timeTableSection",
      order: "fields.startAt",
    }),
    fetchEntries<EventContainer>(clientWithResolveLinks, {
      content_type: "eventContainer",
    }),
    fetchEntries<EventContainerPart>(clientWithResolveLinks, {
      content_type: "eventContainerPart",
    }),
    fetchEntries<Sponsor>(clientWithResolveLinks, {
      content_type: "sponsor",
      order: "fields.appliedAt",
    }),
  ]);

  const speakers = await Promise.all(
    rawSpeakers.map(async (speaker) => {
      const nextSpeaker = structuredClone(speaker);

      nextSpeaker.fields.avatar = isAsset(speaker.fields.avatar)
        ? normalizeAsset(speaker.fields.avatar)
        : await fetchAsset(
            clientWithoutResolveLinks,
            speaker.fields.avatar.sys.id,
          );
      nextSpeaker.fields.avatar2x = isAsset(speaker.fields.avatar2x)
        ? normalizeAsset(speaker.fields.avatar2x)
        : await fetchAsset(
            clientWithoutResolveLinks,
            speaker.fields.avatar2x.sys.id,
          );

      return nextSpeaker;
    }),
  );

  const sessions = await Promise.all(
    rawSessions.map(async (session) => {
      const nextSession = structuredClone(session);

      nextSession.fields.ogImage = isAsset(session.fields.ogImage)
        ? normalizeAsset(session.fields.ogImage)
        : await fetchAsset(
            clientWithoutResolveLinks,
            session.fields.ogImage.sys.id,
          );

      return nextSession;
    }),
  );

  return {
    speakers: sortSpeakersForDisplay(speakers),
    sessions,
    timeTableSections,
    eventContainers,
    eventContainerParts,
    sponsors: normalizeSponsors(rawSponsors),
    sponsorPlans: structuredClone(sponsorPlans),
  };
}

export function sponsorsByPlan(siteData: SiteData, plan: string): Sponsor[] {
  return siteData.sponsors.filter((sponsor) => sponsor.fields.plan === plan);
}

export function sponsorPlansHavingSponsors(siteData: SiteData): SponsorPlan[] {
  return siteData.sponsorPlans.filter(
    (sponsorPlan) => sponsorsByPlan(siteData, sponsorPlan.plan).length > 0,
  );
}

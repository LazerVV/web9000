# Project specification
I want to create a serverless federated board system with federated DAOs for oversight, spam control and to establish inter-board legitimacy (content, users, interactions) plus content pinning, based on GunDB and IPFS for images, projects, blogs, websites, news, and a variety of other contents. User identity is build around signing messages with unique private keys and established credibility within guilds of boards. 

The project is FOSS with just me as a dev. I am somewhat good at backend and frontend development, but my understanding of GunDB, IPFS, OrdbitDB and decentralized systems is rather poor. I am discarding the idea of blockchain integration (e.g. for payments or DAO management), because it overcomplicates an already complex project, albeit would be nice if you could somehow keep things open for extending the system this way in the future.

I want the board system to be minimal maintenance and if possible only use pure Javascript in a function over form kind of manner, but obviously many library dependences are still needed to make it work and palatable and avoid coding too much by hand.

## WEB9000: A Serverless Federated Board System
WEB9000 is a fully decentralized, serverless board system designed to replace traditional image boards, blogs, forums, marketplaces, and more. It operates on GunDB and IPFS, leveraging federated DAOs for governance, spam control, and content legitimacy. Users and communities organize into clans (small groups) and guilds (federations), which establish moderation rules, spam filtering, and governance frameworks without a central authority.

## Core Features

* Serverless & Decentralized – Built on GunDB for distributed storage and IPFS for hosting images and other media.
* No Predefined Post Types – Every post is a flexible Markdown (MD) file containing lists of content (e.g., images, links, schedules, polls). The frontend dynamically determines post type based on populated data.
Federated Governance – Users self-organize into clans and guilds and coalitions, subscribing to optional governance rules, moderation tools, and spam filtering.
* Multimodal Content Grid – Posts can contain images, audio, 3D files, documents, polls, events, projects, and discussions, intelligently rendered inside a content grid.
* Autonomous Spaces – Some boards are democratic (vote-based moderation), while others are autocratic (single-user controlled, e.g., blogs or stores).
* No Website Styling – The board exists as a pure content grid, where presentation is determined by post metadata and content population rather than fixed UI themes.
* No Servers - Web9000 can be served locally (all content is pulled via GunDB and IPFS) and hosting it on a live website doesn't pull content from that website (other than Web9000 code) the same way

### Intelligent Content Rendering in grid view (initial idea):
* If a post has multiple images, the first image is displayed with micro-thumbnails on the right.
* If a post has audio, a play button is overlayed.
* If a post has no media, its Markdown text is previewed in the grid.
* Icons for polls, events, documents, or funding appear dynamically with hover info

### Classic list-based content rendering:
A list with single rows and a smaller 30px or so media content preview on left is displayed to prioritize text (similar to reddit old layout, but with direct text preview)

Minimal Maintenance – Designed to function with no central servers or manual intervention.
Extendable for Future Features – While blockchain integration is currently avoided for simplicity, the system remains open for decentralized payments, staking, or DAO-driven governance in the future.

## Use Cases
WEB9000 is designed to be infinitely flexible, supporting:

* Classic Image Boards – Meme culture, artwork, anonymous discussions.
* Decentralized Marketplaces – Merchant guild-run commerce, bartering, NFT-style assets.
* Forums & Community Hubs – Special interest groups, discussions, voting-based moderation.
* Crowdfunding & Project Backing – Users can pledge cryptocurrency, man-hours or compute time to ideas that grow into projects.
* Job Listings & Classifieds – Decentralized hiring and local exchange networks.
* Meetups & Event Organizing – Public and private scheduling, RSVP, location-based events.
* Decentralized News & Blogs – Self-hosted, federated blogging without censorship.
* Science & Research Collaboration – Open-source academic publishing and funding.
* Crisis Response & Mutual Aid – Disaster relief coordination, peer-to-peer financial help.
* P2P Governance & Lawmaking – DAO-based rule-making and arbitration courts.
* facilitates direct bitcoin lightning payments

## Current Development

I have fleshed out roughly the grid view UI with Grok-3 and example content. It still has lots of quirks and is incomplete.

## Challenges 

The absence of any sort of central authority poses two main issues:

1. Massive amounts of spam. This ought to be solved by punishing user clans and guilds for their own misbehaving users. Conversely clans and guilds can cherry-pick which other clans and guilds to trust. Because this would result in a joungle of authorities, clans and guilds are urged to become part of even bigger federations, so that in the end only a hand full of coalitions exist which primarily determine what to display and not to display. However clans and guilds can override whatever those coalitions have determined to be proper. It is also conceivable that clans and guilds can create specialized police forces, which would enjoy higher power to flag and disqualify content. However on the other hand their clans would also receive as much higher punishment if police force misbehaves in the eyes of the coalition. 
2. No means to validate database entries. Primarily this would be solved with multi-signature mechanisms like Distributed Key Generation. However then again we need to simplify this by resorting to clan/guild/coalition trust.

Since no JS exists for DKG the idea was to load for example ZenGo-X's Multi-Party ECDSA and BLS Libraries or Kyber via webassembly, in lack of better options.

## Vision
WEB9000 is a self-organizing alternative to the centralized web, providing a truly open space for community-driven content, governance, and economy. By eliminating platform gatekeeping, it ensures free expression, censorship resistance, and user-driven moderation.

## Development guidelines

* Prefer vanilla JavaScript when possible.
* A Puppeteer-based test suite exists under `npm test`.
* Run `npm install` once to set up dependencies, then `npm test` before submitting any PR.

---
title: 'RSS & Atom - open standards that still matter'
description: "While most people scroll algorithm-curated feeds, a quieter, older web still hums in the background - powered by RSS and Atom. In this post, I explore how these open standards still enable decentralized information flow."
authors: 
  - Witold Zawada
socialImage: images/blog/rss-atom.webp
date: '2025-07-14 10:00'
tags:
  - RSS
  - Atom
  - Selfhosting
---

> **Disclaimer:** You can check out my project related to RSS and Atom - **[Nuntius Feed](https://github.com/PoProstuWitold/nuntius-feed)** - an open-source feed reader and aggregator as well as my own **[feed](../feed)**.

The Internet is full of content! Unfortunately, most of what we see today is chosen for us by algorithms.

A long time ago, back in the late 1990s and early 2000s, there were simpler tools that let people follow news, blogs and updates directly from the source. No ads, no tracking, no manipulation. Just clean information.

These tools are called **RSS** and **Atom**. Even in 2025, they still work - and they're more useful than ever.

---

# 1. The Origins of Web Feed: RSS
Before social media and personalized news apps, there was a need for a simple way to stay updated on new content from websites without having to visit them manually. That need led to the creation of RSS.

**RSS (Really Simple Syndication)** emerged in the late 1990s as a way to deliver structured updates from websites directly to users. The earliest versions like RSS 0.90 (1999) and 0.91 simplified the RDF model to offer a more approachable format. Over time, different versions emerged:

- **RSS 1.0** (2000): RDF-based, more formal and extensible
- **RSS 2.0** (2002): simpler, more widely adopted, with support for enclosures

However, RSS development lacked a central authority and suffered from inconsistencies across implementations. Different versions led to fragmentation and confusion.

This is why a new format was proposed - one that would address these limitations and bring clarity to the world of web feeds.

---

# 2. A Cleaner Alternative: Atom
The Atom format was introduced in the early 2000s to solve the problems of RSS. Officially published as **RFC 4287** in 2005, Atom aimed to:

- Provide a well-defined, XML namespace-based structure
- Use consistent and standardized date formats (ISO 8601)
- Include required elements for every entry
- Offer better extensibility via namespaces

While RSS 2.0 remained more widely used, Atom brought more rigor and was adopted by many major platforms, especially for APIs and technical documentation.

---

# 3. How Feeds Work
## 3.1 What's inside a feed
Feeds typically include information such as: title, link, description and the actual feed items or articles. Each item usually contains its own title, description, link, and publication date - though exact structure and field names can vary depending on the feed format.

**Keep in mind that most feeds serve as teasers - they typically include only a brief summary and a link to the full article on the original website.**

Let's compare the two most popular web feed standards: **RSS 2.0** and **Atom 1.0**.

Feed link: ``https://www.polsatnews.pl/rss/wszystkie.xml``

**``RSS 2.0 – Polsat News (Polish News Website):``**
```xml
<rss version="2.0">
	<channel>
		<title>Polsat News - Wiadomości</title>
		<description>Kanał RSS Polsat News - Wiadomości</description>
		<link>https://www.polsatnews.pl/</link>
		<atom:link href="https://www.polsatnews.pl/rss/wszystkie.xml" rel="self" type="application/rss+xml"/>
		<language>pl</language>
		<copyright>Polsat News</copyright>
		<lastBuildDate>Mon, 14 Jul 2025 04:07:39 +0200</lastBuildDate>
		<item>
			<title>
				"Nie otwieraj okien". Wydano ostrzeżenia ws. pożaru w Mińsku Mazowieckim
			</title>
			<description>
				Nie zbliżaj się do miejsca pożaru. Nie otwieraj okien. Śledź komunikaty służb - ostrzega Rządowe Centrum Bezpieczeństwa. W Mińsku Mazowieckim trwa walka z pożarem hali produkcyjno-magazynowej. Działania strażaków mogą potrwać kilkanaście godzin, teren zabezpiecza również policja.
			</description>
			<link>
				https://www.polsatnews.pl/wiadomosc/2025-07-13/nie-otwieraj-okien-wydano-ostrzezenia-ws-pozaru-w-minsku-mazowieckim/
			</link>
			<pubDate>Sun, 13 Jul 2025 22:31:00 +0200</pubDate>
			<enclosure url="https://ipla.pluscdn.pl/dituel/cp/7i/7iwre9s5ojsx4myom3fqsbyw3qu33t51.jpg" length="12709" type="image/jpg"/>
			<guid>
			https://www.polsatnews.pl/wiadomosc/2025-07-13/nie-otwieraj-okien-wydano-ostrzezenia-ws-pozaru-w-minsku-mazowieckim/
			</guid>
		</item>
		<!-- ...more items -->
	</channel>
</rss>
```

Feed link: ``https://www.vox.com/rss/index.xml``

**``Atom 1.0 - Vox News (American News Website)``**
```xml
<feed xml:lang="en-US">
	<title type="text">Vox</title>
	<subtitle type="text">
		Our world has too much noise and too little context. Vox helps you understand what matters.
	</subtitle>
	<updated>2025-07-11T02:39:33+00:00</updated>
	<link rel="alternate" type="text/html" href="https://www.vox.com"/>
	<id>https://www.vox.com/rss/index.xml</id>
	<link rel="self" type="application/atom+xml" href="https://www.vox.com/rss/index.xml"/>
	<icon>
		https://platform.vox.com/wp-content/uploads/sites/2/2024/08/vox_logo_rss_light_mode.png?w=150&h=100&crop=1
	</icon>
	<entry>
		<author>
			<name>Dylan Scott</name>
		</author>
		<author>
			<name>Allie Volpe</name>
		</author>
		<title type="html">Why doctors are finally taking IUD pain seriously</title>
		<link rel="alternate" type="text/html" href="https://www.vox.com/today-explained-newsletter/419507/iud-birth-control-insertion-pain-medicine"/>
		<id>https://www.vox.com/?p=419507</id>
		<updated>2025-07-10T14:57:34-04:00</updated>
		<published>2025-07-13T08:00:00-04:00</published>
		<category scheme="https://www.vox.com" term="Even Better"/>
		<category scheme="https://www.vox.com" term="Health"/>
		<category scheme="https://www.vox.com" term="Life"/>
		<category scheme="https://www.vox.com" term="Public Health"/>
		<category scheme="https://www.vox.com" term="Today, Explained newsletter"/>
		<summary type="html">
			IUDs have been a promising breakthrough in birth control, offering both convenience and effectiveness, and their use has exploded over the past few decades. But that progress has often come with some (painful) trade-offs. Vox senior reporter Allie Volpe has been digging into why medicine has been slow to catch up to the pain that [&#8230;]
		</summary>
		<content type="html">
			<!-- Actual article content in HTML -->
		</content>
	</entry>
	<!-- ...more entries -->
</feed>
```

> Want to check if a feed is valid? Try the **[W3C Feed Validator](https://validator.w3.org/feed/)**. Just paste either of the feed links from above.

### Key Differences:
- **Structure and tags:**
RSS uses `<channel>` and `<item>`, while Atom uses `<feed>` and `<entry>`. Field names also differ - for example, `pubDate` (RSS) vs `published` and `updated` (Atom).

- **Namespaces and XML strictness:**
Atom is XML namespace-based and more strict in structure, which makes it more predictable for parsers.

- **Metadata:**
Atom entries often include additional metadata like multiple authors, categories, and richer summaries. RSS is simpler, but sometimes lacks consistency.

- **Extensibility:**
Atom was designed with extensibility in mind e.g., custom `<category>` or `<content>` elements - while RSS extensions are less formal.

- **Date format:**
RSS often uses **``RFC 822``** style dates (``Sun, 13 Jul 2025 22:31:00 +0200``), whereas Atom uses **``ISO 8601``** (``2025-07-13T08:00:00-04:00``), which is easier to parse programmatically.

## 3.2 Subscribing and reading
Subscribing to RSS or Atom feeds is simple and flexible. Users can choose from a variety of tools and methods depending on their preferences and workflow.

### Desktop and web-based feed readers
There are many dedicated applications that allow you to follow and manage multiple feeds in one place:

- **Desktop apps:**  
Examples include [RSS Guard](https://github.com/martinrotter/rssguard), [QuiteRSS](https://quiterss.org/), and [NetNewsWire](https://netnewswire.com/) (macOS). These often offer offline reading, filtering, and custom views.

- **Web-based readers:**  
Services like [Feedly](https://feedly.com/), [Inoreader](https://inoreader.com/), and self-hosted options like [FreshRSS](https://freshrss.org/) or [Miniflux](https://miniflux.app/) allow feed access from any browser.

### Aggregators and Dashboards
Feeds can also be consumed via custom dashboards or automation platforms:
- **Custom dashboards:** Some developers create personal feed dashboards using tools like Next.js or React.
- **Automation tools:** Services like [IFTTT](https://ifttt.com/) and [Zapier](https://zapier.com/) can watch RSS feeds and trigger actions (e.g., send emails or push to Slack).

### OPML support
To manage multiple subscriptions, many feed readers support **OPML** (Outline Processor Markup Language) - an XML-based format for importing and exporting lists of feed URLs.

This makes it easy to:
- **Backup your subscriptions**
- **Migrate between readers**
- **Share curated feed lists with others**

> **OPML** is especially handy when you're switching between readers or syncing subscriptions across devices.

## 3.3 Common use cases
Feeds are used in:
- Blogs
- News websites
- YouTube channels (via feed URLs)
- Software changelogs and release notes

---

# 4. The State of RSS and Atom
## 4.1 Who still uses it?
Even though RSS and Atom are considered "old tech", they continue to be used by a wide range of people:

- **Developers:** Use feeds to stay updated on software releases, documentation updates, blog posts, and changelogs from GitHub or package registries.

- **Journalists and researchers:** Follow niche news sites, government publications, and academic feeds to monitor updates in real-time, without relying on social media platforms.

- **Privacy-focused users:** Avoid algorithmic curation, tracking, and ads by subscribing directly to trusted content sources.

- **Anyone tired of algorithmic feeds:** People who want a calmer, chronological, and ad-free reading experience often return to feed readers for control and clarity.

## 4.2 Where you can still find feeds
Despite fewer sites actively promoting them, many still maintain RSS or Atom feeds - sometimes hidden in their HTML metadata or under a small icon.

Here are some places where feeds are still alive and well:
- Reddit,
- Medium,
- News websites,
- Newsletters

> **Tip:** You can often discover a site's feed by checking the `<link rel="alternate" type="application/rss+xml">` tag in the page source.

---

# 5. Technical Challenges and Feed Parsing
## 5.1 Malformed XML and bad dates
One of the most common issues when working with real-world feeds is malformed XML. Some feeds contain invalid characters, improperly closed tags, or mixed encodings, which can break parsers.  

Date formats are another challenge — many feeds still use outdated or inconsistent formats like **RFC 822**, making reliable parsing difficult. ISO 8601 (used in Atom) is preferred but not always present.

## 5.2 Inconsistent fields and broken encodings
Feeds often lack critical elements like `title`, `link`, or `pubDate`, especially in RSS 2.0. In some cases, encodings are incorrectly declared (e.g., using ISO-8859-1 content but declaring UTF-8), leading to broken characters or unreadable content.  

Another issue is format-mixing — some feeds blend features of RSS 1.0, 2.0, and Atom, making consistent parsing more complex.

## 5.3 RSS vs Atom parsing differences
Although both formats serve the same purpose, they differ in structure and naming:
- RSS uses `<item>`, Atom uses `<entry>`
- RSS uses `<pubDate>`, Atom uses `<updated>` and `<published>`
- Atom relies on namespaces and is more strict, whereas RSS is often loosely structured

When writing a parser or aggregator, you usually need to handle both formats separately or normalize them into a common internal structure.

---

# 6. Tools and Projects Worth Exploring
## 6.1 Feed readers
These are some of the most popular and reliable open-source feed readers:
- **[FreshRSS](https://freshrss.org/)** – Web-based, selfhosted, with good performance and a clean UI.
- **[Miniflux](https://miniflux.app/)** – Minimalist and fast, great for focused reading.
- **[NetNewsWire](https://netnewswire.com/)** – Native macOS/iOS app with offline support.

They all support importing/exporting OPML, tagging, and filtering.

## 6.2 My project: NuntiusFeed
If you're curious, I'm building my own open-source reader and aggregator called **NuntiusFeed**.
- GitHub: [github.com/PoProstuWitold/nuntius-feed](https://github.com/PoProstuWitold/nuntius-feed)
- Built with TypeScript, Next.js and MongoDB
- Designed to be selfhostable, minimal, and privacy-friendly
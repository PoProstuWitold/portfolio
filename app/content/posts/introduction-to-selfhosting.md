---
title: 'Introduction to selfhosting'
description: 'Is privacy important to you? Have you ever wanted more control over your data? Would you like to learn networking and Docker? If the answer to any of these questions is yes, then this article is for you!'
socialImage: images/blog/selfhosting.webp
authors:
  - Witold Zawada
date: '2025-08-30 23:00'
tags:
  - Selfhosting
  - Docker
  - Cybersecurity
  - Networks
---

# Getting started with selfhosting

> **Related documentation:** [PoProstuWitold/homeserver](https://github.com/PoProstuWitold/homeserver)

This guide introduces the steps and concepts involved in setting up a home server with **Linux**, **Docker**, and either **[port forwarding](https://github.com/PoProstuWitold/homeserver/tree/main/ports)** or **[Cloudflare Tunnels](https://github.com/PoProstuWitold/homeserver/tree/main/tunnels)**.

# What is selfhosting?

Selfhosting may sound complicated at first, but it means running services on infrastructure you administer instead of relying entirely on a hosted provider.

The biggest benefit is control - you decide what software you run, how you secure it, and who has access. This gives you more direct control over your data and network architecture. You might also save some money ~~but that's a lie that all selfhosters tell themselves~~. More importantly, selfhosting can improve your skills in Linux, Docker, networking, web protocols, and many other areas.

Some popular examples of selfhosted services include:

- Cloud storage with **[Nextcloud](https://github.com/nextcloud/all-in-one)** instead of Google Drive or Dropbox
- A media server with **[Jellyfin](https://github.com/jellyfin/jellyfin)** instead of a hosted streaming library
- Git hosting with **[Gitea](https://github.com/go-gitea/gitea)** instead of GitHub
- A password manager with **[Vaultwarden](https://github.com/dani-garcia/vaultwarden)** instead of a hosted password manager
- A recipe manager with **[Mealie](https://github.com/mealie-recipes/mealie)** instead of a hosted meal-planning app
- A bookmark manager with **[Linkwarden](https://github.com/linkwarden/linkwarden)** instead of a hosted bookmark service
- Monitoring with **[Uptime Kuma](https://github.com/louislam/uptime-kuma)** instead of a commercial uptime-monitoring service
- Game-server hosting with direct control over configuration and access

This is only a sample. Many hosted services have an open-source alternative that you can selfhost.

---

# Pros and cons of selfhosting

Everything has pros and cons. Selfhosting is no exception. It can be incredibly rewarding, but also frustrating if you are not prepared.

## Pros

1. **Control:** You choose the available storage, encryption, and backup options. Open-source alternatives also give you flexibility to customize your setup.
2. **Privacy:** With open-source services, you can inspect and limit telemetry, data collection, and third-party access, although the result still depends on the software and configuration you choose.
3. **Independence:** You are less dependent on external companies that can shut down, change pricing, or remove features. Selfhosting can also reduce vendor lock-in.
4. **Skill development:** You will naturally learn a lot about Linux, containers, networking, DNS, TLS certificates, and web protocols. These are valuable skills both as a hobby and professionally.
5. **Potential cost savings:** Some services like a Minecraft server or a password manager can be run at home with minimal cost compared to hosted solutions. While you will pay for electricity and hardware, you can avoid monthly subscription fees.
6. **Customization:** You can configure services within the limits of your software and hardware. Want a different theme? Plugin? Custom domain? Your own server usually gives you more options.

## Cons

1. **Responsibility:** You are the system administrator. Updates, backups, troubleshooting, monitoring, security patches - all of this is your job. There is no support hotline to call.
2. **Security risks:** Misconfigurations or outdated software can lead to vulnerabilities. You need to stay on top of updates and follow security best practices.
3. **Uptime challenges:** Large cloud providers often have multiple data centers, backup power, and redundancy. A typical home server does not. Power outages, router restarts, or disk failures can make your services unavailable.
4. **Learning curve:** It can feel overwhelming in the beginning. Linux commands, Docker syntax, DNS records, and TLS certificates can be a lot to absorb at once.
5. **Hardware limitations:** Running many services requires more RAM and storage. Some setups might push your hardware to the limit and you may need to invest in better equipment.

---

# What should you know before starting?

Before you dive into selfhosting, there are a few basics that will make your life much easier:

1. **Linux fundamentals:** You do not need to be an expert, but you should know how to navigate the terminal, edit files, and manage services. Distributions like Ubuntu or Debian are beginner-friendly.
2. **Networking basics:** Understanding concepts like IP addresses, ports, DNS, and firewalls will help you configure your services correctly and avoid frustration.
3. **Docker basics:** Many selfhosted apps are distributed as Docker containers. Learn how to run, stop, and update containers, and how to read `docker-compose.yml` files. Tools like Portainer can make this easier.
4. **Backups:** Things will break sooner or later. Always back up important data, such as Nextcloud files, databases, and configuration.
5. **Security awareness:** Exposing services to the internet without proper safeguards is dangerous. Use HTTPS, strong passwords, two-factor authentication, and timely updates.

If you feel comfortable with these basics, you are ready to start experimenting.

---

# Okay, but how do I start?

If you are wondering how to begin in practice, here is a simple roadmap:

1. **Choose your hardware:** Decide whether you want to repurpose an old PC, buy a business mini PC (like a Lenovo ThinkCentre, Dell OptiPlex, or HP EliteDesk), or start with a Raspberry Pi. Make sure it has enough RAM and storage for your needs.
2. **Install Linux:** Pick a beginner-friendly distribution like Ubuntu Server or Debian. Get comfortable connecting to your server over SSH.
3. **Keep your system updated:** Regular updates are essential for both stability and security.
4. **Install Docker and Docker Compose:** Containers make running selfhosted apps much easier and reduce the risk of breaking your base system.
5. **Deploy your first service:** Start with something useful and rewarding, such as Nextcloud for personal cloud storage or Jellyfin for streaming your media.
6. **Set up backups:** Make sure you have a backup strategy in place for important data and configuration files.
7. **Expand gradually:** Once you feel comfortable, try out new services like a password manager, a Git hosting platform, or a monitoring tool. Add them step by step instead of all at once.

Remember: it is better to have one reliable service running well than ten broken ones you never use.

---

## Helpful resources

- [**r/selfhosted**](https://www.reddit.com/r/selfhosted/) - a large subreddit for discussions, tutorials, and questions.
- [**awesome-selfhosted**](https://github.com/awesome-selfhosted/awesome-selfhosted) - a massive list of selfhostable software.
- [**PoProstuWitold/homeserver**](https://github.com/PoProstuWitold/homeserver) - my personal guide and documentation of my setups (Cloudflare Tunnels and port forwarding).

## YouTube channels worth checking

- [**DB Tech**](https://www.youtube.com/@DBTechYT) - practical tutorials for Docker and selfhosting.
- [**TechHut**](https://www.youtube.com/@TechHut) - Linux, hardware, and privacy-focused content.
- [**Hardware Haven**](https://www.youtube.com/@HardwareHaven) - hardware reviews and selfhosting builds.

Nobody paid me to recommend them. These are my honest recommendations.

---

# Best practices

As you grow your selfhosting journey, here are some best practices to keep in mind:

- **Use Docker or Podman:** Containers make managing and updating services much easier.
- **Automate backups:** Keep multiple copies, with at least one stored offsite - for example, on an encrypted remote machine or in cloud storage. A disconnected external drive can provide an additional local copy.
- **Use a domain name:** It is much easier to remember `cloud.mydomain.com` than IP addresses.
- **Secure with HTTPS:** Protect your services with free certificates from [Let's Encrypt](https://letsencrypt.org/) or use Cloudflare for TLS termination, DDoS protection, and DNS management.
- **Monitor your system:** Tools like Grafana, Prometheus, or Uptime Kuma help keep an eye on things.
- **Document your setup:** Write down commands, configuration, and notes. Future you will thank you.

---

# Conclusion

I find selfhosting both a rewarding hobby and a valuable learning experience. It requires patience, responsibility, and curiosity, but it offers more control while building practical skills in Linux, Docker, networking, and security.

There will be moments of frustration, but there will also be moments of pride when your services run smoothly, when you share your own Minecraft world with friends, or when you become less dependent on a large hosted platform for a particular service.

Selfhosting combines freedom with responsibility. It can deepen your understanding of technology and provide the satisfaction of building and maintaining systems that are your own.

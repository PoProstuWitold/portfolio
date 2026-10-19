---
title: 'Introduction to selfhosting'
description: 'A practical guide to running your own services: choosing what to host, getting started, securing access, and planning for backups and maintenance.'
socialImage: images/blog/selfhosting.webp
authors:
  - Witold Zawada
date: '2025-08-30 23:00'
updated: '2026-10-19 20:00'
tags:
  - Selfhosting
  - Docker
  - Cybersecurity
  - Networks
---

# Why run your own services?

Most of us use online services without thinking much about where our data lives or how the software is operated. Selfhosting offers a different arrangement: you run the applications yourself and decide how they are configured, updated, and accessed.

That might mean a photo library for your family, a private Git server, or a small application you built. You can start with an old computer and a single container. You do not need a rack full of servers, and you certainly do not need to rebuild the internet in your living room.

The appeal is greater control and a chance to understand the systems you depend on. The catch is that **you become responsible for keeping those systems working and secure**. This article covers both sides, along with a practical way to get started.

# What counts as selfhosting?

Selfhosting means deploying and administering an application on infrastructure you control. That infrastructure can be a computer at home, a virtual machine, or a rented VPS. The important distinction is not where the hardware sits, but who operates the software and manages its data.

A few examples:

- **[Nextcloud](https://nextcloud.com/)** for file synchronization and sharing.
- **[Jellyfin](https://jellyfin.org/)** for streaming your own media library.
- **[Forgejo](https://forgejo.org/)** for hosting Git repositories and collaborating on code.
- **[Vaultwarden](https://github.com/dani-garcia/vaultwarden)** for a selfhosted password vault, provided you are ready to maintain a security-sensitive service.
- **[Mealie](https://mealie.io/)** for storing and organizing recipes.
- **[Uptime Kuma](https://github.com/louislam/uptime-kuma)** for checking whether services are reachable.

These are examples, not a checklist. Pick applications that solve an actual problem for you; running software just because it *can* be selfhosted quickly becomes more maintenance than hobby.

## DoggoPaste: a project I helped build

Selfhosting can also apply to software you develop yourself. As part of my **engineering bachelor's thesis**, I co-developed **[DoggoPaste](https://github.com/PoProstuWitold/doggopaste)**, a selfhostable application for sharing code snippets and editing them collaboratively in real time. It combines persistent pastes, access control, and live collaboration.

Working on DoggoPaste gave me another perspective on selfhosting: deploying an application is only part of the story. Someone also has to think about configuration, authentication, persistent data, upgrades, and what happens when a service fails.

# What do you gain, and what do you take on?

## The benefits

- **Control over software and data.** You can choose where information is stored, which features are enabled, and how access is managed. You still need to understand what the application itself collects or sends elsewhere.
- **Flexibility.** You can integrate services, customize configuration, and move workloads between machines or providers when the software supports it.
- **Practical experience.** A small server teaches you about Linux, containers, DNS, networking, TLS, databases, and troubleshooting in a way tutorials alone rarely do.
- **Potentially lower recurring costs.** Existing hardware and open-source software may reduce subscription fees, depending on what you run.

## The costs and trade-offs

- **Maintenance is yours.** Updates, migrations, monitoring, backups, and recovery do not happen automatically unless you arrange them.
- **Availability has limits.** A home internet outage, power failure, or failed disk can take your services offline. A cloud provider may offer resilience that is expensive to reproduce at home.
- **Security is your responsibility.** A service reachable from the internet can be attacked. A poorly configured login page or an unpatched dependency can put your data at risk.
- **It is not always cheaper.** Hardware, electricity, storage, domain registration, and your time have costs. Selfhosting is often more valuable as a learning experience than as a cost-saving strategy.

Selfhosting is not automatically more private or secure than a managed service. It gives you more *control over those outcomes*, but the results depend on your decisions.

# A sensible first deployment

You can build a useful setup without jumping straight into virtualization clusters or complex network segmentation. Here is the route I would recommend to someone starting today.

## 1. Choose one low-risk application

Start with something you can afford to take offline, such as Mealie or Uptime Kuma. I would not make a password manager, your only file backup, or an internet-facing authentication system your very first deployment.

## 2. Use hardware you already have

A spare desktop, mini PC, or small single-board computer is enough for many applications. Pay attention to power consumption, RAM, storage health, and noise. There is no reason to buy enterprise hardware before you know what you need.

A VPS is another option if you need reliable external connectivity or do not want a computer running at home. The operating principles are similar, but the network and cost considerations differ.

## 3. Install a stable operating system

**Debian** or **AlmaLinux** are straightforward choices for beginners. Learn how to connect through SSH, manage services, inspect logs, and apply updates. Create a regular administrative user and prefer SSH keys over password-based remote login.

You can explore Proxmox VE or another hypervisor later, when separating workloads into virtual machines becomes useful. Virtualization is an architectural choice, not a requirement for selfhosting.

## 4. Deploy with Docker Compose

Many applications provide official container images and Compose examples. Containers simplify packaging and upgrades, but they are not a security boundary you should blindly trust.

Before starting a service, check its documentation for environment variables, volumes, network ports, and database requirements. In particular, know **where persistent data is stored**. Recreating a container should not erase your application data.

The official [Docker Compose documentation](https://docs.docker.com/compose/) is a good starting point.

## 5. Keep access private at first

Test your first service on your local network. You do not need a public domain or an open router port to learn how it works.

When you want access away from home, decide who actually needs it:

- **Just you or a few trusted people?** A VPN such as WireGuard or Tailscale is often the simplest choice. It can keep the application itself off the public internet.
- **Anyone with a browser?** You will need a public entry point, typically through port forwarding and a reverse proxy, or a managed tunnel. Configure DNS, HTTPS, authentication, and appropriate access restrictions before sharing the address.

A reverse proxy helps route requests and manage TLS certificates, but it does not make an insecure application safe by itself. Likewise, a tunnel changes how traffic reaches your server; it does not remove the need to secure the service behind it. Keep administrative interfaces, including your hypervisor dashboard, off the public internet.

## 6. Make recovery part of the setup

Back up application data, databases, and important configuration. Keep at least one copy outside the machine running the service, ideally with another copy at a separate location. Encrypt backups when they contain sensitive information.

Most importantly, **test restoring them**. A scheduled backup job is not proof that you can recover a working application. For databases, make sure your backup method produces a consistent snapshot or export.

## 7. Maintain what you deploy

Before adding another service, make sure the first one survives a reboot, can be updated, and has a working backup. Record the deployment steps and any decisions you might forget in six months.

One well-maintained application is a better foundation than a dozen services you do not understand.

# Security basics that pay off early

You do not need to build a security operations center to run a personal server. A few consistent habits make a substantial difference:

- **Update deliberately.** Keep the host, container images, and application dependencies current. Read release notes before major upgrades, especially when databases are involved.
- **Limit exposure.** Publish only the services and ports that need to be public. Use firewall rules and separate administrative access from public-facing applications.
- **Protect identities.** Use unique credentials, enable MFA where supported, and avoid running everyday workloads with unnecessary privileges.
- **Use HTTPS correctly.** Obtain trusted certificates, for example through [Let's Encrypt](https://letsencrypt.org/). TLS protects traffic in transit, but does not replace authentication or access control.
- **Watch for failures.** Check service health, disk space, backup status, and relevant logs. Monitoring is useful only if you look at its results or receive actionable alerts.
- **Document and verify.** Save configuration in version control without committing secrets. Test security-sensitive changes instead of assuming they worked.

As your setup grows, network segmentation, centralized logs, secret management, and infrastructure automation become worth exploring. They are useful responses to growing complexity, not prerequisites for your first container.

# How my own setup evolved

I started with a more conventional Linux-and-Docker home server, experimenting with Cloudflare Tunnels and direct port forwarding. Over time, the number of services and the need to manage them consistently pushed me toward a more structured setup.

My current homelab is built around **Proxmox VE**, with workloads separated into virtual machines and containers. I use infrastructure automation, network segmentation, firewall policies, and monitoring to make changes more repeatable and easier to verify. The setup is still evolving; that is part of maintaining infrastructure rather than treating it as a one-time installation.

I document the architecture and its earlier iterations in **[PoProstuWitold/homeserver](https://github.com/PoProstuWitold/homeserver)**. It is a reference for how I approached the problem, not a blueprint you need to copy. A single Linux machine with two useful services may be exactly the right setup for you.

# Further reading

- [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) - a community-maintained directory of software you can host yourself.
- [r/selfhosted](https://www.reddit.com/r/selfhosted/) - experiences, ideas, and troubleshooting discussions from other selfhosters.
- [Docker documentation](https://docs.docker.com/) - container fundamentals, Compose, volumes, and networking.
- [My homeserver documentation](https://github.com/PoProstuWitold/homeserver) - real configurations and the evolution of my own infrastructure.

# Final thoughts

The best reason to start selfhosting is not to replace every cloud service you use. It is to take responsibility for one useful piece of software, understand how it works, and improve it over time.

Start small. Keep your data recoverable. Expose as little as necessary. The interesting part comes when your server stops being a collection of commands you copied and becomes a system you can explain, maintain, and trust.

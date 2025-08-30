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

> Link to documentation of my [homeserver](https://github.com/PoProstuWitold/homeserver)

In this guide you will find easy-to-follow steps and explanations that will help you set up your own server at home using **Linux**, **Docker**, and either **[Port Forwarding](https://github.com/PoProstuWitold/homeserver/tree/main/ports)** or **[Cloudflare tunnels](https://github.com/PoProstuWitold/homeserver/tree/main/tunnels)**.

---

# What is selfhosting?

Selfhosting may sound complicated at first, but in practice it simply means running your own services on hardware you control. In other words, it is the practice of hosting applications on your private server instead of relying on tools outside your administration.

The biggest benefit is control – you decide what software you run, how you secure it, and who has access. This gives you full ownership of your data, privacy, and network architecture. You might also save some money ~~but that's a lie that all selfhosters tell themselves~~. More importantly, selfhosting will improve your skills in Linux, Docker, networking, web protocols, and many other areas.

Some popular examples of selfhosted services include:  
- Cloud storage with **[Nextcloud](https://github.com/nextcloud/all-in-one)** instead of Google Drive or Dropbox  
- Media server with **[Jellyfin](https://github.com/jellyfin/jellyfin)** instead of Netflix or Plex  
- Git hosting with **[Gitea](https://github.com/go-gitea/gitea)** instead of GitHub  
- Password manager with **[Vaultwarden](https://github.com/dani-garcia/vaultwarden)** instead of 1Password or LastPass  
- Recipe manager with **[Mealie](https://github.com/mealie-recipes/mealie)** instead of paid meal planning apps  
- Bookmark manager with **[Linkwarden](https://github.com/linkwarden/linkwarden)** instead of hosted solutions like Raindrop.io  
- Monitoring with **[Uptime Kuma](https://github.com/louislam/uptime-kuma)** instead of commercial uptime monitoring tools  
- Game server hosting providing full control and reduced recurring costs compared to commercial hosting  

This is just a glimpse of what is possible. If a service exists in the cloud, there is often an open source alternative that you can selfhost.

---

# Pros & Cons of Selfhosting

Everything has pros and cons. Selfhosting is no exception. It can be incredibly rewarding, but also frustrating if you are not prepared.

## Pros

1. **Control:** Your data is completely under your control. You decide how it is stored, encrypted, and backed up. Open source alternatives give you flexibility and freedom to customize your setup.  
2. **Privacy:** No hidden telemetry, data collection, or third-party tracking. You know exactly what runs on your server and you are the only one who decides who has access.  
3. **Independence:** You are less dependent on external companies that can shut down, change pricing, or remove features. With selfhosting there are no vendor lock-ins.  
4. **Skill development:** You will naturally learn a lot about Linux, containers, networking, DNS, SSL certificates, and web protocols. These are valuable skills both as a hobby and professionally.  
5. **Potential cost savings:** Some services like a Minecraft server or a password manager can be run at home with minimal cost compared to hosted solutions. While you will pay for electricity and hardware, you can avoid monthly subscription fees.  
6. **Customization:** You can configure services exactly the way you want. Want a different theme? Plugin? Custom domain? With your own server you are not limited.  

## Cons

1. **Responsibility:** You are the system administrator. Updates, backups, troubleshooting, monitoring, security patches – all of this is your job. There is no support hotline to call.  
2. **Security risks:** Misconfigurations or outdated software can lead to vulnerabilities. You need to stay on top of updates and follow security best practices.  
3. **Uptime challenges:** Cloud providers have multiple datacenters, backup power, and redundancy. Your home server does not. Power outages, router restarts, or disk failures can make your services unavailable.  
4. **Learning curve:** It can feel overwhelming in the beginning. Linux commands, Docker syntax, DNS records, and SSL certificates can be a lot to absorb at once.  
5. **Hardware limitations:** Running many services requires more RAM and storage. Some setups might push your hardware to the limit and you may need to invest in better equipment.  

---

# What should you know before starting?

Before you dive into selfhosting, there are a few basics that will make your life much easier:

1. **Linux fundamentals:** You do not need to be an expert, but you should know how to navigate the terminal, edit files, and manage services. Distributions like Ubuntu or Debian are beginner friendly.  
2. **Networking basics:** Understanding concepts like IP addresses, ports, DNS, and firewalls will help you configure your services correctly and avoid frustration.  
3. **Docker basics:** Most selfhosted apps today are shipped as Docker containers. Learn how to run, stop, and update containers, and how to read `docker-compose.yml` files. Tools like Portainer can make this easier.  
4. **Backups:** Things will break sooner or later. Always make backups of important data (e.g. Nextcloud files, databases, configs).  
5. **Security awareness:** Exposing services to the internet without proper setup is dangerous. Use HTTPS, strong passwords, two-factor authentication, and keep everything updated.  

If you feel comfortable with these basics, you are ready to start experimenting.  

---

# Okay, but how do I start?

If you are wondering how to begin in practice, here is a simple roadmap:

1. **Choose your hardware:** Decide whether you want to repurpose an old PC, buy a business mini PC (like a Lenovo ThinkCentre, Dell OptiPlex, or HP EliteDesk), or start with a Raspberry Pi. Make sure it has enough RAM and storage for your needs.  
2. **Install Linux:** Pick a beginner friendly distribution like Ubuntu Server or Debian. Get comfortable with connecting to your server over SSH.  
3. **Keep your system updated:** Regular updates are essential for both stability and security.  
4. **Install Docker and Docker Compose:** Containers make running selfhosted apps much easier and reduce the risk of breaking your base system.  
5. **Deploy your first service:** Start with something useful and rewarding, such as Nextcloud for personal cloud storage or Jellyfin for streaming your media.  
6. **Set up backups:** Make sure you have a backup strategy in place for important data and configuration files.  
7. **Expand gradually:** Once you feel comfortable, try out new services like a password manager, a Git hosting platform, or a monitoring tool. Add them step by step instead of all at once.  

Remember: it is better to have one reliable service running well than ten broken ones you never use.  

---

### Helpful resources

- [**r/selfhosted**](https://www.reddit.com/r/selfhosted/) – main subreddit for discussions, tutorials, and questions.  
- [**awesome-selfhosted**](https://github.com/awesome-selfhosted/awesome-selfhosted) – a massive list of selfhostable software.  
- [**PoProstuWitold/homeserver**](https://github.com/PoProstuWitold/homeserver) – my personal guide and documentation of my setups (Cloudflare tunnels & port forwarding).  

### YouTube channels worth checking

- [**DB Tech**](https://www.youtube.com/@DBTechYT) – practical tutorials for Docker and selfhosting.  
- [**TechHut**](https://www.youtube.com/@TechHut) – Linux, hardware, and privacy focused.  
- [**Hardware Haven**](https://www.youtube.com/@HardwareHaven) – hardware reviews and selfhosting builds.  

Nobody paid me to recommend them. These are my honest recommendations.  

---

# Best practices

As you grow your selfhosting journey, here are some best practices to keep in mind:

- **Use Docker or Podman:** Containers make managing and updating services much easier.  
- **Automate backups:** Keep at least one copy offsite – for example on another machine, an external drive, or encrypted in a cloud service.  
- **Use a domain name:** It is much easier to remember `cloud.mydomain.com` than IP addresses.  
- **Secure with HTTPS:** Protect your services with free certificates from [Let's Encrypt](https://letsencrypt.org/) or use Cloudflare for TLS termination, DDoS protection, and DNS management.  
- **Monitor your system:** Tools like Grafana, Prometheus, or Uptime Kuma help keep an eye on things.  
- **Document your setup:** Write down commands, configs, and notes. Future you will thank you.   

---

# Conclusion

I believe that selfhosting is both a rewarding hobby and a valuable learning experience. While it can sometimes be challenging and requires patience, responsibility, and curiosity, the benefits far outweigh the effort. You gain privacy, control, and independence while also improving your technical skills in areas like Linux, Docker, networking, and security.

There will be moments of frustration, but there will also be moments of pride when your services run smoothly, when you share your own Minecraft world with friends, or when you realize you are no longer dependent on a big tech company to manage your data.

Embracing selfhosting means embracing both freedom and responsibility. It deepens your understanding of technology and gives you the unmatched satisfaction of building and maintaining systems that are truly your own.

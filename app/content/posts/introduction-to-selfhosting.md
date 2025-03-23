---
title: 'Introduction to selfhosting'
description: 'Is privacy important to you? Have you ever wanted more control over your data? Would you like to learn networking and Docker? If the answer to any of these questions is yes, then this article is for you!'
socialImage: images/blog/homeserver.webp
authors: 
  - Witold Zawada
date: '2024-10-03 17:40'
tags:
  - Selfhosting
  - Docker
  - Cybersecurity
  - Networks
---

What is selfhosting? In simple words it's a practice of running some services on your private server instead of using tools outside your control, outside of your administration. It gives you complete control over your data, privacy and your network architecture. You can also potentially save some money, but ~~that's a lie that all selfhosters tell themselves~~ more importantly it can and will improve your skills in various fields such as Linux, Docker, computer networks, web protocols and so on.

# Pros & Cons

Everything has pros and cons. Unfortunately, selfhosting isn't an exception here.

## Pros
1. **Control**: Your data is completely under your control. You can use open-source software like [**Nextcloud**](https://github.com/nextcloud/all-in-one) instead of **Dropbox** or [**Pastefy**](https://github.com/interaapps/pastefy) instead of **Pastebin**. This allows for full customization and tailoring to your specific needs, without external limitations or dependencies.

2. **Privacy**: No telemetry, no data collection, and no third-party tracking. With selfhosting, you know exactly what is running on your server, ensuring that your data isn’t being sold or analyzed by external companies. 

3. **Independence**: You are less dependent on third-party services that might shut down or change their terms. Selfhosting gives you autonomy, allowing you to avoid vendor lock-ins or unwanted changes to features or pricing.

4. **Skills and knowledge**: Hosting your own services helps you develop valuable technical skills. Whether you're using Node.js, Docker, or managing databases, it’s a great learning opportunity that makes you more proficient with server management, networking, and software configuration.

5. **Cost saving**: You can selfhost typically expensive services, like a Minecraft server, at a fraction of the market price.


## Cons
1. **Complete responsibility**: You're responsible for every aspect of your server. This includes updates, backups, troubleshooting, and maintenance. Without the safety net of a cloud provider, the burden of keeping everything up and running falls entirely on you.

2. **Security**: Selfhosting comes with security risks. You need to ensure your services are properly configured, regularly updated, and protected from potential attacks. Neglecting security patches can leave your system vulnerable to hackers or data breaches.

3. **Harder to get 100% uptime**: Achieving constant uptime can be more challenging, especially if you don't have a robust infrastructure. Power outages, hardware failures, or network issues can lead to service interruptions, whereas cloud providers often offer high availability and redundancy.

4. **Dealing with all the issues alone**: If something goes wrong, there’s no external support team to turn to. Whether it’s server crashes, misconfigurations, or technical bugs, you’ll have to troubleshoot everything on your own or seek help from community forums.

# Okay, but how do I start?

When I began selfhosting, I found it quite challenging and felt completely lost at times. You might feel that way too, but don’t let it scare you away! It **is** part of the journey! There are some resources that helped me and may help you too:

- [**r/selfhosted**](https://www.reddit.com/r/selfhosted/) - major subreddit for selfhosters.
- [**awesome-selfhosted**](https://github.com/awesome-selfhosted/awesome-selfhosted) - GitHub repository for free services that can be selfhosted.
- [**PoProstuWitold/homeserver**](https://github.com/PoProstuWitold/homeserver) - my guide-like documentation for all my iterations of homeserver setups (cloudflare tunnels & port forwarding).

There are also some great YouTube channels I was using when I started selfhosting:
- [**DB Tech**](https://www.youtube.com/@DBTechYT)
- [**TechHut**](https://www.youtube.com/@TechHut)
- [**Hardware Haven**](https://www.youtube.com/@HardwareHaven)

Nobody paid me. It's my honest recommendation 😁

# Little bonus: my setup
Below is my actual setup in real life 🥳

![{caption: My small homeserver setup - ASUS router and Intel NUC computer}](/images/blog/homeserver.webp)

# Conclusion

I believe that self-hosting is a fantastic hobby that can also prove to be highly beneficial in your professional life. While it can be challenging at times, the rewards are well worth the effort. Not only does it enhance your technical skills and understanding of server management, but it also gives you greater control over your data and applications. Embracing self-hosting can lead to a deeper appreciation for the intricacies of technology, and the satisfaction of building and maintaining your own systems is truly unmatched!